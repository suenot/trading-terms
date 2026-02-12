import type { Metadata } from "next";
import "../globals.css";
import { Language, languages } from "@/data/terms";

export const metadata: Metadata = {
    title: "Trading Terminology Dictionary",
    description: "Comprehensive multi-language guide to trading systems and algorithms.",
};

export async function generateStaticParams() {
    return languages.map((lang) => ({ lang }));
}

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}>) {
    const { lang } = (await params) as { lang: Language };

    return (
        <html lang={lang}>
            <body>
                <nav className="glass-nav">
                    <div className="container nav-content">
                        <a href={`/${lang}`} className="logo">
                            <div className="logo-icon">T</div>
                            <span className="font-outfit font-bold text-xl">
                                TRADING<span className="text-secondary">TERMS</span>
                            </span>
                        </a>
                        <div className="lang-switcher">
                            {languages.map((l) => (
                                <a
                                    key={l}
                                    href={`/${l}`}
                                    className={`lang-link ${l === lang ? 'active' : ''}`}
                                >
                                    {l.toUpperCase()}
                                </a>
                            ))}
                        </div>
                    </div>
                </nav>
                {children}
                <footer className="footer">
                    <div className="container">
                        <div className="logo" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
                            <div className="logo-icon">T</div>
                            <span className="font-outfit font-bold text-xl">TRADINGTERMS</span>
                        </div>
                        <p className="text-secondary" style={{ fontSize: '0.875rem' }}>
                            Built for the modern quantitative trading community.
                            <br />
                            © 2026 Trading Terminology Project. All concepts visualized through AI.
                        </p>
                    </div>
                </footer>
            </body>
        </html>
    );
}
