import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Technical projects and implementations',
  openGraph: {
    title: 'Projects - Ayush',
    description: 'Technical projects and implementations',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects - Ayush',
    description: 'Technical projects and implementations',
  },
};

export default function Projects() {
  return (
    <div className="main-container">
      {/* Page Title */}
      <header className="section" style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <h1 style={{ fontSize: '2.5rem' }}>Projects</h1>
        <p className="tagline" style={{ marginTop: '1rem' }}>
          Implementations, experiments, and explorations.
        </p>
      </header>

      <div className="star">✦</div>

      {/* ML & Deep Learning */}
      <section className="section">
        <h2 className="section-title">ML & Deep Learning</h2>
        
        <div className="work-item">
          <div className="work-header">
            <span className="work-title">BeaconGrad</span>
            <a
              href="https://github.com/stochi0/beacongrad"
              target="_blank"
              rel="noreferrer noopener"
              className="content-link"
              style={{ fontSize: '0.85rem', textDecoration: 'underline', textUnderlineOffset: '4px' }}
            >
              GitHub →
            </a>
          </div>
          <div className="work-company" style={{ fontStyle: 'italic' }}>Python, NumPy</div>
          <ul className="work-description">
            <li>A NumPy-based tensor automatic-differentiation (autograd) engine with broadcasting-aware backprop, neural modules, and optimizers; validated gradients via finite-difference gradchecks and float64 PyTorch parity tests.</li>
          </ul>
        </div>
        
        <div className="work-item">
          <div className="work-header">
            <span className="work-title">Optimized YOLOv11 for Document Layout Recognition</span>
          </div>
          <div className="work-company" style={{ fontStyle: 'italic' }}>PyTorch, YOLO, TensorRT, onnxruntime, OpenVINO</div>
          <ul className="work-description">
            <li>Fine-tuned YOLOv11 on DocLayNet for document layout analysis (captions, footnotes, formulas, etc.).</li>
            <li>Accelerated inference via TensorRT, ONNXRUNTIME, and OpenVINO, achieving scalable batch processing with threaded execution.</li>
          </ul>
        </div>

        <div className="work-item">
          <div className="work-header">
            <span className="work-title">Expandable Subspace Ensemble for Class-Incremental Learning</span>
          </div>
          <div className="work-company" style={{ fontStyle: 'italic' }}>PyTorch, NumPy</div>
          <ul className="work-description">
            <li>Implemented a subspace expansion technique to retain previous classes without forgetting, benchmarked on CIFAR-10 from scratch.</li>
          </ul>
        </div>
      </section>

      {/* Generative & Probabilistic */}
      <section className="section">
        <h2 className="section-title">Generative & Probabilistic</h2>

        <div className="work-item">
          <div className="work-header">
            <span className="work-title">Discrete Walk-Jump Sampling for Protein Discovery</span>
          </div>
          <div className="work-company" style={{ fontStyle: 'italic' }}>PyTorch, Energy-Based Models, Langevin MCMC, Contrastive Divergence</div>
          <ul className="work-description">
            <li>Implemented Discrete Walk-Jump Sampling for antibody sequence generation using EBMs trained via contrastive divergence.</li>
            <li>Employed Langevin MCMC for exploration and one-step denoising for refinement, optimizing sampling efficiency and sequence quality.</li>
          </ul>
        </div>

        <div className="work-item">
          <div className="work-header">
            <span className="work-title">Concrete Score Matching</span>
          </div>
          <div className="work-company" style={{ fontStyle: 'italic' }}>PyTorch, NumPy, Metropolis–Hastings</div>
          <ul className="work-description">
            <li>Implemented the CSM algorithm to learn score functions in discrete spaces.</li>
            <li>Used Metropolis–Hastings sampling for data generation and visualized true vs. generated distributions.</li>
          </ul>
        </div>
      </section>

      <div className="star">✦</div>

      {/* Footer */}
      <footer className="footer">
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
          More projects coming soon...
        </p>
        <p>Game Is Game.</p>
      </footer>
    </div>
  );
}
