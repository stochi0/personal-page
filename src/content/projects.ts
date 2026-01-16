// ============================================
// PROJECTS
// Edit this file to update your projects
// ============================================

export type Project = {
  title: string;
  tech: string;
  description: string[];
  link?: string;
  linkText?: string;
};

export type ProjectCategory = {
  name: string;
  projects: Project[];
};

// ============================================
// PROJECT CATEGORIES
// Add/remove categories as needed
// ============================================

export const projectCategories: ProjectCategory[] = [
  {
    name: "ML & Deep Learning",
    projects: [
      {
        title: "BeaconGrad",
        tech: "Python, NumPy",
        description: [
          "A NumPy-based tensor automatic-differentiation (autograd) engine with broadcasting-aware backprop, neural modules, and optimizers; validated gradients via finite-difference gradchecks and float64 PyTorch parity tests.",
        ],
        link: "https://github.com/stochi0/beacongrad",
        linkText: "GitHub →",
      },
      {
        title: "Optimized YOLOv11 for Document Layout Recognition",
        tech: "PyTorch, YOLO, TensorRT, onnxruntime, OpenVINO",
        description: [
          "Fine-tuned YOLOv11 on DocLayNet for document layout analysis (captions, footnotes, formulas, etc.).",
          "Accelerated inference via TensorRT, ONNXRUNTIME, and OpenVINO, achieving scalable batch processing with threaded execution.",
        ],
      },
      {
        title: "Expandable Subspace Ensemble for Class-Incremental Learning",
        tech: "PyTorch, NumPy",
        description: [
          "Implemented a subspace expansion technique to retain previous classes without forgetting, benchmarked on CIFAR-10 from scratch.",
        ],
      },
    ],
  },
  {
    name: "Generative & Probabilistic",
    projects: [
      {
        title: "Discrete Walk-Jump Sampling for Protein Discovery",
        tech: "PyTorch, Energy-Based Models, Langevin MCMC, Contrastive Divergence",
        description: [
          "Implemented Discrete Walk-Jump Sampling for antibody sequence generation using EBMs trained via contrastive divergence.",
          "Employed Langevin MCMC for exploration and one-step denoising for refinement, optimizing sampling efficiency and sequence quality.",
        ],
      },
      {
        title: "Concrete Score Matching",
        tech: "PyTorch, NumPy, Metropolis–Hastings",
        description: [
          "Implemented the CSM algorithm to learn score functions in discrete spaces.",
          "Used Metropolis–Hastings sampling for data generation and visualized true vs. generated distributions.",
        ],
      },
    ],
  },
  // Add more categories here as needed:
  // {
  //   name: "Web & Apps",
  //   projects: [...]
  // },
];

// Page metadata
export const projectsPageMeta = {
  title: "Projects",
  description: "Technical projects and implementations",
  tagline: "Implementations, experiments, and explorations.",
  footer: "More projects coming soon...",
};

