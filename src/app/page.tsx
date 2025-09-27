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
            AI, Agents, RL, Vision. Hands play piano.
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
            Founding AI Engineer at a stealth startup in London, building agentic knowledge graph systems for private equity firms.
          </p>
          <p className="leading-relaxed">
            Previously at Y Combinator W25, MIT, Tsinghua University, and IIT Bombay.
          </p>
            </div>
          </div>

      {/* Selected Work */}
      <div className="space-y-6">
        <h2 className="text-sm uppercase tracking-wide text-neutral-500 dark:text-neutral-400 font-medium">
          Selected Work
        </h2>
        <div className="space-y-6">
              <div>
            <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
              Agentic Knowledge Graphs
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Production-ready multi-agent system with specialized AI agents for natural language query processing across Graph, Vector, and NoSQL databases.
            </p>
          </div>

              <div>
            <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
              Representation Learning Research
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Investigated delayed generalization phenomena at MIT, exploring implications for representation learning in neural networks.
            </p>
          </div>

              <div>
            <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
              Spiking Neural Networks
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Developed neuromorphic computing solutions at IIT Bombay, mimicking brain learning across multiple modalities.
            </p>
          </div>
            </div>
          </div>

      {/* Music */}
      <div className="space-y-6">
        <h2 className="text-sm uppercase tracking-wide text-neutral-500 dark:text-neutral-400 font-medium">
          Music
        </h2>
        <div className="text-neutral-700 dark:text-neutral-300">
          <p className="leading-relaxed text-sm">
            Piano and keyboard since childhood. Led school choir, won district competitions, and performed at various ceremonies. Music remains a core part of my creative process.
          </p>
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
