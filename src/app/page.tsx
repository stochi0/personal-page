import { Metadata } from "next";
import AnalyticsWrapper from "@/components/AnalyticsWrapper";

export const metadata: Metadata = {
  title: 'stochi',
  description: 'AI, Agents, RL, Vision. Hands play piano.',
  openGraph: {
    title: 'stochi',
    description: 'AI, Agents, RL, Vision. Hands play piano.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'stochi',
    description: 'AI, Agents, RL, Vision. Hands play piano.',
  },
};

export default function Home() {
  return (
    <AnalyticsWrapper>
      <div className="max-w-2xl mx-auto px-6 py-16 space-y-16">
      {/* Hero */}
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-light tracking-tight text-neutral-900 dark:text-neutral-100">
            stochi
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 font-light">
            Research & Engineering: AI, Agents, RL, Vision and Piano.
          </p>
          </div>

        <div className="flex justify-center gap-6 text-sm">
          <a 
            href="mailto:heystochi@gmail.com" 
            className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            email
          </a>
          <a 
            href="https://x.com/stochi0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            twitter
          </a>
          <a 
            href="https://github.com/stochi0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            github
          </a>
            </div>
          </div>

      {/* Current */}
      <div className="space-y-6">
        <h2 className="text-sm uppercase tracking-wide text-neutral-500 dark:text-neutral-400 font-medium">
          Currently
        </h2>
        <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
          <p className="leading-relaxed">
            Founding AI Engineer at London based startup, building agentic knowledge graph and recommendation systems for private equity firms.
          </p>
          <p className="leading-relaxed">
          Formerly, Founding AI Engineer at Y Combinator F25, built AI platform from ground up, now serving Fortune 500 enterprises.
          </p>
          <p className="leading-relaxed">
          Also, research at MIT, Tsinghua University, and IIT Bombay.
          </p>
            </div>
          </div>

      {/* Selected Work */}
      <div className="space-y-6">
        <h2 className="text-sm uppercase tracking-wide text-neutral-500 dark:text-neutral-400 font-medium">
          Selected Work
        </h2>
        <div className="space-y-8">
          
          <div>
            <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
              Agentic Knowledge Graph System for Private Equity
            </h3>
            <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
              <li>• Architected a production-ready system with intelligent agent-based query processing, multi-database integration (Graph, Vector, NoSQL), and streaming responses.</li>
              <li>• Developed modular AI agents (delegator, Cypher, semantic search) enabling automatic routing, parallel query execution, and optimized database interactions.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
              Optimized YOLOv11 for Document Layout Recognition
            </h3>
            <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
              <li>• Fine-tuned YOLOv11 on DocLayNet for multi-class document layout detection (captions, footnotes, formulas).</li>
              <li>• Accelerated inference using TensorRT, ONNXRUNTIME, and OpenVINO for scalable batch processing.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
              Discrete Walk-Jump Sampling for Antibody Discovery
            </h3>
            <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
              <li>• Implemented energy-based models with Langevin MCMC and contrastive divergence to generate high-quality antibody sequences.</li>
              <li>• Optimized sampling efficiency and sequence diversity for protein discovery tasks.</li>
            </ul>
          </div>
        </div>
      </div>

     {/* Honors & Achievements */}
     <div className="space-y-6">
        <h2 className="text-sm uppercase tracking-wide text-neutral-500 dark:text-neutral-400 font-medium">
          Honors & Achievements
        </h2>
        <div className="space-y-4 text-sm text-neutral-600 dark:text-neutral-400">
          <div className="space-y-3">
            <p className="leading-relaxed">
              <span className="font-medium text-neutral-700 dark:text-neutral-300">CSC Scholarship:</span> Awarded a CSC Scholarship to attend the HTGR Summer School 2025.
            </p>
            <p className="leading-relaxed">
              <span className="font-medium text-neutral-700 dark:text-neutral-300">Meta Hacker Cup 2024 (Round 2):</span> Advanced to Round 2 in Meta's global ACM-ICPC-style algorithmic competition.
            </p>
            <p className="leading-relaxed">
              <span className="font-medium text-neutral-700 dark:text-neutral-300">CodeUncode 2024:</span> Secured 49th position out of 2000 participants in an ACM-ICPC-style algorithmic contest.
            </p>
          </div>

          <div className="pt-2">
            <p className="font-medium text-neutral-700 dark:text-neutral-300 mb-3">Selected for Tsinghua University Programs:</p>
            <ul className="space-y-2 pl-4">
              <li className="leading-relaxed">• HTGR Summer School</li>
              <li className="leading-relaxed">• 2025 Tsinghua Summer School for International Construction</li>
              <li className="leading-relaxed">• "Design Futures·Shared Vision" 2025 International Summer Program, Academy of Arts & Design</li>
              <li className="leading-relaxed">• 2025 IEDA Summer School - Industrial Engineering and Data Analytics</li>
              <li className="leading-relaxed">• 2025 Tsinghua-Princeton-CI Summer School on Combustion</li>
              <li className="leading-relaxed">• Brain and Intelligence Laboratory "Music Brain Science Summer Training Camp"</li>
            </ul>
          </div>

          <p className="leading-relaxed pt-2">
            <span className="font-medium text-neutral-700 dark:text-neutral-300">2025 RUC International Summer School:</span> Selected for Renmin University of China, Beijing.
          </p>
        </div>
      </div>
      
      {/* Music */}
      <div className="space-y-6">
        <h2 className="text-sm uppercase tracking-wide text-neutral-500 dark:text-neutral-400 font-medium">
          Music
        </h2>
        <div className="space-y-4">
          <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
            Piano & Keyboard
          </h3>
          <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
            <p className="leading-relaxed">
              <span className="font-medium text-neutral-700 dark:text-neutral-300">1st Place, District Classical Music Concert:</span> Led as the pianist in a winning group performance, showcasing technical skill and expressive interpretation.
            </p>
            <p className="leading-relaxed">
              <span className="font-medium text-neutral-700 dark:text-neutral-300">Lead Pianist, School Choir (Grades 5–12):</span> Directed and performed all musical arrangements, demonstrating leadership and collaboration.
            </p>
            <p className="leading-relaxed">
              <span className="font-medium text-neutral-700 dark:text-neutral-300">Farewell Ceremony Pianist:</span> Selected to perform for the senior students' farewell, creating a memorable musical experience.
            </p>
            <p className="leading-relaxed">
              <span className="font-medium text-neutral-700 dark:text-neutral-300">1st Runner-up, Greek Play Competition:</span> Awarded for live background music, enriching the theatrical atmosphere with dynamic soundscapes.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800">
        <p className="text-xs text-neutral-400 dark:text-neutral-500 text-center">
          My heart&apos;s beating for now.
        </p>
          </div>
      </div>
    </AnalyticsWrapper>
  );
}
