"use client";

import { use, useState, useMemo } from "react";
import { categories, translations, Language } from "@/data/terms";
import Image from "next/image";

export default function Home({ params }: { params: Promise<{ lang: Language }> }) {
  const { lang } = use(params);
  const t = translations[lang] || translations.en;

  const [search, setSearch] = useState("");

  const filteredCategories = useMemo(() => {
    if (!search) return categories;

    const searchLower = search.toLowerCase();
    return categories.map(cat => ({
      ...cat,
      terms: cat.terms.filter(term =>
        term.name[lang]?.toLowerCase().includes(searchLower) ||
        term.description[lang]?.toLowerCase().includes(searchLower) ||
        term.name.en.toLowerCase().includes(searchLower)
      )
    })).filter(cat => cat.terms.length > 0);
  }, [search, lang]);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container animate-fade-in">
          <div className="accent-border"></div>
          <h1 className="hero-title premium-gradient-text">{t.heroTitle}</h1>
          <p className="hero-sub">{t.heroSub}</p>

          <div className="search-container glass-card">
            <div className="search-icon">🔍</div>
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              className="search-input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Categories & Terms */}
      <div className="container">
        {filteredCategories.map((cat, idx) => (
          <section key={cat.id} className="category-section animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
            <div className="category-header">
              <span className="category-count">{cat.terms.length}</span>
              <h2 className="category-title">{cat.title[lang]}</h2>
            </div>
            <div className="terms-grid">
              {cat.terms.map(term => (
                <div key={term.id} className="term-card glass-card">
                  {term.image && (
                    <div className="term-image-container">
                      <Image
                        src={term.image}
                        alt={term.name.en}
                        fill
                        className="term-image"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority={idx < 1}
                      />
                      <div className="image-overlay"></div>
                    </div>
                  )}
                  <div className="term-content">
                    <span className="term-name-en">{term.name.en}</span>
                    <h3 className="term-name">{term.name[lang]}</h3>
                    <p className="term-description">{term.description[lang]}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
