import { Metadata } from "next";
import AnalyticsWrapper from "@/components/AnalyticsWrapper";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Ayush (aka stochi0)',
  description: 'AI, Agents, RL, Vision. Open to AI research & applied roles. Hands play piano.',
  openGraph: {
    title: 'Ayush (aka stochi0)',
    description: 'AI, Agents, RL, Vision. Open to AI research & applied roles. Hands play piano.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayush (aka stochi0)',
    description: 'AI, Agents, RL, Vision. Open to AI research & applied roles. Hands play piano.',
  },
};

export default function Home() {
  return (
    <AnalyticsWrapper>
      <div className="max-w-2xl mx-auto px-6 py-16 space-y-16">
      {/* Hero */}
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-light tracking-tight text-neutral-900 dark:text-neutral-100">
            Ayush
          </h1>
          <p className="text-sm text-neutral-500 dark:text-neutral-500 font-light">
            aka stochi0
          </p>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 font-light">
            Research & Engineering: AI, Agents, RL, Vision and Piano.
          </p>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 font-light">
            Open to research / applied AI roles.
          </p>
          </div>

        <div className="flex justify-start gap-6 text-sm">
          <a 
            href="mailto:ayushbodade1@gmail.com" 
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
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Recently returned from a solo adventure through China (11 cities), Macau, and Hong Kong, still unpacking stories!
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Previously: QX Labs, Unsiloed AI (YC F25) Check out my <Link href="/work" className="font-medium text-neutral-900 dark:text-neutral-100 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">work</Link> page.
        </p>
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
              <span className="font-medium text-neutral-700 dark:text-neutral-300">Meta Hacker Cup 2024 (Round 2):</span> Advanced to Round 2 in Meta&apos;s global ACM-ICPC-style algorithmic competition.
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
              <li className="leading-relaxed">• &ldquo;Design Futures·Shared Vision&rdquo; 2025 International Summer Program, Academy of Arts & Design</li>
              <li className="leading-relaxed">• 2025 IEDA Summer School - Industrial Engineering and Data Analytics</li>
              <li className="leading-relaxed">• 2025 Tsinghua-Princeton-CI Summer School on Combustion</li>
              <li className="leading-relaxed">• Brain and Intelligence Laboratory &ldquo;Music Brain Science Summer Training Camp&rdquo;</li>
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
              <span className="font-medium text-neutral-700 dark:text-neutral-300">1st Place, District Classical Music Concert:</span> Led as the pianist in a winning group performance.
            </p>
            <p className="leading-relaxed">
              <span className="font-medium text-neutral-700 dark:text-neutral-300">Lead Pianist, School Choir (Grades 5–12):</span> Directed and performed all musical arrangements.
            </p>
            <p className="leading-relaxed">
              <span className="font-medium text-neutral-700 dark:text-neutral-300">Farewell Ceremony Pianist:</span> Selected to perform for the senior students&apos; ceremony.
            </p>
            <p className="leading-relaxed">
              <span className="font-medium text-neutral-700 dark:text-neutral-300">1st Runner-up, Greek Play Competition:</span> Awarded for live background music.
            </p>
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
