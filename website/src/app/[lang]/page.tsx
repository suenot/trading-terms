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
        <div className="container hero-grid animate-fade-in">
          <div className="hero-text">
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

          <div className="hero-visual">
            <div className="hero-svg-bg"></div>
            <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg-main">
              <path d="M50 350 L350 350" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <path d="M50 350 L50 50" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

              {[...Array(12)].map((_, i) => {
                const hStart = (100 + Math.cos(i * 0.8) * 40).toFixed(1);
                const hMid = (150 + Math.sin(i) * 60).toFixed(1);
                const yStart = (200 + Math.sin(i * 0.5) * 50).toFixed(1);
                const yMid = (150 + Math.cos(i) * 30).toFixed(1);
                const duration = (3 + i * 0.2).toFixed(1);

                return (
                  <rect
                    key={i}
                    x={80 + i * 22}
                    y={yStart}
                    width="10"
                    height={hStart}
                    fill={i % 3 === 0 ? "var(--accent-secondary)" : "var(--accent-primary)"}
                    opacity="0.3"
                  >
                    <animate attributeName="height" values={`${hStart}; ${hMid}; ${hStart}`} dur={`${duration}s`} repeatCount="indefinite" />
                    <animate attributeName="y" values={`${yStart}; ${yMid}; ${yStart}`} dur={`${duration}s`} repeatCount="indefinite" />
                  </rect>
                );
              })}

              <path d="M50 300 Q 100 250, 150 280 T 250 180 T 350 120" stroke="var(--accent-primary)" strokeWidth="3" fill="none" strokeDasharray="1000" strokeDashoffset="1000">
                <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="4s" fill="freeze" />
              </path>

              <circle cx="150" cy="280" r="4" fill="var(--accent-primary)">
                <animate attributeName="r" values="4;7;4" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="250" cy="180" r="4" fill="var(--accent-secondary)">
                <animate attributeName="r" values="4;7;4" dur="2.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="1;0.5;1" dur="2.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="350" cy="120" r="6" fill="white">
                <animate attributeName="r" values="6;10;6" dur="1.5s" repeatCount="indefinite" />
              </circle>

              <circle cx="200" cy="200" r="120" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="5,10">
                <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="20s" repeatCount="indefinite" />
              </circle>
              <circle cx="200" cy="200" r="90" stroke="rgba(0,242,255,0.1)" strokeWidth="1" strokeDasharray="10,20">
                <animateTransform attributeName="transform" type="rotate" from="360 200 200" to="0 200 200" dur="15s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>
        </div>
      </section>

      {/* Categories & Terms */}
      <div className="container" id="content-root">
        {filteredCategories.map((cat, catIdx) => (
          <section key={cat.id} className="category-section animate-fade-in" style={{ animationDelay: `${catIdx * 0.1}s` }}>
            <div className="category-header">
              <span className="category-count">{cat.terms.length}</span>
              <h2 className="category-title">{cat.title[lang]}</h2>
            </div>
            <div className="terms-grid">
              {cat.terms.map((term, termIdx) => (
                <article key={term.id} className="term-card glass-card">
                  {term.image && (
                    <div className="term-image-container shimmer-bg">
                      <Image
                        src={term.image}
                        alt={term.name[lang] || term.name.en}
                        fill
                        className="term-image"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={catIdx === 0 && termIdx < 3}
                        loading={catIdx === 0 && termIdx < 3 ? "eager" : "lazy"}
                      />
                      <div className="image-overlay"></div>
                    </div>
                  )}
                  <div className="term-content">
                    <span className="term-name-en">{term.name.en}</span>
                    <h3 className="term-name">{term.name[lang]}</h3>
                    <p className="term-description">{term.description[lang]}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
