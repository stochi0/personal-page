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
      {/* Hero - Personal Introduction */}
      <section id="intro" className="hero-section">
        <div className="hero-greeting">Hey, I&apos;m</div>
        <h1 className="hero-name">Ayush</h1>
        <p className="hero-bio">
          I build things at the intersection of <span className="highlight">AI research</span> and 
          <span className="highlight"> engineering</span>. Currently obsessed with agents, reinforcement learning, 
          and making machines understand the world better.
        </p>
        <p className="hero-bio" style={{ marginTop: '1rem' }}>
          When I&apos;m not training models, you&apos;ll find me at the <span className="highlight">piano</span> — 
          music is my other language.
        </p>
      </section>

      {/* Now - What I'm up to */}
      <section id="now" className="section">
        <div className="section-header">
          <span className="section-label">Now</span>
          <div className="section-line"></div>
        </div>
        <div className="now-card">
          <p className="now-text">
            Just returned from a solo adventure through <strong>11 cities in China</strong>, Macau, and Hong Kong. 
            Still processing the chaos of night markets in Chengdu, the quiet of West Lake in Hangzhou, 
            and way too much hotpot.
          </p>
          <p className="now-text" style={{ marginTop: '1.5rem' }}>
            Previously shipped AI at <Link href="/work" className="inline-link">QX Labs</Link> and 
            <Link href="/work" className="inline-link"> Unsiloed AI</Link> (YC F25).
          </p>
        </div>
      </section>

      <div className="divider">
        <span className="divider-text">what I&apos;ve been building</span>
      </div>

      {/* Craft - Featured Work */}
      <section id="craft" className="section">
        <div className="section-header">
          <span className="section-label">Craft</span>
          <div className="section-line"></div>
        </div>
        
        <div className="craft-grid">
          <a href="https://github.com/stochi0/beacongrad" target="_blank" rel="noopener noreferrer" className="craft-card craft-card-featured">
            <div className="craft-tag">Open Source</div>
            <h3 className="craft-title">BeaconGrad</h3>
            <p className="craft-desc">A NumPy-based autograd engine I built to understand backprop from scratch. Neural modules, optimizers, the whole deal.</p>
            <span className="craft-link">View on GitHub →</span>
          </a>
          
          <div className="craft-card">
            <div className="craft-tag">Computer Vision</div>
            <h3 className="craft-title">YOLOv11 Document Layout</h3>
            <p className="craft-desc">Fine-tuned for document analysis. Accelerated with TensorRT & ONNX for real-world speed.</p>
          </div>
          
          <div className="craft-card">
            <div className="craft-tag">Generative Models</div>
            <h3 className="craft-title">Discrete Walk-Jump Sampling</h3>
            <p className="craft-desc">Protein discovery using energy-based models and Langevin MCMC. Biology meets ML.</p>
          </div>
          
          <div className="craft-card">
            <div className="craft-tag">Continual Learning</div>
            <h3 className="craft-title">Expandable Subspace Ensemble</h3>
            <p className="craft-desc">Teaching models to learn new things without forgetting the old. No catastrophic forgetting here.</p>
          </div>
          
          <div className="craft-card">
            <div className="craft-tag">Research</div>
            <h3 className="craft-title">Concrete Score Matching</h3>
            <p className="craft-desc">Generalized score matching for discrete distributions. Math that actually works.</p>
          </div>
        </div>
        
        <div className="section-cta">
          <Link href="/projects" className="cta-link">
            See all projects <span className="arrow">→</span>
          </Link>
        </div>
      </section>

      <div className="divider">
        <span className="divider-text">where I&apos;ve been</span>
      </div>

      {/* Journey - Experience */}
      <section id="journey" className="section">
        <div className="section-header">
          <span className="section-label">Journey</span>
          <div className="section-line"></div>
        </div>
        
        <div className="journey-timeline">
          <Link href="/work" className="journey-item">
            <div className="journey-marker"></div>
            <div className="journey-content">
              <span className="journey-role">Founding AI Engineer</span>
              <span className="journey-place">QX Labs</span>
              <p className="journey-desc">Building an agentic knowledge-graph platform for private-equity workflows.</p>
            </div>
          </Link>
          
          <Link href="/work" className="journey-item">
            <div className="journey-marker"></div>
            <div className="journey-content">
              <span className="journey-role">Founding AI Engineer</span>
              <span className="journey-place">Unsiloed AI <span className="badge">YC F25</span></span>
              <p className="journey-desc">Document-AI and RAG pipelines for financial customers. Shipped fast.</p>
            </div>
          </Link>
          
          <Link href="/work" className="journey-item">
            <div className="journey-marker"></div>
            <div className="journey-content">
              <span className="journey-role">Research</span>
              <span className="journey-place">MIT · Tsinghua · UvA</span>
              <p className="journey-desc">CRH hypothesis, 3D reconstruction, multimodal models. Academic adventures.</p>
            </div>
          </Link>
          
          <Link href="/work" className="journey-item">
            <div className="journey-marker"></div>
            <div className="journey-content">
              <span className="journey-role">Research Intern</span>
              <span className="journey-place">IIT Bombay</span>
              <p className="journey-desc">Spiking neural networks and real-time fault detection systems.</p>
            </div>
          </Link>
        </div>
        
        <div className="section-cta">
          <Link href="/work" className="cta-link">
            Full story <span className="arrow">→</span>
          </Link>
        </div>
      </section>

      <div className="divider">
        <span className="divider-text">some highlights</span>
      </div>

      {/* Notes - Achievements & Music combined */}
      <section id="notes" className="section">
        <div className="section-header">
          <span className="section-label">Notes</span>
          <div className="section-line"></div>
        </div>
        
        <div className="notes-grid">
          <div className="notes-column">
            <h3 className="notes-heading">Honors</h3>
            <ul className="notes-list">
              <li>
                <span className="note-title">CSC Scholarship</span>
                <span className="note-detail">HTGR Summer School 2025</span>
              </li>
              <li>
                <span className="note-title">Meta Hacker Cup 2024</span>
                <span className="note-detail">Advanced to Round 2</span>
              </li>
              <li>
                <span className="note-title">CodeUncode 2024</span>
                <span className="note-detail">49th / 2000</span>
              </li>
              <li>
                <span className="note-title">Tsinghua Programs</span>
                <span className="note-detail">HTGR, IEDA, Design Futures, Music Brain Science</span>
              </li>
              <li>
                <span className="note-title">RUC Summer School</span>
                <span className="note-detail">Renmin University, Beijing 2025</span>
              </li>
            </ul>
          </div>
          
          <div className="notes-column">
            <h3 className="notes-heading">Music</h3>
            <ul className="notes-list">
              <li>
                <span className="note-title">1st Place, District Classical</span>
                <span className="note-detail">Lead pianist, group performance</span>
              </li>
              <li>
                <span className="note-title">School Choir Pianist</span>
                <span className="note-detail">Grades 5–12, all arrangements</span>
              </li>
              <li>
                <span className="note-title">Farewell Ceremony</span>
                <span className="note-detail">Selected as ceremony pianist</span>
              </li>
              <li>
                <span className="note-title">Greek Play Competition</span>
                <span className="note-detail">1st Runner-up, live music</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="divider divider-accent">✦</div>

      {/* Connect */}
      <section id="connect" className="section connect-section">
        <h2 className="connect-title">Let&apos;s talk</h2>
        <p className="connect-text">
          I&apos;m always interested in new projects, research collaborations, or just chatting about AI, music, or travel stories.
        </p>
        <div className="connect-links">
          <a href="mailto:ayushbodade1@gmail.com" className="connect-btn">
            <span className="connect-icon">✉</span>
            Email
          </a>
          <a href="https://x.com/stochi0" target="_blank" rel="noopener noreferrer" className="connect-btn">
            <span className="connect-icon">𝕏</span>
            Twitter
          </a>
          <a href="https://github.com/stochi0" target="_blank" rel="noopener noreferrer" className="connect-btn">
            <span className="connect-icon">◆</span>
            GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-quote">&ldquo;Game Is Game.&rdquo;</p>
      </footer>
    </div>
  );
}
