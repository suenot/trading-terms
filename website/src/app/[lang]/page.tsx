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

      <style jsx>{`
        .hero-section {
          padding: 10rem 0 6rem;
          background: radial-gradient(circle at 0% 0%, rgba(0, 242, 255, 0.05) 0%, transparent 50%);
        }
        .hero-title {
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 800;
          margin-bottom: 2rem;
          line-height: 1.2;
          max-width: 900px;
        }
        .hero-sub {
          font-size: 1.25rem;
          color: var(--text-secondary);
          max-width: 650px;
          margin-bottom: 4rem;
          line-height: 1.6;
          font-weight: 300;
        }
        .search-container {
          display: flex;
          align-items: center;
          padding: 0.5rem 1.5rem;
          max-width: 600px;
          border-radius: 20px;
        }
        .search-icon {
          font-size: 1.2rem;
          margin-right: 1rem;
          opacity: 0.5;
        }
        .search-input {
          flex: 1;
          background: transparent;
          border: none;
          color: white;
          padding: 1rem 0;
          font-size: 1.1rem;
          font-family: inherit;
          outline: none;
        }
        .category-section {
          margin-bottom: 8rem;
        }
        .category-header {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            margin-bottom: 4rem;
        }
        .category-count {
            width: 40px;
            height: 40px;
            background: rgba(255,255,255,0.05);
            border: 1px solid var(--card-border);
            border-radius: 10px;
            display: grid;
            place-items: center;
            font-family: 'Outfit', sans-serif;
            font-weight: 700;
            color: var(--accent-primary);
            font-size: 0.9rem;
        }
        .category-title {
          font-size: 2.5rem;
          font-weight: 700;
        }
        .terms-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
          gap: 2.5rem;
        }
        .term-card {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .term-image-container {
          position: relative;
          width: 100%;
          aspect-ratio: 16/10;
          overflow: hidden;
        }
        .image-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 50%;
            background: linear-gradient(to top, var(--bg-color), transparent);
            opacity: 0.6;
        }
        .term-image {
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.2, 0, 0, 1);
        }
        .term-card:hover .term-image {
          transform: scale(1.08);
        }
        .term-content {
          padding: 2.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .term-name-en {
          font-size: 0.7rem;
          color: var(--accent-primary);
          text-transform: uppercase;
          letter-spacing: 0.2em;
          margin-bottom: 0.75rem;
          font-weight: 700;
          font-family: 'Outfit';
        }
        .term-name {
          font-size: 1.75rem;
          margin-bottom: 1.25rem;
          font-weight: 600;
          color: white;
        }
        .term-description {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--text-secondary);
          font-weight: 400;
        }

        @media (max-width: 768px) {
          .category-title { font-size: 1.75rem; }
          .terms-grid { grid-template-columns: 1fr; }
          .hero-section { padding-top: 6rem; }
        }
      `}</style>
    </main>
  );
}
