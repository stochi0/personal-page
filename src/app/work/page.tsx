import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Work',
  description: 'Professional work experience and research positions',
  openGraph: {
    title: 'Work - Ayush',
    description: 'Professional work experience and research positions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Work - Ayush',
    description: 'Professional work experience and research positions',
  },
};

export default function Work() {
  return (
    <div className="main-container">
      {/* Header */}
      <header className="section" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <h1>Ayush</h1>
        </Link>
      </header>

      <div className="star">✦</div>

      {/* Work Experience */}
      <section className="section">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="work-item">
          <div className="work-header">
            <span className="work-title">Founding AI Engineer</span>
            <span className="work-date">05/2025–10/2025</span>
          </div>
          <div className="work-company">QX Labs, London, UK</div>
          <ul className="work-description">
            <li>Architected and launched a production agentic knowledge-graph platform for private-equity workflows supporting multi-hop natural-language queries, streaming responses and multi-database storage (graph, vector, NoSQL).</li>
            <li>Designed a modular agent orchestration layer for automatic query routing, parallel execution and optimized database query generation enabling multi-stage reasoning.</li>
            <li>Built scalable ETL and ingestion pipelines to normalize and import ~3 million company records from NoSQL into Neo4j, improving data coverage and freshness.</li>
            <li>Developed graph-based recommendation (attribute bucketing + weighted seed expansion); reduced recommendation & company-search latency from 42s to 10–12s.</li>
            <li>Owned full-stack production systems: streaming APIs, observability, and on-call reliability.</li>
          </ul>
        </div>

        <div className="work-item">
          <div className="work-header">
            <span className="work-title">Founding AI Engineer</span>
            <span className="work-date">01/2025–07/2025</span>
          </div>
          <div className="work-company">Unsiloed AI (YC F25), San Francisco, CA</div>
          <ul className="work-description">
            <li>Led engineering for document-AI and RAG pipelines for financial customers; productionized chunking, extraction and streaming inference APIs.</li>
            <li>Fine-tuned vision models (YOLOv11) for document-layout segmentation (10 classes) and optimized inference across OpenVINO / TensorRT / ONNX runtimes for CPU/GPU deployment.</li>
            <li>Trained and benchmarked field-extraction models on 10k+ financial reports and SEC filings; developed an evaluation suite and achieved top performance vs competitors.</li>
            <li>Implemented spreadsheet-encoding techniques for robust LLM-ready extraction (merged cells, cap tables) and a human-in-the-loop pipeline to continuously improve labels and model quality.</li>
          </ul>
        </div>

        <div className="work-item">
          <div className="work-header">
            <span className="work-title">Research (selected collaborations & independent work)</span>
            <span className="work-date">09/2024–01/2025</span>
          </div>
          <div className="work-company">Massachusetts Institute of Technology (MIT) · Tsinghua University · University of Amsterdam</div>
          <ul className="work-description">
            <li>MIT: Replicated and extended parts of the Canonical Representation Hypothesis (CRH) work (delayed generalization + representation dynamics); informal mentorship from an MIT postdoctoral researcher.</li>
            <li>Tsinghua: Literature reviews in 3D reconstruction and generation; proposed architectural optimizations to improve spatial reasoning in multimodal LLMs.</li>
            <li>UvA: Collaborated with the Parallel Computing Systems Lab, focusing on multi-modal model research.</li>
          </ul>
        </div>

        <div className="work-item">
          <div className="work-header">
            <span className="work-title">Tech Lead</span>
            <span className="work-date">10/2024–07/2025</span>
          </div>
          <div className="work-company">Covenants PharmaChem</div>
          <ul className="work-description">
            <li>Building an AI platform for end-to-end procurement automation.</li>
          </ul>
        </div>

        <div className="work-item">
          <div className="work-header">
            <span className="work-title">Teaching Assistant, Advanced Algorithms and Complexity</span>
            <span className="work-date">09/2024–12/2024</span>
          </div>
          <div className="work-company">Bachelor&apos;s — Computer Engineering</div>
          <ul className="work-description">
            <li>Led problem-solving sessions and mentored 16 master&apos;s students, enhancing their grasp of advanced algorithms.</li>
            <li>Designed problem sets based on research papers and lectures to promote critical thinking beyond the curriculum.</li>
          </ul>
        </div>

        <div className="work-item">
          <div className="work-header">
            <span className="work-title">Research Intern (2 projects)</span>
            <span className="work-date">08/2024–01/2025</span>
          </div>
          <div className="work-company">IIT Bombay</div>
          <ul className="work-description">
            <li>Spin-Neuro-Quantum-AI Group: Developed and implemented spiking neural networks for German Speech classification. Tech stack: Python, snnTorch, PyTorch, NumPy, Pandas.</li>
            <li>Real-Time Early Fault Detection: Built a real-time fault detection system predicting faults in electromagnetic machines via digital signal and magnetic flux analysis. Tech stack: Python, PyTorch, Librosa, SciPy, Pandas, DSP.</li>
          </ul>
        </div>

        <div className="work-item">
          <div className="work-header">
            <span className="work-title">Developer Analyst Intern</span>
            <span className="work-date">06/2023–08/2023</span>
          </div>
          <div className="work-company">Predoole Analytics</div>
          <ul className="work-description">
            <li>Built an email-generation API for personalized outreach; integrated Apollo.io data-fetch APIs.</li>
            <li>Tech stack: Flask, LangChain, OpenAI API, Python.</li>
          </ul>
        </div>

        <div className="work-item">
          <div className="work-header">
            <span className="work-title">Coordinator</span>
            <span className="work-date">11/2022–12/2023</span>
          </div>
          <div className="work-company">IEEE CS Student Chapter, S.P.I.T.</div>
          <ul className="work-description">
            <li>Coordinated events, meetings, conferences, hackathons, and competitions to ensure smooth operations.</li>
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
