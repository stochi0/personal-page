import { Metadata } from "next";
import { profile } from "@/content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
    "Writings",
    "Thoughts, insights, and stories from Ayush",
    profile.name
);

export default function Blog() {
    return (
        <div className="main-container">
            {/* Page Title */}
            <header className="section" style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <h1 style={{ fontSize: '2.5rem' }}>Writings</h1>
                <p className="tagline" style={{ marginTop: '1rem' }}>
                    Collected thoughts and quiet observations
                </p>
            </header>

            <div className="star">✦</div>

            {/* Coming Soon Section */}
            <section className="section" style={{ textAlign: 'center', padding: '4rem 0' }}>
                <p className="section-title" style={{ fontSize: '1.1rem', opacity: 0.7 }}>
                    In quiet preparation
                </p>
            </section>

            <div className="star">✦</div>

            {/* Footer */}
            <footer className="footer">
                <p className="footer-quote">&ldquo;{profile.footerQuote}&rdquo;</p>
            </footer>
        </div>
    );
}
