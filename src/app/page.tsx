import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Ayush',
  description: 'AI, Agents, RL, Vision. Research & Engineering. Open to AI research & applied roles.',
  openGraph: {
    title: 'Ayush',
    description: 'AI, Agents, RL, Vision. Research & Engineering. Open to AI research & applied roles.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayush',
    description: 'AI, Agents, RL, Vision. Research & Engineering. Open to AI research & applied roles.',
  },
};

export default function Home() {
  return (
    <div className="main-container">
      {/* Header */}
      <header className="section" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1>Ayush</h1>
      </header>

      {/* Tagline */}
      <section className="section" style={{ textAlign: 'center' }}>
        <p className="tagline">
          Research & Engineering: AI, Agents, RL, Vision and Piano.
        </p>
      </section>

      <div className="star">✦</div>

      {/* Currently */}
      <section className="section">
        <h2 className="section-title">Currently</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
          Recently returned from a solo adventure through China (11 cities), Macau, and Hong Kong, still unpacking stories!
        </p>
        <p style={{ color: 'var(--text-secondary)' }}>
          Previously: QX Labs, Unsiloed AI (YC F25). Check out my <Link href="/work" className="content-link" style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}>work</Link> page.
        </p>
      </section>

      {/* Projects */}
      <section className="section">
        <h2 className="section-title">Projects</h2>
        <ul className="item-list">
          <li>
            <a href="https://github.com/stochi0/beacongrad" target="_blank" rel="noopener noreferrer" className="content-link" style={{ display: 'block' }}>
              <div className="item-title">BeaconGrad</div>
              <div className="item-description">A NumPy-based autograd engine with neural modules and optimizers.</div>
            </a>
          </li>
          <li>
            <div className="item-title">YOLOv11 Document Layout Recognition</div>
            <div className="item-description">Fine-tuned for document analysis, accelerated via TensorRT & ONNX.</div>
          </li>
          <li>
            <div className="item-title">Discrete Walk-Jump Sampling</div>
            <div className="item-description">Protein discovery using EBMs and Langevin MCMC.</div>
          </li>
          <li>
            <div className="item-title">Expandable Subspace Ensemble</div>
            <div className="item-description">Class-incremental learning without catastrophic forgetting.</div>
          </li>
          <li>
            <div className="item-title">Concrete Score Matching</div>
            <div className="item-description">Generalized score matching for discrete data distributions.</div>
          </li>
        </ul>
        <p style={{ marginTop: '1.5rem', textAlign: 'center' }}>
          <Link href="/projects" className="content-link" style={{ textDecoration: 'underline', textUnderlineOffset: '4px', fontSize: '0.9rem' }}>
            View all projects →
          </Link>
        </p>
      </section>

      {/* Work */}
      <section className="section">
        <h2 className="section-title">Experience</h2>
        <ul className="item-list">
          <li>
            <Link href="/work" className="content-link" style={{ display: 'block' }}>
              <div className="item-title">Founding AI Engineer · QX Labs</div>
              <div className="item-description">Agentic knowledge-graph platform for private-equity workflows.</div>
            </Link>
          </li>
          <li>
            <Link href="/work" className="content-link" style={{ display: 'block' }}>
              <div className="item-title">Founding AI Engineer · Unsiloed AI (YC F25)</div>
              <div className="item-description">Document-AI and RAG pipelines for financial customers.</div>
            </Link>
          </li>
          <li>
            <Link href="/work" className="content-link" style={{ display: 'block' }}>
              <div className="item-title">Research · MIT, Tsinghua, UvA</div>
              <div className="item-description">CRH hypothesis, 3D reconstruction, multimodal models.</div>
            </Link>
          </li>
          <li>
            <Link href="/work" className="content-link" style={{ display: 'block' }}>
              <div className="item-title">Research Intern · IIT Bombay</div>
              <div className="item-description">Spiking neural networks, real-time fault detection.</div>
            </Link>
          </li>
        </ul>
        <p style={{ marginTop: '1.5rem', textAlign: 'center' }}>
          <Link href="/work" className="content-link" style={{ textDecoration: 'underline', textUnderlineOffset: '4px', fontSize: '0.9rem' }}>
            Full work history →
          </Link>
        </p>
      </section>

      {/* Honors */}
      <section className="section">
        <h2 className="section-title">Honors & Achievements</h2>
        <ul className="item-list">
          <li>
            <div className="item-title">CSC Scholarship</div>
            <div className="item-description">Awarded to attend the HTGR Summer School 2025.</div>
          </li>
          <li>
            <div className="item-title">Meta Hacker Cup 2024 (Round 2)</div>
            <div className="item-description">Advanced in Meta&apos;s global ACM-ICPC-style competition.</div>
          </li>
          <li>
            <div className="item-title">CodeUncode 2024</div>
            <div className="item-description">Secured 49th position out of 2000 participants.</div>
          </li>
          <li>
            <div className="item-title">Tsinghua University Programs</div>
            <div className="item-description">Selected for multiple summer schools including HTGR, IEDA, Design Futures, and Music Brain Science.</div>
          </li>
          <li>
            <div className="item-title">2025 RUC International Summer School</div>
            <div className="item-description">Selected for Renmin University of China, Beijing.</div>
          </li>
        </ul>
      </section>

      {/* Music */}
      <section className="section">
        <h2 className="section-title">Music</h2>
        <ul className="item-list">
          <li>
            <div className="item-title">1st Place, District Classical Music Concert</div>
            <div className="item-description">Led as the pianist in a winning group performance.</div>
          </li>
          <li>
            <div className="item-title">Lead Pianist, School Choir (Grades 5–12)</div>
            <div className="item-description">Directed and performed all musical arrangements.</div>
          </li>
          <li>
            <div className="item-title">Farewell Ceremony Pianist</div>
            <div className="item-description">Selected to perform for the senior students&apos; ceremony.</div>
          </li>
          <li>
            <div className="item-title">1st Runner-up, Greek Play Competition</div>
            <div className="item-description">Awarded for live background music.</div>
          </li>
        </ul>
      </section>

      <div className="star">✦</div>

      {/* Connect */}
      <section className="section" style={{ textAlign: 'center' }}>
        <h2 className="section-title">Connect</h2>
        <div className="connect-links">
          <a 
            href="mailto:ayushbodade1@gmail.com" 
            className="connect-link"
          >
            Email
          </a>
          <a 
            href="https://x.com/stochi0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="connect-link"
          >
            Twitter
          </a>
          <a 
            href="https://github.com/stochi0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="connect-link"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="star" style={{ margin: '2rem 0 1rem' }}>✦</div>
        <p>Game Is Game.</p>
      </footer>
    </div>
  );
}
