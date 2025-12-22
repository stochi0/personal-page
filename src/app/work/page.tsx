import { Metadata } from "next";
import AnalyticsWrapper from "@/components/AnalyticsWrapper";

export const metadata: Metadata = {
  title: 'Work - Ayush',
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
    <AnalyticsWrapper>
      <div className="max-w-2xl mx-auto px-6 py-16 space-y-16">
        
        {/* Work Experience */}
        <div className="space-y-6">
          <h2 className="text-sm uppercase tracking-wide text-neutral-500 dark:text-neutral-400 font-medium">
            Work
          </h2>
          <div className="space-y-8">
            
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                  Founding AI Engineer
                </h3>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">05/2025–10/2025</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">QX Labs, London, UK</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Architected and launched a production agentic knowledge-graph platform for private-equity workflows supporting multi-hop natural-language queries, streaming responses and multi-database storage (graph, vector, NoSQL).</li>
                <li>• Designed a modular agent orchestration layer for automatic query routing, parallel execution and optimized database query generation enabling multi-stage reasoning.</li>
                <li>• Built scalable ETL and ingestion pipelines to normalize and import ~3 million company records from NoSQL into Neo4j, improving data coverage and freshness.</li>
                <li>• Developed graph-based recommendation (attribute bucketing + weighted seed expansion); reduced recommendation &amp; company-search latency from 42s to 10–12s.</li>
                <li>• Owned full-stack production systems: streaming APIs, observability, and on-call reliability.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                  Founding AI Engineer
                </h3>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">01/2025–07/2025</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">Unsiloed AI (YC S25), San Francisco, CA</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Led engineering for document-AI and RAG pipelines for financial customers; productionized chunking, extraction and streaming inference APIs.</li>
                <li>• Fine-tuned vision models (YOLOv11) for document-layout segmentation (10 classes) and optimized inference across OpenVINO / TensorRT / ONNX runtimes for CPU/GPU deployment.</li>
                <li>• Trained and benchmarked field-extraction models on 10k+ financial reports and SEC filings; developed an evaluation suite and achieved top performance vs competitors.</li>
                <li>• Implemented spreadsheet-encoding techniques for robust LLM-ready extraction (merged cells, cap tables) and a human-in-the-loop pipeline to continuously improve labels and model quality.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                  Research (selected collaborations & independent work)
                </h3>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">09/2024–01/2025</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                Massachusetts Institute of Technology (MIT) · Tsinghua University · University of Amsterdam
              </p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• MIT: Replicated and extended parts of the Canonical Representation Hypothesis (CRH) work (delayed generalization + representation dynamics); informal mentorship from an MIT postdoctoral researcher.</li>
                <li>• Tsinghua: Literature reviews in 3D reconstruction and generation; proposed architectural optimizations to improve spatial reasoning in multimodal LLMs.</li>
                <li>• UvA: Collaborated with the Parallel Computing Systems Lab, focusing on multi-modal model research.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                  Tech Lead
                </h3>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">10/2024–07/2025</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">Covenants PharmaChem</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Building an AI platform for end-to-end procurement automation.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                  Teaching Assistant, Advanced Algorithms and Complexity
                </h3>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">09/2024–12/2024</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">Bachelor&apos;s — Computer Engineering</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Led problem-solving sessions and mentored 16 master&apos;s students, enhancing their grasp of advanced algorithms.</li>
                <li>• Designed problem sets based on research papers and lectures to promote critical thinking beyond the curriculum.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                  Research Intern (2 projects)
                </h3>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">08/2024–01/2025</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">IIT Bombay</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Spin-Neuro-Quantum-AI Group: Developed and implemented spiking neural networks for German Speech classification. Tech stack: Python, snnTorch, PyTorch, NumPy, Pandas.</li>
                <li>• Real-Time Early Fault Detection: Built a real-time fault detection system predicting faults in electromagnetic machines via digital signal and magnetic flux analysis. Tech stack: Python, PyTorch, Librosa, SciPy, Pandas, DSP.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                  Developer Analyst Intern
                </h3>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">06/2023–08/2023</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">Predoole Analytics</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Built an email-generation API for personalized outreach; integrated Apollo.io data-fetch APIs.</li>
                <li>• Tech stack: Flask, LangChain, OpenAI API, Python.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                  Coordinator
                </h3>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">11/2022–12/2023</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">IEEE CS Student Chapter, S.P.I.T.</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Coordinated events, meetings, conferences, hackathons, and competitions to ensure smooth operations.</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <p className="text-xs text-neutral-400 dark:text-neutral-500">
            Game Is Game.
          </p>
        </div>
      </div>
    </AnalyticsWrapper>
  );
}
