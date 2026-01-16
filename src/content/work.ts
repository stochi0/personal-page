// ============================================
// WORK EXPERIENCE
// Edit this file to update your work history
// ============================================

export type WorkItem = {
  title: string;
  company: string;
  location?: string;
  date: string;
  description: string[];
  link?: string;
};

// ============================================
// INDUSTRY EXPERIENCE
// ============================================

export const industry: WorkItem[] = [
  {
    title: "Founding AI Engineer",
    company: "QX Labs",
    location: "London, UK",
    date: "05/2025–10/2025",
    description: [
      "Architected and launched a production agentic knowledge-graph platform for private-equity workflows supporting multi-hop natural-language queries, streaming responses and multi-database storage (graph, vector, NoSQL).",
      "Designed a modular agent orchestration layer for automatic query routing, parallel execution and optimized database query generation enabling multi-stage reasoning.",
      "Built scalable ETL and ingestion pipelines to normalize and import ~3 million company records from NoSQL into Neo4j, improving data coverage and freshness.",
      "Developed graph-based recommendation (attribute bucketing + weighted seed expansion); reduced recommendation & company-search latency from 42s to 10–12s.",
      "Owned full-stack production systems: streaming APIs, observability, and on-call reliability.",
    ],
  },
  {
    title: "Founding AI Engineer",
    company: "Unsiloed AI (YC F25)",
    location: "San Francisco, CA",
    date: "01/2025–07/2025",
    description: [
      "Led engineering for document-AI and RAG pipelines for financial customers; productionized chunking, extraction and streaming inference APIs.",
      "Fine-tuned vision models (YOLOv11) for document-layout segmentation (10 classes) and optimized inference across OpenVINO / TensorRT / ONNX runtimes for CPU/GPU deployment.",
      "Trained and benchmarked field-extraction models on 10k+ financial reports and SEC filings; developed an evaluation suite and achieved top performance vs competitors.",
      "Implemented spreadsheet-encoding techniques for robust LLM-ready extraction (merged cells, cap tables) and a human-in-the-loop pipeline to continuously improve labels and model quality.",
    ],
  },
  {
    title: "Tech Lead",
    company: "Covenants PharmaChem",
    date: "10/2024–07/2025",
    description: [
      "Building an AI platform for end-to-end procurement automation.",
    ],
  },
  {
    title: "Developer Analyst Intern",
    company: "Predoole Analytics",
    date: "06/2023–08/2023",
    description: [
      "Built an email-generation API for personalized outreach; integrated Apollo.io data-fetch APIs.",
      "Tech stack: Flask, LangChain, OpenAI API, Python.",
    ],
  },
];

// ============================================
// RESEARCH EXPERIENCE
// ============================================

export const research: WorkItem[] = [
  {
    title: "Research Collaborations",
    company: "MIT · Tsinghua University · University of Amsterdam",
    date: "09/2024–01/2025",
    description: [
      "MIT: Replicated and extended parts of the Canonical Representation Hypothesis (CRH) work (delayed generalization + representation dynamics); informal mentorship from an MIT postdoctoral researcher.",
      "Tsinghua: Literature reviews in 3D reconstruction and generation; proposed architectural optimizations to improve spatial reasoning in multimodal LLMs.",
      "UvA: Collaborated with the Parallel Computing Systems Lab, focusing on multi-modal model research.",
    ],
  },
  {
    title: "Research Intern",
    company: "IIT Bombay",
    date: "08/2024–01/2025",
    description: [
      "Spin-Neuro-Quantum-AI Group: Developed and implemented spiking neural networks for German Speech classification. Tech stack: Python, snnTorch, PyTorch, NumPy, Pandas.",
      "Real-Time Early Fault Detection: Built a real-time fault detection system predicting faults in electromagnetic machines via digital signal and magnetic flux analysis. Tech stack: Python, PyTorch, Librosa, SciPy, Pandas, DSP.",
    ],
  },
];

// ============================================
// ACADEMIA & COMMUNITY
// ============================================

export const academia: WorkItem[] = [
  {
    title: "Teaching Assistant, Advanced Algorithms and Complexity",
    company: "Bachelor's — Computer Engineering",
    date: "09/2024–12/2024",
    description: [
      "Led problem-solving sessions and mentored 16 master's students, enhancing their grasp of advanced algorithms.",
      "Designed problem sets based on research papers and lectures to promote critical thinking beyond the curriculum.",
    ],
  },
  {
    title: "Coordinator",
    company: "IEEE CS Student Chapter, S.P.I.T.",
    date: "11/2022–12/2023",
    description: [
      "Coordinated events, meetings, conferences, hackathons, and competitions to ensure smooth operations.",
    ],
  },
];

// Page metadata
export const workPageMeta = {
  title: "Work",
  description: "Professional work experience and research positions",
  tagline: "Experience across startups, research labs, and academia.",
};

