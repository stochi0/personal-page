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
                <li>• Agentic KG QA: delegator router → vector retrieval → Cypher generation; Neo4j + vector store; async streaming.</li>
                <li>• Graph recommender + perf: attribute bucketing + weighted seed expansion; MongoDB→Neo4j ETL (3M companies); latency 42s→10–12s.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                  Founding AI Engineer
                </h3>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">01/2025–07/2025</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">Unsiloed AI, San Francisco, CA, USA</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Doc AI CV: YOLOv11 fine-tuning (10 classes); inference optimization via OpenVINO/TensorRT/ONNX.</li>
                <li>• Financial IE platform: extraction fine-tuning (10k reports/SEC), spreadsheet encoding, streaming APIs + HITL; backend ownership + intern mentorship (2).</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                  Independent Research Project
                </h3>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">11/2024–12/2025</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">Massachusetts Institute of Technology (MIT), Cambridge, MA, USA</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Replicated and extended parts of the Canonical Representation Hypothesis (CRH) work (delayed generalization + representation dynamics).</li>
                <li>• Received informal mentorship from an MIT postdoctoral researcher.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                  Research Collaborator
                </h3>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">11/2024–01/2025</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">Tsinghua University, Beijing, China</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Conducted literature reviews in 3D reconstruction and generation; proposed architectural optimizations to improve spatial reasoning in multimodal LLMs.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                  Guest Researcher
                </h3>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">09/2024–01/2025</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">University of Amsterdam, Amsterdam, Netherlands</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Collaborated with the Parallel Computing Systems Lab, focusing on multi-modal model research.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                  Tech Lead
                </h3>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">10/2024–07/2025</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">Covenants PharmaChem, Mumbai, India</p>
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
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">Sardar Patel Institute of Technology, Mumbai, India</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Led problem-solving sessions and mentored 16 master&apos;s students, enhancing their grasp of advanced algorithms.</li>
                <li>• Designed problem sets based on research papers and lectures to promote critical thinking beyond the curriculum.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                  Research Intern, Spin-Neuro-Quantum-AI Group
                </h3>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">08/2024–02/2025</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">IIT Bombay, Mumbai, India</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Developed and implemented spiking neural networks for neuromorphic hardware, mimicking brain learning across modalities.</li>
                <li>• Tech stack: Python, snnTorch, PyTorch, NumPy, Pandas.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                  Research Intern, Real-Time Early Fault Detection
                </h3>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">08/2024–11/2024</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">IIT Bombay, Mumbai, India</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Built a real-time fault detection system predicting faults in electromagnetic machines via digital signal and magnetic flux analysis.</li>
                <li>• Tech stack: Python, PyTorch, Librosa, SciPy, Pandas, DSP.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                  Research Intern, Multi-Modal Sentiment Analysis
                </h3>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">02/2024–11/2024</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">Sardar Patel Institute of Technology, Mumbai, India</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Built a multi-modal sentiment model for robustness across missing/noisy modalities.</li>
                <li>• Tech stack: PyTorch, OpenCV, Librosa, NLTK, Bash.</li>
              </ul>
            </div>
            
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                  Developer Analyst Intern
                </h3>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">06/2023–08/2023</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">Predoole Analytics, Mumbai, India</p>
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
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">IEEE CS Student Chapter, S.P.I.T., Mumbai, India</p>
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
