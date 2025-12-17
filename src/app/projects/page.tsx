import { Metadata } from "next";
import AnalyticsWrapper from "@/components/AnalyticsWrapper";

export const metadata: Metadata = {
  title: 'Projects - Ayush',
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
    <AnalyticsWrapper>
      <div className="max-w-2xl mx-auto px-6 py-16 space-y-16">
        
        {/* Projects */}
        <div className="space-y-6">
          <h2 className="text-sm uppercase tracking-wide text-neutral-500 dark:text-neutral-400 font-medium">
            Projects
          </h2>
          <div className="space-y-8">

            <div>
              <div className="flex items-baseline justify-between gap-3 mb-2">
                <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                  BeaconGrad
                </h3>
                <a
                  href="https://github.com/stochi0/beacongrad"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-xs text-neutral-600 dark:text-neutral-400 underline underline-offset-4 hover:text-neutral-900 dark:hover:text-neutral-100"
                >
                  GitHub
                </a>
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3 italic">Python, NumPy</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• A NumPy-based tensor automatic-differentiation (autograd) engine with broadcasting-aware backprop, neural modules, and optimizers; validated gradients via finite-difference gradchecks and float64 PyTorch parity tests.</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                Optimized YOLOv11 for Document Layout Recognition and Inference
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3 italic">PyTorch, YOLO, TensorRT, onnxruntime, OpenVINO</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Fine-tuned YOLOv11 on DocLayNet for document layout analysis (captions, footnotes, formulas, etc.).</li>
                <li>• Accelerated inference via TensorRT, ONNXRUNTIME, and OpenVINO, achieving scalable batch processing with threaded execution.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                Discrete Walk-Jump Sampling for Protein Discovery
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3 italic">PyTorch, Energy-Based Models, Langevin MCMC, Contrastive Divergence, Denoising Networks</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Implemented Discrete Walk-Jump Sampling for antibody sequence generation using EBMs trained via contrastive divergence.</li>
                <li>• Employed Langevin MCMC for exploration and one-step denoising for refinement, optimizing sampling efficiency and sequence quality.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                Expandable Subspace Ensemble for Class-Incremental Learning
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3 italic">PyTorch, NumPy</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Implemented a subspace expansion technique to retain previous classes without forgetting, benchmarked on CIFAR-10 from scratch.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                Concrete Score Matching: Generalized Score Matching for Discrete Data
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3 italic">PyTorch, NumPy, Concrete Score Matching, Metropolis–Hastings</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Implemented the CSM algorithm to learn score functions in discrete spaces.</li>
                <li>• Used Metropolis–Hastings sampling for data generation and visualized true vs. generated distributions.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                ColPali-Qwen2 Architecture: OCR & Document Search
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3 italic">PyTorch, colpali-engine, qwen-vl-utils</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Built an OCR and document retrieval system based on the &ldquo;ColPali&rdquo; vision-language model for multilingual text extraction.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                Character-Level Auto-Regressive Models
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3 italic">PyTorch, Pandas</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Implemented character-level LMs (bigrams, MLP, CNN, RNN, LSTM, GRU, Transformer) architectures from-scratch to generate text tokens.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                Houdini Multi-Search RAG Agent
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3 italic">LangChain, FAISS, Streamlit</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Built a RAG system enabling PDF uploads and retrieval of relevant arXiv, Wikipedia, and web sources for factual LLM responses.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                Lung CT Scan Classifier
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3 italic">PyTorch, CNN, scikit-learn, Matplotlib</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Created a custom ConvNet achieving 88% accuracy; applied data augmentation and transfer learning (VGGNet, EfficientNet, RegNet, ViT).</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                AutoXCell
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3 italic">Python, Flask, Plotly, Docker</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Developed an exam cell automation system to streamline application and grade-card downloads, plus academic performance analysis using statistical techniques.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                Credit Risk Analysis
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3 italic">Boosting Algorithms, Plotly, scikit-learn, Pandas</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Conducted detailed EDA to uncover feature importance and correlations; built and evaluated ML models for accurate credit risk prediction.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                Mall Customer Analysis & Segmentation
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3 italic">Pandas, Plotly, scikit-learn, NumPy</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Performed customer segmentation using clustering on age, income, and spending score; derived insights to inform tailored marketing strategies.</li>
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
