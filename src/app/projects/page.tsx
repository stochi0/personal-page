import { Metadata } from "next";
import Link from "next/link";

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
      {/* Header */}
      <header className="section" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <h1>Ayush</h1>
        </Link>
      </header>

      <div className="star">✦</div>

      {/* Projects */}
      <section className="section">
        <h2 className="section-title">Projects</h2>
        
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
            <span className="work-title">Discrete Walk-Jump Sampling for Protein Discovery</span>
          </div>
          <div className="work-company" style={{ fontStyle: 'italic' }}>PyTorch, Energy-Based Models, Langevin MCMC, Contrastive Divergence, Denoising Networks</div>
          <ul className="work-description">
            <li>Implemented Discrete Walk-Jump Sampling for antibody sequence generation using EBMs trained via contrastive divergence.</li>
            <li>Employed Langevin MCMC for exploration and one-step denoising for refinement, optimizing sampling efficiency and sequence quality.</li>
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

        <div className="work-item">
          <div className="work-header">
            <span className="work-title">Concrete Score Matching: Generalized Score Matching for Discrete Data</span>
          </div>
          <div className="work-company" style={{ fontStyle: 'italic' }}>PyTorch, NumPy, Concrete Score Matching, Metropolis–Hastings</div>
          <ul className="work-description">
            <li>Implemented the CSM algorithm to learn score functions in discrete spaces.</li>
            <li>Used Metropolis–Hastings sampling for data generation and visualized true vs. generated distributions.</li>
          </ul>
        </div>
      </section>

      <div className="star">✦</div>

      {/* Footer */}
      <footer className="footer">
        <Link href="/" className="connect-link" style={{ fontSize: '0.85rem' }}>
          ← Back to home
        </Link>
        <p style={{ marginTop: '1.5rem' }}>Game Is Game.</p>
      </footer>
    </div>
  );
}
