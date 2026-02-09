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

export const projectCategories: ProjectCategory[] = [
  {
    name: "ML & Deep Learning",
    projects: [
      {
        title: "YunTun: Distributed RL Post-Training for Tool Use (Qwen3-0.6B) (In Progress)",
        tech: "PyTorch, FSDP2, Tensor Parallelism, Pipeline Parallelism (1F1B), SGLang, GRPO, AMP (BF16/FP16)",
        description: [
          "Implemented a custom 3D-parallel training stack from scratch (FSDP2 + custom TP + PP) for RL fine-tuning Qwen3-0.6B for tool use, including column/row sharding, vocab-parallel embeddings, and explicit gradient synchronization.",
          "Integrated SGLang-based rollout server with native token logprobs for GRPO optimization.",
        ],
        link: "https://github.com/stochi0/yuntun",
        linkText: "GitHub →",
      },
      {
        title: "GPT-2 Speedrun: Single-Node Multi-GPU Pre-Training (DDP)",
        tech: "PyTorch, Distributed Data Parallel (DDP), torch.compile, AMP (BF16/FP16)",
        description: [
          "Implemented an end-to-end GPT-2 (124M) pre-training stack with DDP gradient accumulation, cosine LR + warmup scheduling, checkpoint/resume, and optional initialization from HuggingFace GPT-2 weights.",
          "Optimized throughput via torch.compile, fused AdamW (CUDA), TF32 matmul, Flash SDP attention when available, pinned-memory non-blocking transfers, and mixed precision (BF16/FP16 w/ GradScaler).",
        ],
        link: "https://github.com/stochi0/gpt2-speedrun",
        linkText: "GitHub →",
      },
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
        title: "Optimized YOLOv11 for Document Layout Recognition and Inference",
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
        link: "https://github.com/stochi0/expandable-subspace-ensemble-cil",
        linkText: "GitHub →",
      },
    ],
  },
  {
    name: "Generative & Probabilistic",
    projects: [
      {
        title: "Discrete Walk-Jump Sampling for Protein Discovery",
        tech: "PyTorch, Energy-Based Models, Langevin MCMC, Contrastive Divergence, Denoising Networks",
        description: [
          "Implemented Discrete Walk-Jump Sampling for antibody sequence generation using EBMs trained via contrastive divergence.",
          "Employed Langevin MCMC for exploration and one-step denoising for refinement, optimizing sampling efficiency and sequence quality.",
        ],
        link: "https://github.com/stochi0/discrete-walk-jump-sampling",
        linkText: "GitHub →",
      },
      {
        title: "Concrete Score Matching: Generalized Score Matching for Discrete Data",
        tech: "PyTorch, NumPy, Concrete Score Matching, Metropolis–Hastings",
        description: [
          "Implemented the CSM algorithm to learn score functions in discrete spaces.",
          "Used Metropolis–Hastings sampling for data generation and visualized true vs. generated distributions.",
        ],
        link: "https://github.com/stochi0/concrete-score-matching-discrete-data",
        linkText: "GitHub →",
      },
    ],
  },
];

export const projectsPageMeta = {
  title: "Projects",
  description: "Technical projects and implementations",
  tagline: "Implementations, experiments, and explorations.",
};

