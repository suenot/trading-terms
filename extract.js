const fs = require('fs');
const path = require('path');

function parseMarkdown(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const sections = [];
    let currentCategory = null;

    const lines = content.split('\n');
    for (let line of lines) {
        if (line.startsWith('## ')) {
            currentCategory = {
                title: line.replace('## ', '').trim(),
                terms: []
            };
            sections.push(currentCategory);
        } else if (line.startsWith('### ')) {
            // Subcategory or just a header for a group of terms
            // Treatment depends on how deep we want the structure
        } else if (line.startsWith('- **')) {
            const match = line.match(/- \*\*(.*?)\*\* (?:—|-|:) (.*)/);
            if (match && currentCategory) {
                currentCategory.terms.push({
                    name: match[1].trim(),
                    description: match[2].trim()
                });
            }
        }
    }
    return sections;
}

const en = parseMarkdown('/Users/suenot/projects/trading-terms/readme.md');
const ru = parseMarkdown('/Users/suenot/projects/trading-terms/readme.ru.md');
const zh = parseMarkdown('/Users/suenot/projects/trading-terms/readme.zh.md');

// Match them by position/name (assuming structure is identical)
const combined = en.map((cat, catIdx) => {
    return {
        id: cat.title.toLowerCase().replace(/[^a-z0-id]/g, '-'),
        title: {
            en: cat.title,
            ru: ru[catIdx]?.title || cat.title,
            zh: zh[catIdx]?.title || cat.title
        },
        terms: cat.terms.map((term, termIdx) => {
            return {
                id: term.name.toLowerCase().replace(/[^a-z0-9]/g, '-'),
                name: {
                    en: term.name,
                    ru: ru[catIdx]?.terms[termIdx]?.name || term.name,
                    zh: zh[catIdx]?.terms[termIdx]?.name || term.name
                },
                description: {
                    en: term.description,
                    ru: ru[catIdx]?.terms[termIdx]?.description || term.description,
                    zh: zh[catIdx]?.terms[termIdx]?.description || term.description
                }
            };
        })
    };
});

fs.writeFileSync('merged_terms.json', JSON.stringify(combined, null, 2));
