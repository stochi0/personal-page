export type WorkItem = {
  title: string;
  company: string;
  location?: string;
  date: string;
  description: string[];
  link?: string;
};

export const industry: WorkItem[] = [
  {
    title: "Founding AI Engineer",
    company: "QX Labs",
    location: "London, UK",
    date: "05/2025–10/2025",
    description: [
      "Architected and built a production agentic knowledge-graph for private-equity workflows supporting multi-hop natural-language queries, streaming responses and multi-database storage (graph, vector, NoSQL).",
      "Designed an agent orchestration layer for query routing, async execution and optimized database query generation for multi-hop queries.",
      "Built scalable ETL and ingestion pipelines with ~3 million company records from NoSQL into Neo4j, for periodic updates to the knowledge graph.",
      "Developed graph-based recommendation algorithm (attribute bucketing + weighted seed expansion); reduced recommendation & query latency from 42s to 10–12s.",
    ],
  },
  {
    title: "Founding AI Engineer",
    company: "Unsiloed AI (YC F25)",
    location: "San Francisco, CA",
    date: "01/2025–07/2025",
    description: [
      "Built extraction, classifier, splitter APIs, document chunking strategies, all with streaming support for Fortune 500 firms.",
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

export const research: WorkItem[] = [
  {
    title: "Research Mentee (independent work)",
    company: "Massachusetts Institute of Technology · Tsinghua University",
    date: "09/2024–01/2025",
    description: [
      "MIT: Replicated and extended parts of the Canonical Representation Hypothesis (CRH) work (delayed generalization + representation dynamics); informal mentorship from a postdoctoral researcher.",
      "Tsinghua: Informal collaboration on literature reviews in 3D reconstruction and generation.",
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

export const workPageMeta = {
  title: "Work",
  description: "Professional work experience and research positions",
  tagline: "Experience across startups, research labs, and academia.",
};

