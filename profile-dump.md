# stochi — Full Profile Dump

> Generated from personal-page content sources.

---

## Profile

- **Name:** stochi
- **Title:** Stochi
- **Bio:** Towards Autonomy. Self-Evolution. Open-Ended Discovery.
- **Footer quote:** Game Is Game.

### Hero Quotes

胜则生，败则死。
不战，何来胜利？
向前进。

~ 艾伦·耶格尔

---

勝てば生きる。負ければ死ぬ。
戦わなければ勝てない。
前へ進め。

~ エレン・イェーガー

---

If you win, you live. If you lose, you die.
If you don't fight, you can't win.
Keep moving forward.

~ Eren Yeager

---

## Now

I like **Post-Training**, **Agents**, **RL**, **Model Architectures** and **ML Systems**. In a different vein, I traveled solo through 11 cities in China, Macau, Hong Kong, and Vietnam. Oh, and I love hotpot.

## Connect

**Connect**

Always up for interesting conversations. You'll find me on Twitter, or by email.

## Social

- **Email:** [heystochi@gmail.com](mailto:heystochi@gmail.com)
- **Twitter:** https://x.com/stochi0
- **GitHub:** https://github.com/stochi0

## Site Description (metadata)

I like Post-Training, Agents, RL, Model Architectures and ML Systems. In a different vein, I traveled solo through 11 cities in China, Macau, Hong Kong, and Vietnam. Oh, and I love hotpot.

---

# Work

*Experience across startups, research labs, and academia.*

## Industry

### Founding AI Engineer

**QX Labs** · London, UK

*05/2025–10/2025*

- Architected and built a production agentic knowledge-graph for private-equity workflows supporting multi-hop natural-language queries, streaming responses and multi-database storage (graph, vector, NoSQL).
- Designed an agent orchestration layer for query routing, async execution and optimized database query generation for multi-hop queries.
- Built scalable ETL and ingestion pipelines with ~3 million company records from NoSQL into Neo4j, for periodic updates to the knowledge graph.
- Developed graph-based recommendation algorithm (attribute bucketing + weighted seed expansion); reduced recommendation & query latency from 42s to 10–12s.

### Founding AI Engineer

**Unsiloed AI (YC F25)** · San Francisco, CA

*01/2025–07/2025*

- Built extraction, classifier, splitter APIs, document chunking strategies, all with streaming support for Fortune 500 firms.
- Fine-tuned vision models (YOLOv11) for document-layout segmentation (10 classes) and optimized inference across OpenVINO / TensorRT / ONNX runtimes for CPU/GPU deployment.
- Trained and benchmarked field-extraction models on 10k+ financial reports and SEC filings; developed an evaluation suite and achieved top performance vs competitors.
- Implemented spreadsheet-encoding techniques for robust LLM-ready extraction (merged cells, cap tables) and a human-in-the-loop pipeline to continuously improve labels and model quality.

### Tech Lead

**Covenants PharmaChem**

*10/2024–07/2025*

- Building an AI platform for end-to-end procurement automation.

### Developer Analyst Intern

**Predoole Analytics**

*06/2023–08/2023*

- Built an email-generation API for personalized outreach; integrated Apollo.io data-fetch APIs.
- Tech stack: Flask, LangChain, OpenAI API, Python.

## Research

### Research Mentee (independent work)

**Independent research · Tsinghua University**

*09/2024–01/2025*

- Replicated and extended parts of the Canonical Representation Hypothesis (CRH) work (delayed generalization + representation dynamics).
- Tsinghua: Informal collaboration on literature reviews in 3D reconstruction and generation.

### Research Intern

**IIT Bombay**

*08/2024–01/2025*

- Spin-Neuro-Quantum-AI Group: Developed and implemented spiking neural networks for German Speech classification. Tech stack: Python, snnTorch, PyTorch, NumPy, Pandas.
- Real-Time Early Fault Detection: Built a real-time fault detection system predicting faults in electromagnetic machines via digital signal and magnetic flux analysis. Tech stack: Python, PyTorch, Librosa, SciPy, Pandas, DSP.

## Academia & Community

### Teaching Assistant, Advanced Algorithms and Complexity

**Bachelor's — Computer Engineering**

*09/2024–12/2024*

- Led problem-solving sessions and mentored 16 master's students, enhancing their grasp of advanced algorithms.
- Designed problem sets based on research papers and lectures to promote critical thinking beyond the curriculum.

### Coordinator

**IEEE CS Student Chapter**

*11/2022–12/2023*

- Coordinated events, meetings, conferences, hackathons, and competitions to ensure smooth operations.

---

# Projects

*Implementations, experiments, and explorations.*

## ML & Deep Learning

#### Yuntun: Qwen3-0.6B with Megatron-Style Tensor Parallelism

**Tech:** PyTorch, Megatron-Style TP (Column/Row/Vocab Sharding), FineWeb Streaming, HuggingFace Parity, RoPE/GQA/RMSNorm/QK-Norm

- Built a minimal Qwen3-style causal LM from scratch with pre-training on FineWeb (streaming, sample-10BT), with gradient accumulation, checkpointing.
- Implemented Megatron-style tensor-parallel layers (column/row linear, vocab-parallel embedding and LM head with custom autograd), RoPE and GQA in the decoder.

[GitHub →](https://github.com/stochi0/yuntun)

#### Weigou: Minimal 4D-Parallel LLaMA Training (SmolLM-360M)

**Tech:** PyTorch, 4D Parallelism (TP/CP/PP/DP), Custom Ring Attention, Pipeline Parallelism (1F1B/AFAB), Flash Attention, SLURM

- Built a lean 4D-parallel training stack from scratch, including tensor, context, pipeline, and data parallelism with a unified process group manager over a DP×PP×CP×TP grid, plus bucketed gradient synchronization across CP+DP ranks.
- Implemented Megatron/Pictron-style tensor parallel layers (column/row/vocab sharding), ring-attention based context parallelism with RoPE slicing, and a pipeline engine (1F1B/AFAB) for LLaMA-like models, wired into a config/CLI + SLURM workflow for multi-node experiments.

[GitHub →](https://github.com/stochi0/weigou)

#### GPT-2 Speedrun: Single-Node Multi-GPU Pre-Training (DDP)

**Tech:** PyTorch, Distributed Data Parallel (DDP), torch.compile, AMP (BF16/FP16)

- Implemented an end-to-end GPT-2 (124M) pre-training stack with DDP gradient accumulation, cosine LR + warmup scheduling, checkpoint/resume, and optional initialization from HuggingFace GPT-2 weights.
- Optimized throughput via torch.compile, fused AdamW (CUDA), TF32 matmul, Flash SDP attention when available, pinned-memory non-blocking transfers, and mixed precision (BF16/FP16 w/ GradScaler).

[GitHub →](https://github.com/stochi0/gpt2-speedrun)

#### BeaconGrad

**Tech:** Python, NumPy

- A NumPy-based tensor automatic-differentiation (autograd) engine with broadcasting-aware backprop, neural modules, and optimizers; validated gradients via finite-difference gradchecks and float64 PyTorch parity tests.

[GitHub →](https://github.com/stochi0/beacongrad)

#### Optimized YOLOv11 for Document Layout Recognition and Inference

**Tech:** PyTorch, YOLO, TensorRT, onnxruntime, OpenVINO

- Fine-tuned YOLOv11 on DocLayNet for document layout analysis (captions, footnotes, formulas, etc.).
- Accelerated inference via TensorRT, ONNXRUNTIME, and OpenVINO, achieving scalable batch processing with threaded execution.

#### Expandable Subspace Ensemble for Class-Incremental Learning

**Tech:** PyTorch, NumPy

- Implemented a subspace expansion technique to retain previous classes without forgetting, benchmarked on CIFAR-10 from scratch.

[GitHub →](https://github.com/stochi0/expandable-subspace-ensemble-cil)

## Generative & Probabilistic

#### Discrete Walk-Jump Sampling for Protein Discovery

**Tech:** PyTorch, Energy-Based Models, Langevin MCMC, Contrastive Divergence, Denoising Networks

- Implemented Discrete Walk-Jump Sampling for antibody sequence generation using EBMs trained via contrastive divergence.
- Employed Langevin MCMC for exploration and one-step denoising for refinement, optimizing sampling efficiency and sequence quality.

[GitHub →](https://github.com/stochi0/discrete-walk-jump-sampling)

#### Concrete Score Matching: Generalized Score Matching for Discrete Data

**Tech:** PyTorch, NumPy, Concrete Score Matching, Metropolis–Hastings

- Implemented the CSM algorithm to learn score functions in discrete spaces.
- Used Metropolis–Hastings sampling for data generation and visualized true vs. generated distributions.

[GitHub →](https://github.com/stochi0/concrete-score-matching-discrete-data)

---

# Highlights

## Scholarships

- **Scholarship — Tsinghua HTGR Summer School** — Program scholarship · 2025

## Competitions

- **Meta Hacker Cup** — Advanced to Round 2 of global competitive programming contest · 2024
- **CodeUncode** — Ranked 49th of 2000 in ACM-ICPC style competition · 2024

## International Programs (7 in China, 2025)

- **Tsinghua HTGR Summer School** — China · 2025
- **Tsinghua Summer School for International Construction** — China · 2025
- **Tsinghua Design Futures · Shared Vision — Academy of Arts & Design** — China · 2025
- **Tsinghua IEDA Summer School — Industrial Engineering & Data Analytics** — China · 2025
- **Tsinghua–Princeton–CI Summer School on Combustion** — China · 2025
- **Tsinghua Brain & Intelligence Lab — Music Brain Science Camp** — China · 2025
- **Renmin University of China International Summer School** — China · 2025

## Music

Before I wrote code, I played music. The piano has been my companion since childhood.

- **1st Place, District Classical Concert** — Led as pianist in the group performance
- **Lead Pianist, School Choir** — Grades 5–12, musical arrangements
- **Farewell Ceremony Pianist** — Senior farewell performance
- **1st Runner-up, Greek Play** — Live background score composition

---

# Writings

*Collected thoughts and quiet observations*


---

## Undertow: A Synthetic Benchmark Experiment for Programmatic Tool Calling

**Date:** 2026-05-20

**Description:** Undertow is a small synthetic benchmark experiment for hidden, stateful tool-use environments.

**Slug:** `undertow`

# Undertow: A Synthetic Benchmark Experiment for Programmatic Tool Calling

*A small experiment in building controllable hidden tool-use worlds, and using traces to understand where agents fail.*

## TL;DR

I built Undertow because I wanted a simple environment where I could ask the question:

> When an agent has to control a hidden, stateful world through primitive tools, does having a programmable workspace help it solve tasks more reliably than a standard tool-based environment?

This is meant to be a controlled task. The point is to know exactly what the agent is given, exactly what is hidden, exactly what actions it can take, and exactly why it succeeds or fails.

Undertow currently has two task families:

* `hidden_dag`: the agent gets initial values, generated function schemas, and a target variable. It has to call functions in a valid dependency order and submit the target value.
* `repair_chain`: the agent gets machine ids, tool ids, bay ids, and primitive operation schemas. It has to inspect tools, scan machines, move to the right bay, apply the right repair tool at each stage, track stale observation versions, test repaired machines, and submit the repaired ids.

This benchmark makes hidden-state failures visible. It tells me whether an agent failed because it forgot a value, called a function too early, used the wrong repair tool, reused a stale observation, repeated calls, hit a constraint, timed out, or produced metrics that disagree with each other.

## Flow

1. [Motivation](#motivation)
2. [Why synthetic at all](#why-synthetic-at-all)
3. [What the agent is given](#what-the-agent-is-given)
4. [Task 1: `hidden_dag`](#task-1-hidden-dag)
5. [Task 2: `repair_chain`](#task-2-repair-chain)
6. [What PTC changes](#what-ptc-changes)
7. [What the results say so far](#what-the-results-say-so-far)
8. [What went wrong in the traces](#what-went-wrong-in-the-traces)
9. [What PTC actually did](#what-ptc-actually-did)
10. [Closing](#closing)

## Motivation

The motivating intuition is that ordinary tool calling and programmatic tool calling are not very different on short tasks. If a task is "call one API and report the result," a Python workspace should not matter much.

The workspace should matter when the agent has to build and maintain state over many tool calls. For example:

* a table of values it has already computed,
* a queue of functions whose inputs are now available,
* a map from machine to location,
* a map from `(part, repair_stage)` to tool,
* the current observation version for each machine,
* and a final value or repaired-object list that has to be consistent with the world.

This led to the question:

> Can I generate tasks where the correct strategy is to build a small local state machine around primitive tools?

If yes, then PTC has a natural thing to be good at: writing that state machine down in code. If no, then the benchmark is not actually testing what I want it to test.

So the current version of Undertow is best understood as an environment-design experiment.

## Why Synthetic At All

The reason to make Undertow synthetic is controllability. In a real tool-use task, many things vary at once: API surface, domain knowledge, prompt wording, hidden data. In Undertow, I can generate a world from a seed and turn the knobs.

That lets me ask questions like:

* Does success fall when the dependency chain gets deeper?
* Do connected distractor functions cause more wasted calls than disconnected distractors?
* Does stale state break agents even when the correct next action is obvious?
* Does the workspace help because the agent writes a real ledger, or does it just make different mistakes?
* Once the agent discovers the general strategy, do bigger generated instances still matter?

That last question is important. If the knobs stop mattering once the agent figures out the strategy, that is a useful negative result. It means the benchmark is mostly testing strategy discovery, not scalable execution. If the knobs continue to matter, then the benchmark is also testing whether the agent can carry out the strategy reliably as bookkeeping pressure increases.

This is the same reason I found FuncBenchGen useful as a reference point. FuncBenchGen is also synthetic, but it is clear about the generated object: a hidden function-dependency DAG. The model sees functions and input variables, but not the graph. The task is to compute a target value. The knobs change graph size, depth, and distractors.

Undertow borrows that style of benchmark design and asks whether it can be extended from hidden dataflow to hidden mutable state.

## What The Agent Is Given

The agent receives a public task spec and primitive tools.

In standard mode, the system prompt says the agent is solving an Undertow task with native tools. The user prompt says:

```text
Discover the target answer using the primitive tools.
Finish with submit(...).

Public task spec:
{...}
```

In PTC mode, the system prompt says the agent is in a programmatic tool-calling environment. It can use Python files under `/workspace`, and it can call the same primitive tools through:

```python
from ptc import task, tools, finish
```

The PTC prompt also gives the public task spec. It does not expose hidden state or reward.

So yes, the model is told the task family through the public spec. For example, it can see `"family": "hidden_dag"` or `"family": "repair_chain"`. But it is not told the hidden solution:

* In `hidden_dag`, it sees function inputs and outputs, but not the true value table or the already-computed solution order.
* In `repair_chain`, it sees machine ids, tool ids, and bay ids, but not each machine's required repair sequence.

The benchmark is not testing whether the model can guess that there is structure. It is testing whether the model can use the public structure and tool observations to maintain the right state over time.

## Task 1: hidden_dag

`hidden_dag` is the simpler family. It is basically a generated dataflow puzzle.

The agent sees something like:

```json
{
  "family": "hidden_dag",
  "initial_values": {
    "v0": 343,
    "source_3": 706
  },
  "target": "v2",
  "functions": [
    {
      "name": "core_0",
      "inputs": ["v0"],
      "output": "v1",
      "description": "Transforms v0 into v1."
    },
    {
      "name": "core_1",
      "inputs": ["v1", "source_3"],
      "output": "v2",
      "description": "Combines v1, source_3 into v2."
    }
  ]
}
```

It can call `core_0` only if it passes the correct current value for `v0`. A successful call returns a new variable:

```json
{
  "ok": true,
  "variable": "v1",
  "value": 596
}
```

Now the agent can call `core_1`, because it knows both `v1` and `source_3`. If it submits the correct value for `v2`, the hidden checker marks the task solved.

The intended strategy is:

```python
known = dict(initial_values)
pending = list(functions)

while target not in known:
    for fn in list(pending):
        if all(x in known for x in fn["inputs"]):
            result = call(fn["name"], **{x: known[x] for x in fn["inputs"]})
            known[result["variable"]] = result["value"]
            pending.remove(fn)

submit(value=known[target])
```

This is why `hidden_dag` is a good first family. It is not trying to be realistic. It is trying to isolate one boring but important behavior: can the agent maintain a value ledger and execute a dependency graph without losing track?

The knobs mean:

| Knob | What it changes | Why it matters |
| --- | --- | --- |
| `n_core` | More required functions | More values to store and pass correctly |
| `depth` | Longer dependency chain | One forgotten value blocks later calls |
| `n_connected_distractors` | Irrelevant functions attached to known variables | Tests whether the agent wastes calls on plausible but useless work |
| `n_disconnected_distractors` | Irrelevant functions outside the solution path | Tests whether the agent can ignore obvious noise |
| `observation_mode=minimal` | Observations do not restate all known values | Tests whether the agent maintains its own ledger |
| `invalid_return_mode=noisy` | Bad calls can return fake-looking values | Tests whether the agent pollutes its ledger after mistakes |

If an agent has the right topological-execution strategy, increasing `n_core` and `depth` should still matter because there are more exact values to carry forward. If it does not matter, then `hidden_dag` is probably too easy for that model/interface pair.

## Task 2: repair_chain

`repair_chain` is the family that actually motivated Undertow. Here the agent is controlling a hidden mutable world, not just computing a value.

The public spec looks more like:

```json
{
  "family": "repair_chain",
  "objects": ["machine_0", "machine_1"],
  "locations": ["bay_0", "bay_1"],
  "tools_available": ["tool_0", "tool_1", "distractor_tool_0"],
  "target": "repair all critical machines"
}
```

The agent can use these tools:

| Tool | What it does |
| --- | --- |
| `scan_object(object_id)` | Reveals the machine's status, repair stage, observation version, and sometimes part/location |
| `inspect_tool(tool_id)` | Reveals which parts and stages a tool can repair |
| `move_to(location)` | Moves the agent to a bay |
| `apply_tool(object_id, tool_id, observation_version)` | Tries to advance a machine by one repair stage |
| `test_object(object_id, observation_version)` | Checks whether a machine is repaired |
| `submit(repaired=[...])` | Submits the final repaired machine ids |

A typical observation might be:

```json
{
  "ok": true,
  "object_id": "machine_0",
  "status": "broken",
  "part": "part_0",
  "location": "bay_1",
  "repair_stage": 0,
  "observation_version": 0
}
```

The key detail is `observation_version`. When the agent repairs a machine, the version can change. If the agent later uses the old version, the environment returns `stale_state_reference`. This is a tiny synthetic version of a real state-control problem: what you observed earlier may no longer be valid after you act.

The intended strategy is:

```python
tool_map = inspect_all_tools()      # (part, stage) -> tool_id
machines = scan_all_machines()      # machine_id -> current state

for machine_id, machine in machines.items():
    move_to(machine["location"])

    while machine["status"] != "repaired":
        tool_id = tool_map[(machine["part"], machine["repair_stage"])]
        result = apply_tool(
            object_id=machine_id,
            tool_id=tool_id,
            observation_version=machine["observation_version"],
        )
        machine.update(result)

    test_object(machine_id, machine["observation_version"])

submit({"repaired": sorted(machines)})
```

The knobs mean:

| Knob | What it changes | Why it matters |
| --- | --- | --- |
| `n_objects` | More machines | More per-object state to track |
| `n_repair_steps` | More stages per machine | Longer action sequences and more version updates |
| `n_tools` | More real tools | Larger compatibility map |
| `n_distractor_tools` | More useless tools | More plausible wrong actions |
| `staleness_rate` | Whether observations become stale after repairs | Tests whether the agent updates versions after state changes |
| `partial_observation_rate` | Whether scans hide part/location fields | Tests recovery from incomplete observations |
| `shared_tool_ambiguity` | More tools share compatible parts/stages | Makes the tool map less obvious |

This is where I expect PTC to matter more. In standard mode, the agent has to carry the ledger through the conversation. In PTC mode, the agent can write the ledger into code and files.

But this is still a hypothesis. The current results do not yet prove it.

## What PTC Changes

The two modes get the same public task data and the same primitive environment tools.

The difference is the control surface.

In standard mode, the agent directly calls tools one at a time:

```text
scan_object(machine_0)
inspect_tool(tool_0)
move_to(bay_1)
apply_tool(machine_0, tool_0, observation_version=0)
...
submit(value=None, repaired=["machine_0"])
```

In PTC mode, the agent can write code around those calls:

```python
from ptc import task, tools, finish

spec = task.spec()
machines = {}
tool_map = {}

for tool_id in spec["tools_available"]:
    obs = tools.inspect_tool(tool_id=tool_id)
    # store useful compatibility information

finish({"repaired": repaired_ids})
```

PTC does not make the hidden state visible. It only makes it easier for the agent to build durable local state: caches, ledgers, queues, assertions, logs, and final answer constructors.

So the actual claim is:

> PTC should help if the benchmark requires reliable local state management around external tool calls.

Undertow is my attempt to build tasks where that claim is testable.

## What The Results Say So Far

The current results should be treated as preliminary diagnostics, not a final benchmark result. The result set is small, and the bigger configs are stress probes rather than balanced multi-seed sweeps.

On `easy`, `hidden_dag` is basically solved by everyone. All three models solve it in both modes. That makes it useful as a calibration check, but not as the main story. `repair_chain` is already less uniform: standard solves 2 of 3 runs, while PTC solves 1 of 3. DeepSeek V4 Flash fails both ways, but the failures are different. In standard mode it burns the whole 165-call budget, with 145 failed calls, including many unknown-state and constraint failures. In PTC mode it fails earlier, at 70 calls and 50 failed calls, but still does not build enough useful repair progress. Qwen3.6 35B A3B standard solves the easy repair task despite 116 failed calls; Qwen3.6 35B A3B PTC reaches only 0.24 progress and spends most of its failed calls repeating work.

On `medium`, the benchmark starts to show the distinction I care about. `hidden_dag` standard is almost boring: 6 of 6 solved, 1.0 progress, and no failed calls. It behaves like a topological executor. PTC can also get through the family, but the traces are noisier. Qwen3.6 35B A3B PTC solves both seeds while producing schema errors, repeated calls, and incorrect-value calls. DeepSeek V4 Pro PTC has rows where `progress=1.0` and `reward=1.0` but `solved=false`. I would not narrate that as a model misunderstanding the task. I would treat it as a benchmark instrumentation issue to inspect, because the metrics are not telling the same story.

The most useful comparison is `medium` `repair_chain`. DeepSeek V4 Flash solves both seeds in both modes, but standard seed 1 is much tighter: 213 calls, 16 failed calls, reward 1.0. The matching PTC run solves too, but takes 366 calls and 155 failed calls. DeepSeek V4 Pro shows the other side: on seed 0, standard stalls at 0.081 progress, while PTC reaches 1.0 progress and solves, even though it takes 424 calls and 212 failed calls. Qwen3.6 35B A3B is split again. PTC solves seed 0 where standard only reaches 0.6875 progress, but PTC collapses on seed 1 with 0.03125 progress. I would read this as "PTC changes the failure surface," not "PTC is better."

On `hard`, the run becomes more like a stress test than a balanced comparison. The completed `hidden_dag` rows still mostly work, which suggests that dataflow bookkeeping alone is not the hard part for these models. `repair_chain` is different. The standard hard repair-chain runs complete, but barely progress: DeepSeek V4 Flash reaches 0.027 progress, DeepSeek V4 Pro reaches 0.031, and Qwen3.6 35B A3B reaches 0.0059. Those traces are mostly constraint violations and repeated calls. The PTC repair-chain attempts for hard do not have aggregate rows because the Python runner timed out after 600 seconds. 

I would not read `v_hard` as a result yet. The aggregate CSVs are empty and there are no raw rows or logs. It is a configured stress target, not evidence.


*[Figure: Preliminary standard vs PTC comparison]*


## What Went Wrong In The Traces



Two failed runs can mean very different things:

* The agent never discovers the right state.
* The agent makes partial progress and then stalls.
* The agent reaches full progress, but `reward`, `progress`, and `solved` disagree.
* The agent repeats calls until most of the budget becomes noise.
* The agent uses stale or unknown observation versions after state changes.
* The agent violates environment constraints, like using the right tool in the wrong place or at the wrong stage.
* The agent runs a local program long enough to hit the sandbox timeout.

Undertow records these differences.


*[Figure: Failure taxonomy breakdown across task families and modes]*


For `hidden_dag`, the standard trajectory is usually simple: compute the functions whose inputs are available, update the value ledger, and submit the target. Across the completed rows, standard mode does this almost exactly. The PTC traces are more interesting because the workspace is sometimes extra surface area. A script can put a wrong value into the local ledger, retry a function with bad inputs, or call a generated function through the wrong schema. That is why some PTC `hidden_dag` runs have full progress but noisy failure counters.


*[Figure: Preliminary hidden_dag results by configuration]*


For `repair_chain`, the useful question is more mechanical: did it scan all machines, inspect enough tools, move to the right bay, apply the right tool at the right observation version, update after each state change, and avoid doing the same thing again?

This is where the traces become useful. In the medium runs, repeated calls dominate the failure counts. Across all medium episodes, there are 1,378 repeated calls. PTC repair-chain runs are especially repeat-heavy: DeepSeek V4 Flash PTC repair has 330 repeated calls, DeepSeek V4 Pro PTC repair has 358, and Qwen3.6 35B A3B PTC repair has 260 repeated calls plus 16 stale-state references. Standard repair-chain runs also repeat, but their failures often look more like a slow conversational stall: partial progress, many turns, and eventually no useful next move.


*[Figure: Preliminary repair_chain results by configuration]*


Call efficiency and progress make the same point. A benchmark score should not only say whether an agent won. It should say how much of the interaction actually changed the world in the right direction.


*[Figure: Call efficiency across task families and modes]*



*[Figure: Progress score versus success]*



*[Figure: Tool-call count distribution by mode and family]*


Budget is also part of the environment design. If the budget only allows the perfect oracle path, then the task mostly tests whether the model immediately guesses the intended algorithm. If the budget is too loose, repeated calls stop mattering. Undertow treats budget as another knob.


*[Figure: Budget exhaustion rates before and after calibration]*


## What PTC Actually Did

The best PTC traces look like the strategy I wanted the benchmark to reward. The agent scans objects, inspects tools, builds a local map from `(part, stage)` to tool, loops over machines, and updates its local state after each repair. That is what happens in some medium `repair_chain` runs where PTC recovers cases that standard leaves partial. DeepSeek V4 Pro seed 0 is the clearest example: standard stops at 0.081 progress, while PTC reaches full progress and solves.

But PTC also makes a bad local policy fast. If the script retries blindly, carries a polluted state map, or does not stop after repeated errors, it can burn calls much faster than a conversational agent. That is what the medium repair-chain failure counts show. The workspace helps when it becomes a ledger and planner. It hurts when it becomes an unchecked retry loop.

The hard repair-chain timeouts are another version of the same point. Those PTC runs did not produce aggregate rows because the Python command timed out after 600 seconds in the sandbox. That is not a normal solved/unsolved benchmark score, but it is still useful information. At larger sizes, the generated local program has to manage its own runtime.

On `hidden_dag`, PTC is less obviously useful. Standard mode already behaves like the intended topological executor. In that family, the workspace mostly creates new ways to make small mistakes: schema calls, repeated calls, and value-ledger pollution If the task is already easy to do directly, adding a programmable layer does not automatically help.


## Closing

> PTC should help when a tool-use task can be converted into a local state machine. Undertow is a controlled, synthetic attempt to generate hidden tool-use worlds where that claim can be tested—and where state tracking, recovery, repeated calls, stale observations, constraint failures, timeouts, and metric disagreement can be measured separately.

## Acknowledgements

Grateful to **[@a1zhang](https://x.com/a1zhang)** for detailed feedback on early versions of the write-up and for helping me scope the research problems.

And of course, the **[@PrimeIntellect](https://x.com/PrimeIntellect)** team for the generous compute credits.

---

## Sparse Signal Loop

**Date:** 2026-04-11

**Description:** An exploratory diary of sparse-feedback experiments: judge sparsity, working memory, skill files, and the awkward places where the metrics disagree.

**Slug:** `sparse-signal-loop`

# Sparse Signal Loop

There is a very particular kind of optimism that agent work seems to attract.

It goes something like this: perhaps the model is already mostly capable, and what looks like a reasoning failure is actually a *management* failure. Maybe the signal is too mushy. Maybe the loop is too forgetful. Maybe the model needs a better place to keep state than a chat transcript that keeps swelling until nobody, least of all the model, wants to read it.

If that is true, then changing the harness should not be a cosmetic intervention. It should produce qualitatively different behavior.

**I tested this directly.** The core question is simple: **Does sparse feedback (one violated criterion) help an RLM more than dense feedback (a total score)?** More precisely, does limiting the judge to a single complaint change the refinement strategy an RLM develops, and does that harness extract more value from sparsity than vanilla iterative refinement?

I like this question because it is sharp enough to kill its own framing. If sparse feedback helps both harnesses equally, the feedback format is doing the work. If RLM helps specifically under sparse feedback, then the harness is doing something mechanistically different. If neither happens, then a surprising amount of agent-flavored rhetoric collapses into "we changed the prompt and hoped."

These experiments do **not** yet answer that question in the strongest RL sense. What they do, and quite usefully, is answer the prompt-time version of it. Before any weights are updated, how much does behavior move if we change the shape of judge feedback, the location of working memory, or the persistence mechanism for process notes?

That matters more than it sounds. If these prompt-only interventions already swing outcomes a lot, then the harness really is part of the object we are studying. If they do not, then the "manager" in the mismanaged geniuses story might be less mysterious than advertised.

## Flow (how to read this note)

1. [The Setup: What I Actually Built](#flow-setup)
2. [Phase 0: The Core 2x2](#flow-phase-0)
3. [Phase 1: Where Should the Notebook Live?](#flow-phase-1)
4. [Phase 2: Does Procedure Persist?](#flow-phase-2)
5. [Efficiency Is Part Of The Result](#flow-efficiency)
6. [So What does this lead to?](#flow-takeaways)
7. [Caveats](#flow-caveats)
8. [What I Would Try Next](#flow-next)
9. [Final Word](#flow-final)

## The Setup: What I Actually Built

The experiment scaffold is disciplined about what changes across phases.

At the base, we have a plain 2×2:

- **harness**: `chat` vs `rlm`
- **judge feedback**: dense total-score feedback vs sparse single-criterion feedback

That is **Phase 0**. Everything else is a perturbation on this core.

**Phase 1** adds a modest intervention: a structured checklist / hypothesis log / failure log. The only variable is *where that notebook lives*:
- For chat harnesses, it lives in assistant messages.
- For RLM, it is either kept in those same assistant messages as an ablation or persisted in files in the workspace.

**Phase 2** asks whether *procedure* can persist, not just scratchwork:
- Chat gets `chat_no_file` and `chat_system_reinject` (where tagged process blocks get reinserted at the start of the next turn).
- RLM gets a skill-file arm, where the model updates a persistent process note after bad judge calls. This is literal memory: an actual text file in the sandbox.

The two benchmark families are importantly different:

- **LongBench-Pro (LBP)** is long-context question answering, retrieval, and clustering. The chat harness revises answers in conversation; the RLM harness works through a REPL over the materialized long context. Primary reward here is the judge, but we also log task metrics (accuracy, F1, NDCG, etc.).
- **Mini SWE Agent Plus** is code repair inside sandboxes. Here the primary reward is actual task solve rate from the test harness. The judge is only an in-loop helper. This distinction turns out to matter a lot.

**A wrinkle:** Phases 1 and 2 run on narrower, harder slices (LBP clustering at 32k; Mini SWE narrowed to Django). So read these as independent experiments, not a time-series.


*[Figure: Pilot versus rerun comparison]*


## Phase 0: The Core 2×2

Phase 0 is the central question in its cleanest form.


*[Figure: Phase 0 heatmaps]*


The answer is not a theorem. It is benchmark-shaped.

### LongBench-Pro

On the full Phase 0 LongBench-Pro run, the plain chat loop won comfortably.

| Arm | Reward / Judge YES | Avg task metric |
| --- | ---: | ---: |
| `chat__total_score` | **0.9667** | **0.6396** |
| `chat__single_criterion` | **0.8667** | **0.6525** |
| `rlm__single_criterion` | **0.7000** | **0.5351** |
| `rlm__total_score` | **0.6667** | **0.4368** |

If you wanted a quick headline: on long-context tasks, a plain iterative chat loop with dense rubric feedback was simply harder to beat than the fancier harness.

But the more interesting detail is that the dense chat arm was not just *better*; it was also *faster*. In the raw rollouts, it averaged **3.63 turns** and about **149,192 tokens per rollout**, whereas sparse chat averaged **6.10 turns** and about **495,834 tokens per rollout**. So the denser signal was, in practice, the cheaper one, because the loop converged earlier.

There is also a small splinter in these numbers that I do not think should be ignored. The dense-chat arm reached 29 judge acceptances out of 30 rollouts, but its task metric was still only 0.6396. Looking at the raw rows, two `T3.2 Single-Hop Fact QA` examples were judge-accepted with `task_metric_reward = 0.0`; the model answered simply `[Answer] D` or `[Answer] C`, which the judge accepted, while the benchmark metric did not. That is not a scandal. It is just a reminder that "the judge" and "the benchmark" are not the same object, even when the scoreboard tries to make them look like one.

And that, already, is a useful result: sparse feedback did *not* unlock some hidden RLM advantage here. If anything, the loop with the smallest conceptual overhead won.

### Mini SWE Agent Plus

Mini SWE is more annoying, in the productive sense.

| Arm | Solved rate | Judge YES |
| --- | ---: | ---: |
| `chat__single_criterion` | **0.5000** | **0.6333** |
| `chat__total_score` | **0.4333** | **0.3333** |
| `rlm__single_criterion` | **0.5333** | **0.7333** |
| `rlm__total_score` | **0.5667** | **0.8667** |

So the cross-over goes in opposite directions:

- Chat preferred **sparse** feedback.
- RLM preferred **dense** feedback.

This is almost comically uncooperative if what you wanted was a clean one-line conclusion. But as a measurement, it is actually quite informative. It suggests that "feedback sparsity" is not a standalone variable with a universal sign. It interacts with the task and with the loop.

My rough reading is this:

- For chat-on-code-repair, one crisp complaint may be enough. The loop is already structurally simple, so dense rubric lines mostly add more surface area to overfit.
- For RLM-on-code-repair, dense feedback may be acting as a more useful local search landscape. The harness has more degrees of freedom, and the extra rubric structure gives it more to grab onto.

That is still just a read, not a proof. But it is at least compatible with the data, which is more than can be said for many armchair theories of agent behavior.

## Phase 1: Where Should the Notebook Live?

Phase 1 is one of those interventions that sounds almost too modest to matter. The model is told to maintain:

- a short checklist
- a one- or two-line hypothesis log
- a one-line "what failed last time"

The only real variable is whether those notes live in chat or in files.

This is, in a very literal sense, a test of external working memory. Not memory in the grand cognitive sense. Just a notebook.


*[Figure: Phase 1 and Phase 2 interventions]*


### Mini SWE Phase 1

The cleanest result in Phase 1 is that the simplest arm won again.

| Arm | Solved rate |
| --- | ---: |
| `chat__total_score__mem_chat` | **0.7000** |
| `chat__single_criterion__mem_chat` | **0.6333** |
| `rlm__total_score__mem_repl_files` | **0.5667** |
| `rlm__single_criterion__mem_chat` | **0.5667** |
| `rlm__single_criterion__mem_repl_files` | **0.4667** |
| `rlm__total_score__mem_chat` | **0.4667** |

So: yes, the notebook helps a bit relative to Phase 0, but no, putting it in files does not obviously save the RLM. In fact, file-backed notes were sometimes worse than chat-backed notes.

What *did* happen is slightly more awkward. The RLM arms often looked better to the judge than to the tests. On the dense-feedback arms, judge YES rose to **0.9000**, but solved rate sat at **0.4667** and **0.5667**. In raw-count terms, that means a large pile of "judge says yes, tests say no."

That gap matters because it changes how one should interpret Phase 1. If the question is "can a better notebook help the model look more coherent to an LLM judge?", then maybe yes. If the question is "does it help the agent actually fix code?", the answer is much weaker.

### LongBench-Pro Phase 1

Here the result is harsher.

| Arm | Reward |
| --- | ---: |
| `chat__total_score__mem_chat` | **0.4000** |
| `chat__single_criterion__mem_chat` | **0.3000** |
| `rlm__total_score__mem_chat` | **0.2000** |
| `rlm__total_score__mem_repl_files` | **0.2000** |
| `rlm__single_criterion__mem_chat` | **0.1000** |
| `rlm__single_criterion__mem_repl_files` | **0.1000** |

Because this is the Phase 1 slice, we are now on five clustering examples at 32k, two rollouts each. So I would not try to squeeze universal truths out of the second decimal place here. But the direction is not subtle. On this slice, persistent notes in files did not rescue the RLM at all.

The charitable interpretation is that the hard part on this LBP slice is not remembering the last failed guess. It is decomposing the clustering problem quickly enough that the next guess is materially better. A notebook does not automatically give you that abstraction.

This is the first place where the broader "mismanaged geniuses" intuition started to feel useful to me. The problem is not "more state good." The problem is: what is the right decomposition language? A checklist stored in the wrong abstraction is just a longer way of being confused.

## Phase 2: Does Procedure Persist?

Phase 2 is the closest thing here to a harness-native continual-learning question.

Not continual learning in the parametric sense. No weights are being updated. No cross-episode competence is being internalized. But there *is* an attempt to preserve reusable procedure:

- what kinds of judge failures to look for
- what to check before submitting
- what habits reduce wasted tool calls

The setup is careful about this. The prompts explicitly ban task spoilers and gold spans. The skill file is supposed to contain *procedure only*.

That is exactly why the results are interesting. If the procedure channel helps, it means the loop can accumulate useful meta-behavior without being handed answers.

### Mini SWE Phase 2

This is where the numbers become a little mischievous.

On actual solved rate, the best Phase 2 Mini SWE cells were both chat arms:

| Arm | Solved rate |
| --- | ---: |
| `chat__single_criterion__chat_no_file` | **0.6333** |
| `chat__total_score__chat_system_reinject` | **0.6333** |

The RLM skill-file arms did not beat them:

| Arm | Solved rate |
| --- | ---: |
| `rlm__single_criterion__rlm_skill_file` | **0.5333** |
| `rlm__total_score__rlm_skill_file` | **0.5667** |

So if the hoped-for story was "sparse signal plus RLM plus a skill file produces a qualitatively better refinement regime," the answer here is no, not yet.

And then there is the judge.


*[Figure: Judge gap on Mini SWE]*


The densest skill-file arm, `rlm__total_score__rlm_skill_file`, was judged correct on **29 out of 30** rollouts, for a judge YES rate of **0.9667**. But it only actually solved **17 out of 30**, i.e. **0.5667**. That is **12 judge-yes / test-no false positives** in a single cell.

I do not think one can look at that and say "the skill file worked" without immediately asking "worked at what?"

It may well have helped the model learn how to produce the kind of diff-and-explanation bundle the judge likes. That is not nothing. But it is not the same as learning a better repair policy. In this setting, the skill file seems at least partly capable of preserving *judge-facing procedure* rather than *task-facing procedure*.

One caveat: the sparse reinjection chat arm on Mini SWE was also contaminated by **8 sandbox startup errors**. Its **0.4333** should therefore be read with more suspicion than the other Phase 2 cells. This is exactly the kind of thing raw rollout inspection is useful for; the top-line summary alone makes it look like a clean behavioral loss.

### LongBench-Pro Phase 2

LongBench-Pro Phase 2 is, to me, more encouraging for lightweight memory than for explicit file-backed skills.

| Arm | Reward |
| --- | ---: |
| `chat__single_criterion__chat_system_reinject` | **0.6000** |
| `chat__total_score__chat_no_file` | **0.5000** |
| `chat__total_score__chat_system_reinject` | **0.4000** |
| `chat__single_criterion__chat_no_file` | **0.3000** |
| `rlm__single_criterion__rlm_skill_file` | **0.3000** |
| `rlm__total_score__rlm_skill_file` | **0.2000** |

The best arm here is the chat loop with sparse feedback and system reinjection. Not the file. Not the heavier harness. Just a weak carry-over mechanism that re-exposes a tagged process block on the next turn.

That result made me pause a bit, because it is almost the opposite of the durable skill-file intuition. But perhaps it should not be so surprising. Reinjection is opinionated. It forces the persistent state to be short, local, and immediately legible to the next step. A free-form skill file has more expressive power, but also more ways to become vague, bloated, or merely ceremonial.

Again: the question is not whether memory exists. The question is what language that memory is written in.

## Efficiency Is Part Of The Result

There is another way to read these runs that the reward tables hide a bit.

On some cells, the harness that loses on absolute reward still wins on cost. On others, the winner is just better across the board. That distinction matters because agent work has a bad habit of grading itself only on "best answer eventually," even when the scaffold quietly multiplies latency and token burn.

I am using two simple quantities from the run artifacts:

- **total tokens**, which here is the mean input-plus-output tokens per rollout
- **mean rollout time**, computed from `rollout_time_ms_sum / num_rollouts`

Those are not perfect cost measures, but they are good enough to show that absolute reward is not the whole story.


*[Figure: Efficiency frontier]*


### LongBench-Pro efficiency

On the full Phase 0 LongBench-Pro run, chat won on absolute quality, but not on speed.

| Arm | Reward | Tokens / rollout | Mean rollout time (min) |
| --- | ---: | ---: | ---: |
| `chat__total_score` | **0.9667** | **149,192** | **32.2** |
| `rlm__single_criterion` | **0.7000** | **106,936** | **7.0** |
| `rlm__total_score` | **0.6667** | **119,868** | **4.8** |

So the absolute winner was dense chat, but the efficiency picture is mixed. Measured as reward per 100k tokens, `rlm__single_criterion` was actually a hair ahead of dense chat (**0.6546** vs **0.6479**). Measured as reward per rollout-hour, `rlm__total_score` was far ahead (**8.28** versus **1.80**), simply because the REPL loop terminated so much faster.

That is an important caveat to the plain "chat wins" reading. On LongBench-Pro, the RLM harness was often a *cheap under-shooter*, not an obviously wasteful one.

The same basic tension survives on the hard Phase 2 slice. The best chat arm, `chat__single_criterion__chat_system_reinject`, reached **0.6000** but needed about **980,901 tokens** and **125.2 minutes** per rollout. `rlm__single_criterion__rlm_skill_file` only reached **0.3000**, but did so at **659,205 tokens** and **16.0 minutes**. So if the goal is best absolute answer, chat still wins. If the goal is getting a middling answer cheaply, the RLM harness is not dead at all.

### Mini SWE efficiency

Mini SWE is much less kind to the RLM story.

In Phase 0, the tradeoff was still muddy rather than clean:

| Arm | Solved rate | Tokens / rollout | Mean rollout time (min) |
| --- | ---: | ---: | ---: |
| `rlm__total_score` | **0.5667** | **1,864,276** | **46.0** |
| `chat__single_criterion` | **0.5000** | **2,250,750** | **26.4** |

Then Phase 1 happens, and the simple chat notebook arm becomes hard to ignore:

| Arm | Solved rate | Tokens / rollout | Mean rollout time (min) |
| --- | ---: | ---: | ---: |
| `chat__total_score__mem_chat` | **0.7000** | **1,455,311** | **13.7** |
| `rlm__total_score__mem_repl_files` | **0.5667** | **1,399,685** | **16.3** |
| `rlm__total_score__mem_chat` | **0.4667** | **1,451,797** | **24.5** |

That is the kind of result I trust more than any rhetoric. The winning chat arm is not only better in reward; it is also faster than every RLM arm and roughly comparable or better in token use. By Phase 2, the same broad pattern remains: the best Mini SWE chat cells dominate the quality/latency frontier, while the RLM skill-file cells often spend more time and still trail on actual solves.

So the short version is this:

- On **LBP**, absolute quality and efficiency pull in different directions.
- On **Mini SWE**, the best chat cells are usually just better overall.

## So What does this lead to?

The most honest answer is: it learned that sparse signal is not a magic solvent, and that "more scaffold" is not the same thing as "better management."

I would compress the empirical takeaways like this.

1. **The central Phase 0 question did not resolve into a simple RLM win.** On LongBench-Pro, chat plus dense feedback was best by a wide margin. On Mini SWE, chat liked sparse feedback while RLM liked dense feedback.
2. **Judge format and true task success can diverge in uncomfortable ways.** On LongBench-Pro, judge success and task metrics were already not perfectly aligned; on Mini SWE, the judge could become wildly optimistic, especially for RLM skill-file arms.
3. **Working memory location mattered less than I expected.** Moving notes from chat into files did not reliably help. In some places it did nothing. In some places it looked worse.
4. **Procedure persistence helped most when it stayed small and nearby.** The best Phase 2 LongBench-Pro arm was system reinjection, not a persistent skill file. That is a point in favor of constrained carry-over over unconstrained diaries.
5. **Efficiency changes the interpretation.** On LongBench-Pro, RLM often lost on absolute reward but remained competitive or better on reward-per-token and reward-per-time. On Mini SWE, by contrast, the best chat cells were usually better on all three axes.
6. **The outputs folder justifies its own messiness.** The pilots were noisy, the serious rerun was cleaner, and the raw rows often told a more interesting story than the summary tables did.
7. **Structured state persistence** RLMs may benefit from persistence, but only if the object being persisted is disciplined enough to be useful. The skill-file results suggest that the problem is not whether state survives between turns — it is whether the structure of that state constrains the model toward better next moves. A free-form diary accumulates just as readily as it clarifies. What Phase 2 hints at, without proving, is that a tighter schema might do more work than a richer one. The hypothesis is not "more memory good." It is "the right shape of memory, at the right moment, might change what the loop does next."
8. **Early failure** Several RLM rollouts terminated earlier than their chat counterparts, and the first instinct is to read that as a loss. But there is a more interesting interpretation available. RLMs seem to front-load their exploration — probing the environment, testing tool boundaries, and discovering what the harness will and will not support — before committing to a refinement strategy. That means failures arrive sooner, which is not the same as failing more. A loop that surfaces a dead end in turn two is doing something structurally different from one that wanders into the same dead end at turn eight after burning tokens on confident-sounding intermediate steps. The RLM is not collapsing early. It is learning early. Whether the harness is well-designed enough to do anything useful with that signal is a separate question — and probably the more important one.

## MGH, Continual Learning, And The Limits Of Notebook Optimism

I think these experiments fit surprisingly well between two broader ideas that have been circulating in this area, though not in the triumphant way one might first expect.

The mismanaged geniuses hypothesis argues that current models are underused because our scaffolds are clumsy. These runs support *part* of that claim. Small changes to management do matter. A different judge format can swing Phase 0 Mini SWE chat from **0.4333** to **0.5000**. System reinjection can move Phase 2 LongBench-Pro from **0.3000** to **0.6000**. The manager is not decorative.

But these runs also push against a lazy version of MGH, namely the version where every extra layer of scaffold is presumed to unlock more latent intelligence. That is not what happened here. Often the heavier harness did worse. Often the durable file did not help. Sometimes the simplest chat loop was both *better* and *cheaper* because it converged faster.

This is why the idea of the **space of decompositions** matters so much. The crucial question is not whether the model can store more notes. It is whether the harness induces the right decomposition of the problem. A bad notebook is still bad management.

A different but related point is that harness memory does not automatically scale into genuine continual learning. Retrieval can become the bottleneck; persistence can accumulate junk as easily as skill; external memory can plateau because the model underneath never changed.

[Ilija Lichkovski](https://x.com/carnot_cyclist) opens a useful framing in a thread on [defining continual learning for LLMs](https://x.com/carnot_cyclist/status/2041479655035679163). In a reply there, [@willccbb](https://x.com/willccbb) [states the contrast more bluntly](https://x.com/willccbb/status/2041625336576929931): with harness-based memory, growing a skill tree can show diminishing returns or even hurt performance, because the parametric model underneath is unchanged; parametric knowledge, by contrast, changes how much useful "intelligence" fits in a forward pass and is where compounding has more headroom—if you can solve continual learning in weights.

Phase 2 feels like a tiny, almost toy-sized version of that argument. A skill file does not automatically compound into better performance. If the feedback surface is misaligned, durable process memory can stabilize the wrong habits. In Mini SWE, the clearest example is the dense RLM skill-file arm: **29/30** judge acceptances, **17/30** real solves. That is not continual learning. That is durable overfitting to the wrong critic.

So I end up with a more skeptical version of the original optimism.

Yes, management matters.

No, persistence alone is not management.

And no, one should not confuse "the model learned a reusable procedure" with "the model got better at the task" unless the reward surface itself is trustworthy.

## Caveats

There are several ways this experimental setup could mislead us if we read it too triumphantly.

First, this is still mostly a **prompting** study, not an RL study. The motivating question is about what refinement strategy an RLM *develops*. These runs tell us whether the scaffold changes behavior at inference time under fixed models. That is useful, but it is not yet evidence about learned decomposition.

Second, the comparisons are not perfectly apples-to-apples. On LongBench-Pro, the chat harness sees the whole context directly in the conversation, whereas the RLM harness has to work through a copied `context.txt` in the REPL. That means the RLM arm is not just "the same task with more tools"; it is also solving a slightly different interface problem.

Third, the later phases are on **different slices**. LongBench-Pro Phase 1 and Phase 2 are on a harder clustering slice at 32k context; Mini SWE Phase 1 and Phase 2 are narrowed to a single Django slice. This makes within-phase comparisons much cleaner than across-phase comparisons.

Fourth, the sample counts are not large enough to support chest-thumping. The serious LongBench-Pro Phase 1 and Phase 2 runs are only **10 rollouts per cell**. That is enough to see directionality, not enough to declare subtle effects settled.

Fifth, the judge is a moving part in the experiment rather than an oracle above it. On Mini SWE especially, it can be wrong in the optimistic direction. That means some of the apparent "learning" in the loop may really be adaptation to judge taste.

Sixth, infrastructure noise is real. The Mini SWE sparse-reinject chat arm in Phase 2 had **8 sandbox startup failures**. That does not invalidate the run, but it does mean not every low score is a pure behavioral fact about the model.

And finally, the skill-file intervention in Phase 2 is not really continual learning in the strong sense. It is durable *external* process memory within an episode family. Nothing is being internalized into weights, and nothing here proves cross-task accumulation of skill.

## If I Wanted RLMs To Truly Shine

I do think this experimental setup is slightly harder on RLMs than the strongest possible RLM setting would be. Not unfairly hard, exactly. Just not optimized for the kinds of advantages RLMs are supposed to have.

If I wanted to build a better proving ground for them, I would change at least five things.

1. **Match the budget, not just the turn count.** Fixed `max_turns` is not a fair compute budget across chat and REPL loops. I would compare under matched token budgets, matched wall-clock budgets, and matched dollar budgets.
2. **Give RLM-native tasks more room to be RLM-native.** LongBench-Pro is decomposable, but the current setup does not strongly encourage the chunking, batching, and reusable retrieval subroutines that make a recursive harness interesting.
3. **Reward the decomposition, not only the final answer.** Especially for RLMs, intermediate evidence quality matters: did the model search the right chunks, keep the right notes, avoid repeated dead ends, or build a useful skill file? Right now those behaviors only matter indirectly through the final verdict.
4. **Train the harness rather than only prompt it.** A lot of the current results feel like untrained scaffold sensitivity. That is valuable, but RLMs are really making a stronger claim: not just that they *can* externalize state, but that they can learn how to externalize and reuse it well.
5. **Use tasks with repeated structure and real horizon.** RLMs should benefit most when there are many subproblems, when local failures can be logged and avoided, and when one good abstraction can pay off several times.

My suspicion is that a better RLM benchmark would look less like "chat, but with a REPL" and more like "a problem where decomposition itself is the scarce resource." Something like long-context retrieval with explicit chunk scheduling, or coding tasks with repeated diagnosis-and-repair motifs, or even multi-instance curricula where the same style of failure recurs often enough that a skill file can actually amortize.

In other words: if the goal is to let the RLM shine, the right question is not "how do we add more persistence?" It is "what environment makes good decomposition legible, learnable, and worth paying for?"

## What I Would Try Next

The nice thing is that the current results already suggest the next experiments.

1. **Run the actual RL version of Phase 0.** The real question is about what strategies an RLM *develops*. The current study mostly measures prompt-time scaffold sensitivity. That is useful, but it is still the prelude.
2. **Make judge disagreement a first-class metric on Mini SWE.** Right now the big story is hidden unless you inspect the raw rollout logs. I would track judge-yes / test-no explicitly, per cell, and probably optimize against it.
3. **Use benchmark metrics more aggressively on LBP.** The `[Answer] D` / `[Answer] C` cases are warning lights. If the judge and the task metric diverge, the report should treat that divergence as a result, not a footnote.
4. **Constrain the persistent memory object harder.** The skill file may simply be too unconstrained. I would try a tiny schema: maybe three fields only, something like `failure_pattern`, `next_check`, `don't_do_this_again`.
5. **Try cross-task carry-over, not just within-task persistence.** Phase 2 is really episodic self-repair. The more interesting continual-learning question is whether procedure learned on one task helps on the next one without merely bloating the harness.
6. **Price the interventions properly.** Some of the best-performing chat arms were also cheaper. On LBP Phase 0, dense chat did better and used far fewer mean tokens per rollout than sparse chat. That kind of Pareto win should become the baseline to beat.

## Final Word

This line of experimentation isn't grandiose. It's quite simple. Change the signal. Change where the notes live. Change whether process can persist. Then inspect the logs closely enough that you cannot flatter yourself.

The answer, so far, is not that sparse feedback suddenly reveals the superiority of RLMs. It is not that a skill file quietly solves harness-level continual learning. It is not even that persistence is obviously good.

The answer is more awkward, and therefore more useful.

The signal matters. The *language* and *structure* of state persistence matters. But these things do not help monotonically, and they do not help equally across tasks. And sometimes, which is perhaps the healthiest outcome for a study like this, the experiment tells you that the story you wanted was a little too clean.

## Acknowledgements

Grateful to **[@a1zhang](https://x.com/a1zhang)** and **[@willccbb](https://x.com/will)** for their insights and clear air for helping shape the direction of my inital exploration.

Appreciate **[@omouamoua](https://x.com/omouamoua)** and **[@rasdani_](https://x.com/rasdani_)** for their thoughtful feedback, questions, and insights on directions to explore.

Also grateful to **[@kcoopm](https://x.com/kcoopm)**, **[@GottliebEli](https://x.com/GottliebEli)**, and **[@samsja19](https://x.com/samsja19)** for helping debug and resolve hosted evals and run issues.

And of course, **[@vincentweisser](https://x.com/vincentweisser)**, **[@johannes_hage](https://x.com/johannes_hage)**, and the **[@PrimeIntellect](https://x.com/PrimeIntellect)** team for the generous compute support, credits, and for hosted runs and evaluations.

---

## Mixed Precision and ZeRO: Training Large Models Without Running Out of Memory

**Date:** 2025-02-11

**Description:** A note on mixed precision, high-precision parameter copies, and ZeRO.

**Slug:** `mix-precision-training`

# Mixed Precision and ZeRO: Training Large Models Without Running Out of Memory

*A note on mixed precision, high-precision parameter copies, and ZeRO.*


## TL;DR

Training large neural networks requires two conflicting desiderata: (1) the speed and memory economy of low-precision compute (FP16 / BF16), and (2) the numerical fidelity of high-precision updates (FP32). The inevitable compromise is to maintain *both* a high-precision FP32 canonical copy of parameters and a low-precision compute copy; gradients are produced in low precision, then cast to high precision for optimizer arithmetic. When scale forces duplication across devices, ZeRO (Zero Redundancy Optimizer) shards optimizer state, gradients, and — in its strongest form — parameters, trading communication for memory. Below you’ll find the math, the sequence of operations, memory accounting, communication primitives, and some engineering optimizations.

(Frameworks — for example PyTorch and DeepSpeed — implement these ideas in C++/CUDA with many optimizations; the theory here is what they implement under the hood.)


## Flow (how to read this note)

1. State the single physical law we are trying to perform.
2. Spell out floating-point mechanics (precision, dynamic range) and why they force a compromise.
3. Give the canonical mixed-precision protocol: FP32 canonical copy, FP16 compute copy, cast gradient, optimizer in FP32, refresh.
4. Account for memory: naive per-device, then data-parallel replication and the urge to shard.
5. Introduce ZeRO: sharding optimizer state (ZeRO-1), gradients (ZeRO-2), and parameters (ZeRO-3).
6. Summarize communication primitives and costs (all-reduce, reduce-scatter, all-gather).
7. Explain why high-precision copies are required (numerical stability, Adam example).
8. Walk through a working ZeRO-1 protocol step by step.
9. List engineering optimizations (bucketing, overlap, prefetch, grad scaling, offload).
10. Give some practical recipes.
11. Note common failure modes.
12. Close with the ledger metaphor.


## Prelude — the single physical law

There is only one true operation we are trying to perform:

$$
\theta \leftarrow \theta - \eta\,\Delta(\theta)
$$

where $\theta\in\mathbb{R}^N$ is the full parameter vector and $\Delta(\theta)$ is the update computed by your optimizer (for SGD $\Delta=\nabla\mathcal{L}$; for Adam it is a more elaborate function of past gradients). Computers approximate reals with floating point. That approximation imposes constraints that force the whole engineering stack you now know exists.


## Floating-point mechanics

Floating point numbers are finite encodings of real numbers. IEEE-754 binary formats represent a number as:

$$
\text{value} = (-1)^{s} \times 2^{e-b} \times 1.m
$$

where $s$ is the sign bit, $e$ the exponent field, $b$ the bias, and $m$ the significand bits. Two consequences matter for training:

1. **Precision (significand length).** FP16 has 10 significand bits (≈3 decimal digits); BF16 preserves the wider exponent range of FP32 but with fewer significand bits; FP32 has 23 significand bits (≈7 decimal digits).
2. **Dynamic range (exponent).** BF16 and FP32 share greater exponent range than FP16; overflow/underflow behavior depends on exponent fields.

**Implication for updates.** If $\theta \approx 1.0$ and the update $\delta\theta \approx 10^{-5}$, FP16 may not represent $\delta\theta$ when added to $\theta$ — the result rounds back to $\theta$. Thus, performing repeated incremental updates in low precision leads to loss of meaningful progress.

*[Figure: Why low-precision accumulation destroys small updates: smallest representable increment vs parameter magnitude for FP16, BF16, and FP32]*


## The canonical mixed-precision protocol (exact sequence)

From the physical constraints above, the robust protocol used in modern training is:

1. Maintain a high-precision FP32 **canonical parameter copy** $\theta^{(32)}$ (FP32). This is the authoritative value.
2. Maintain a low-precision **compute** copy $\theta^{(16)} = \operatorname{cast}_{16}(\theta^{(32)})$ (FP16 or BF16) used in forward/backward.
3. During backward, compute low-precision gradients $\nabla_{\theta^{(16)}} \mathcal{L}$ (initially FP16/BF16).
4. Convert gradients to FP32: $\nabla^{(32)} = \operatorname{cast}_{32}(\nabla^{(16)})$.
5. Perform optimizer arithmetic in FP32 updating $\theta^{(32)}$ (and optimizer state like moments $m,v$ in FP32).
6. Refresh compute copy: $\theta^{(16)} \leftarrow \operatorname{cast}_{16}(\theta^{(32)})$.

In symbolic form:

$$
\begin{aligned}
&\text{forward: } y = f(x; \theta^{(16)})\\
&\text{backward: } g^{(16)} = \nabla_{\theta^{(16)}} \mathcal{L}\\
&\text{cast: } g^{(32)} = \operatorname{cast}_{32}(g^{(16)})\\
&\text{optimizer: } \theta^{(32)} \leftarrow \mathcal{U}(\theta^{(32)}, g^{(32)}, \text{state}^{(32)})\\
&\text{refresh: } \theta^{(16)} \leftarrow \operatorname{cast}_{16}(\theta^{(32)})
\end{aligned}
$$

*[Figure: Mixed-precision dataflow: FP16/BF16 compute path, casting boundary, and FP32 canonical state with optimizer update loop]*

**Why both copies?** Because the optimizer math requires the dynamic range and precision of FP32 to preserve small incremental updates and accumulated moments; the compute path benefits from the throughput of low precision on modern tensor cores.


## Memory accounting

Let $\Psi$ denote the number of scalar parameters. Let element sizes be $s_{16}$ and $s_{32}$ bytes (2 and 4 bytes). Let $k$ denote the optimizer multiplier: the number of parameter-sized FP32 tensors the optimizer keeps (for Adam with FP32 canonical copy, $k\approx 3$: exp_avg, exp_avg_sq, FP32 canonical copy; retain symbolic $k$ for clarity).

**Naive per-device memory (single replica, no sharding):**

* FP16 parameters: $s_{16}\Psi$
* FP32 canonical weights: $s_{32}\Psi$
* Optimizer states: $k\cdot s_{32}\Psi$
* Gradients (peak): ≈ $s_{16}\Psi$ before casting, then $s_{32}\Psi$ (short lived)

So peak model-related memory (ignoring activations) is roughly:

$$
M_{\text{base}} \approx (s_{16} + (1+k)s_{32})\Psi.
$$

Plugging $s_{16}=2$, $s_{32}=4$ and $k\approx 2$ yields a concrete feeling: per parameter ≈ $2 + 4 + 8 = 14$ bytes. For billion-parameter models this becomes terabytes.

**Data-parallel replication.** If you replicate the above across $N_d$ data-parallel devices, you multiply the model-related memory by $N_d$. Thus the urgency to shard.


## ZeRO

*[Figure: Memory layout across ZeRO stages: No ZeRO (replication), ZeRO-1, ZeRO-2, and ZeRO-3/FSDP — progressive elimination of redundancy along the data-parallel axis]*

ZeRO shards *along the data-parallel axis* to remove redundancy. Let $N_d$ be DP degree.

Define three boolean indicators whether an object is sharded: $S_p$ for parameters, $S_g$ for gradients, $S_o$ for optimizer state. If an object is sharded, its contribution to per-rank memory divides by $N_d$.

Per-rank model memory (excluding activations) is:

$$
\begin{aligned}
M = {} &s_{16}\Psi \cdot \bigl(1 - S_p + \tfrac{S_p}{N_d}\bigr)\\
&+ s_{32}\Psi \cdot \bigl(1 - S_o + \tfrac{S_o}{N_d}\bigr)\\
&+ s_{32}\Psi \cdot \bigl(1 - S_g + \tfrac{S_g}{N_d}\bigr)\cdot\alpha,
\end{aligned}
$$

where $\alpha$ encodes whether gradients are kept as FP16 then cast or kept in FP32 (use $\alpha=1$ for FP32 grad accumulation). We can simplify for common cases.

### ZeRO-1 (optimizer state sharded)

$S_o=1$, $S_g=0$, $S_p=0$.

Per-rank memory:

$$
M_{1} = s_{16}\Psi + s_{32}\Psi + \frac{s_{32}\Psi}{N_d}.
$$

Interpretation: parameters and gradients still replicated; only optimizer state is sharded.

### ZeRO-2 (optimizer state + gradients sharded)

$S_o=1$, $S_g=1$, $S_p=0$.

Per-rank memory:

$$
M_{2} = s_{16}\Psi + \frac{s_{32}\Psi}{N_d} + \frac{s_{32}\Psi}{N_d}
= s_{16}\Psi + \frac{2 s_{32}\Psi}{N_d}.
$$

Here gradient and optimizer state both scale down by $1/N_d$.

### ZeRO-3 (full sharding; parameters also sharded; a.k.a. FSDP)

$S_o=1$, $S_g=1$, $S_p=1$.

Per-rank memory:

$$
M_{3} = \frac{s_{16}\Psi}{N_d} + \frac{s_{32}\Psi}{N_d} + \frac{k\cdot s_{32}\Psi}{N_d}
= \frac{(s_{16} + (1+k)s_{32})\Psi}{N_d}.
$$

As $N_d$ grows, the model-related memory per rank can shrink arbitrarily (activations remain unsharded unless other techniques are applied).

**Note about activations.** Activation memory does **not** replicate across DP ranks — activations differ per micro-batch. Thus ZeRO cannot reduce activation memory; use activation checkpointing or sequence/batch strategies to reduce activation footprint.


## Communication primitives and costs

Three collectives matter:

* **All-reduce:** every rank gets the fully reduced tensor. Cost roughly $2\times$ size network traffic (reduce + broadcast) in classical implementations; efficient implementations reduce constants.
* **Reduce-scatter:** performs reduction and scatters shards so each rank receives one shard of the reduced result. It is cheaper than all-reduce when you only need shards.
* **All-gather:** every rank sends its shard and every rank receives the full concatenation.

ZeRO replaces an all-reduce on gradients (vanilla DP) with a reduce-scatter + local update + all-gather on parameters (ZeRO-1/2), or with continuous layerwise all-gathers during forward/backward (ZeRO-3).

**Communication complexity per step** (measured in parameter-sized data transferred) — denote $|\Psi|$ as the size:

* Vanilla DP: gradients all-reduce cost ≈ $2\Psi$.
* ZeRO-1/2: reduce-scatter gradients cost ≈ $\Psi$ (distributed), plus an all-gather of parameters cost ≈ $\Psi$; total ≈ $2\Psi$ but the pattern and overlap differ and memory pressure is substantially reduced.
* ZeRO-3: parameters are all-gathered layerwise — roughly $3\Psi$ of communication tax if done naively, but overlap/prefetching and grouping reduce wall-time overhead.

**Latency vs bandwidth trade.** Many small collectives incur latency; bulked transfers favor bandwidth. Engineering thus buckets parameters to balance per-call latency and per-byte throughput.


## Precise numerical stability mechanics: why high-precision copies are required

Consider one scalar parameter $\theta \sim 1.0$ and an update $\delta = 10^{-5}$. In floating point:

* FP16 spacing near 1.0 is $2^{-10}\approx 9.8\times 10^{-4}$ — updates of $10^{-5}$ vanish.
* FP32 spacing near 1.0 is $2^{-23}\approx 1.2\times 10^{-7}$ — updates of $10^{-5}$ are preserved.

Thus to preserve the iterative accumulation of small updates, optimizer accumulation (moment estimates, bias corrections) must be maintained in FP32. Storing only FP16 copies will catastrophically quantize the update loop.

**Adam example (exact):** Adam update for parameter $i$ at step $t$:

$$
\begin{aligned}
m_t &= \beta_1 m_{t-1} + (1-\beta_1) g_t\\
v_t &= \beta_2 v_{t-1} + (1-\beta_2) g_t^2\\
\hat{m}_t &= \frac{m_t}{1-\beta_1^t}, \quad \hat{v}_t = \frac{v_t}{1-\beta_2^t}\\
\theta_t &= \theta_{t-1} - \eta \frac{\hat{m}_t}{\sqrt{\hat{v}_t} + \varepsilon}
\end{aligned}
$$

Each of $m_t$, $v_t$, $\hat{m}_t$, $\hat{v}_t$ benefits from FP32 precision to avoid bias amplification and catastrophic cancellation; casting them to FP16 would destroy the algorithm’s internal fidelity.


## A Working Protocol for ZeRO-1

Below is the precise step performed on each DP rank for ZeRO-1: optimizer-state sharding while parameters remain replicated in FP16.

1. Keep $\theta^{(16)}$ (full, local) and $\theta^{(32)}_{\text{shard}}$, $m_{\text{shard}}$, $v_{\text{shard}}$ (sharded FP32 canonical pieces).
2. For a minibatch:

   * forward using $\theta^{(16)}$.
   * backward producing local $g^{(16)}$.
   * flatten and pad $g^{(16)}$ to common size; compute reduce-scatter → receive gradient shard $g_{\text{shard}}^{(\text{sum},16)}$.
   * cast $g_{\text{shard}}^{(\text{sum},32)} = \operatorname{cast}_{32}(g_{\text{shard}}^{(\text{sum},16)})$ and divide by $N_d$ if gradients are averaged.
   * update local optimizer state and $\theta^{(32)}_{\text{shard}}$ using Adam formulas above.
   * cast local updated $\theta^{(32)}_{\text{shard}}$ to FP16 → $\hat{\theta}^{(16)}_{\text{shard}}$.
   * all-gather $\hat{\theta}^{(16)}_{\text{shard}}$ → reconstruct full $\theta^{(16)}$ on each rank for next forward.
   * zero gradients / manage buffers.

This sequence preserves mathematically identical parameter updates to the naive single-device FP32 update, up to floating point rounding differences introduced by different reduction order — which are typically negligible if using stable reduction algorithms.


## Engineering optimizations

Some engineering levers that matter:

* **Bucketed communications.** Aggregate small tensors into buckets sized to saturate NIC bandwidth to amortize latency.
* **Non-blocking collectives + overlap.** Launch reduce-scatter as soon as a bucket’s gradients are ready (backward hooks). Launch parameter all-gathers as soon as a shard’s update is ready (optimizer step) and overlap with remaining optimizer computation.
* **Prefetching in ZeRO-3/FSDP.** While computing layer $n$'s forward, prefetch (all-gather) parameters for layer $n+1$.
* **Meta device construction.** Build architecture shapes on device=meta to avoid materializing full parameter tensors before sharding (saves memory on initialization).
* **Grad scaling (AMP).** Multiply loss by a scale $S$ to avoid FP16 overflow; unscale gradients before optimizer step and detect inf/nan to adjust $S$.
* **Offload.** When device RAM is insufficient, offload rarely used optimizer state shards to CPU or NVMe with asynchronous I/O, overlapping transfers with compute.
* **Checkpoint sharding.** Save sharded state dicts; avoid gathering full parameter sets to a single node for checkpoint writes.


## Practical recipes

A production checklist, from smallest to largest scale:

1. Use AMP (autocast + GradScaler). Prefer BF16 on hardware that supports it if you can eliminate GradScaler safely.
2. Use FSDP / ZeRO (library implementation) rather than writing manual sharding. Let the runtime handle hooks and bucketization.
3. Combine ZeRO-2 / ZeRO-3 with activation checkpointing and gradient accumulation when activations are the bottleneck.
4. Use per-layer prefetching and sensible FSDP unit sizes (don’t shard at too fine granularity).
5. Profile: measure collective sizes, time spent waiting on NCCL, and memory peaks; tune bucket sizes and prefetch windows.
6. Ensure deterministic reduction order only if you need bitwise reproducibility; otherwise prefer throughput-optimized reductions.


## Common failure modes

* **Loss explosion / NaNs.** Often caused by overflow in FP16 matmuls. Grad scaling prevents this: multiply loss by $S$, compute gradients, then divide by $S$ before updating.
* **Stalled training (no progress).** Often caused by updates being lost to quantization if you tried to update exclusively in FP16. The theory above shows why a high-precision FP32 canonical copy is required.
* **Excessive communication overhead.** Happens when bucket sizes are too small: latency dominates. The communication model above explains why aggregating transfers increases effective bandwidth.
* **Activation OOM even with ZeRO-3.** ZeRO reduces model-related memory, not activations; employ checkpointing and accumulation to reduce activation peaks.


## Closing remark

* **FP32 canonical copy = the ledger in the bank.** It is the canonical truth, carefully recorded.
* **FP16 compute copy = the working checkbook.** You do the arithmetic quickly here and then reconcile with the ledger.
* **ZeRO sharding = splitting the ledger’s pages across vaults.** Each vault keeps its pages and returns photocopies when needed.

---

## Weight-Tying: Gentle Read–Write Symmetry in Language Models

**Date:** 2025-02-09

**Description:** How a single embedding table serves as both reader and writer in language models, with forward and backward passes and the split of gradients.

**Slug:** `weight-tying`

# Weight-Tying: The Small, Gentle Read–Write Symmetry in Language Models

**TL;DR —** A language model at every step asks one simple question — *given the numerical representation of the context so far, what is the probability of each vocabulary token being next?* This writing unfolds that question cleanly: symbols first, forward & backward passes next, then the split of gradients that makes a single embedding table both reader and writer.


## Flow (how to read this note)

1. State the single desideratum that drives everything.
2. Fix notation and the primitive objects we will manipulate.
3. Walk forward: from tokens to probabilities.
4. Walk backward: show the two distinct gradient paths into the embedding matrix and why they differ in character.
5. Give a per-position worked derivative so nothing like magic.
6. Read the consequences: symmetry, sparsity vs. density, and computational cost.


## Prelude — the single desideratum

At each time step the model must compute a distribution over vocabulary tokens. Put plainly:

> Given the numeric representation of the context so far, compute $p(\text{next token} = v)$ for every $v\in\{0,\dots,V-1\}$.

Everything that follows is a careful unpacking of how we represent the context, how the model turns that representation into logits and probabilities, and how gradients flow back into the same parameters that produced the representation.


## Notation and primitives

We define the notation so the shapes and roles are obvious.

* $B$ — batch size (parallel independent sequences).
* $T$ — sequence length (tokens per sequence).
* $D$ — model hidden / embedding dimension.
* $V$ — vocabulary size.

Primitive tensors:

* $X_{\text{ids}}\in\{0,\dots,V-1\}^{B\times T}$: token indices after tokenization.
* $E\in\mathbb{R}^{V\times D}$: token embedding matrix; row $E_{v,:}$ is the vector for token $v$.
* $P\in\mathbb{R}^{T\times D}$: positional embeddings (or any positional encoding of length $T$).
* $X\in\mathbb{R}^{B\times T\times D}$: token vectors with position; for a sequence position $(b,t)$,
  $$
  X_{b,t,:} = E_{X_{\text{ids}_{b,t}},:} + P_{t,:}.
  $$
* $\mathcal{T}(\cdot)$: the transformer stack — a deterministic, differentiable function mapping $X\mapsto H$.
* $H=\mathcal{T}(X)\in\mathbb{R}^{B\times T\times D}$: final hidden states.
* Tied LM head: $W = E^\top\in\mathbb{R}^{D\times V}$. (Tying enforces the same space for read/write.)
* $b\in\mathbb{R}^V$: optional bias on logits.
* $\ell$: scalar loss (we use mean cross-entropy over batch and time).

These primitives suffice to write the forward and backward equations compactly and exactly.


## Forward pass

*[Figure: Forward pass pipeline: raw text → tokenizer → embeddings + position → transformer → logits (H E^T + b) → softmax → sample]*

1. **Embed + add position**
   $$
   X_{b,t,:} = E_{X_{\text{ids}_{b,t}},:} + P_{t,:},\qquad X\in\mathbb{R}^{B\times T\times D}.
   $$
   *Why:* we need a dense vector representation for each token and a way to indicate position.

2. **Transform**
   $$
   H = \mathcal{T}(X),\qquad H\in\mathbb{R}^{B\times T\times D}.
   $$
   *Why:* the transformer composes attention and MLP layers to convert per-position inputs into context-aware representations.

3. **Logits via tied head**
   $$
   Z = HE^\top + \mathbf{1}_{BT}b^\top,\qquad Z\in\mathbb{R}^{B\times T\times V}.
   $$
   Here $\mathbf{1}_{BT}$ indicates broadcasting the bias to every $(b,t)$ slice.

   *Why:* each hidden $h\in\mathbb{R}^D$ scores every vocabulary row by inner product with that row; tying uses the same rows that produced embeddings.

*[Figure: Projection matrix multiplication: hidden states H × E^T → logits Z (Z = H E^T + b)]*

4. **Softmax → probabilities**
   $$
   p_{b,t,j}=\frac{\exp(Z_{b,t,j})}{\sum_{k=1}^V\exp(Z_{b,t,k})}.
   $$

5. **Mean cross-entropy loss**
   For targets $Y\in\{1,\dots,V\}^{B\times T}$,
   $$
   \ell = -\frac{1}{BT}\sum_{b=1}^B\sum_{t=1}^T \log p_{b,t,Y_{b,t}}.
   $$

These are the only forward equations required; they arise directly from the desideratum and the chosen primitives.


## Backward pass — the two distinct contributions into $E$ (chain rule)

Because $E$ appears in two roles — **as a lookup for inputs** and **as the transpose used to compute logits** — the gradient $\frac{\partial \ell}{\partial E}$ decomposes into two additive pieces.

*[Figure: Gradient flow into embedding matrix E: input-side (sparse) and output-side (dense) contributions sum to ∂ℓ/∂E]*

### 1. Immediate quantity from softmax + CE (logit residuals)

Define the logit residual tensor
$$
\Delta_{b,t,j}\equiv\frac{\partial \ell}{\partial Z_{b,t,j}}
= \frac{1}{BT}\bigl(p_{b,t,j} - \mathbf{1}_{j=Y_{b,t}}\bigr).
$$
This $\Delta\in\mathbb{R}^{B\times T\times V}$ is the primitive starting point for gradients flowing into both the head (output side) and back into $H$.

### 2. Output-side (projection) contribution — dense outer products

From $Z_{b,t,:} = H_{b,t,:}E^\top + b$ we obtain the gradient on $E$ coming from the head:
$$
\Big(\frac{\partial \ell}{\partial E}\Big)^{\text{(out)}}
= \sum_{b=1}^B\sum_{t=1}^T \Delta_{b,t,:}^{\top}\otimes H_{b,t,:}.
$$
Concretely, for vocabulary row $v$,
$$
\Big(\frac{\partial \ell}{\partial E_{v,:}}\Big)^{\text{(out)}}
= \sum_{b,t} \Delta_{b,t,v} H_{b,t,:} \in\mathbb{R}^D.
$$
*Character:* dense — typically every $v$ receives some (small) contribution because the softmax probabilities are dense.

### 3. Input-side (lookup) contribution — sparse accumulation

Backpropagating through the transformer yields gradients to its inputs:
$$
G_{b,t,:}\equiv\frac{\partial \ell}{\partial X_{b,t,:}}\in\mathbb{R}^D.
$$
Since $X_{b,t,:}=E_{X_{\text{ids}_{b,t}},:}+P_{t,:}$, the corresponding row of $E$ for the token $v=X_{\text{ids}_{b,t}}$ receives:
$$
\Big(\frac{\partial \ell}{\partial E_{v,:}}\Big)^{\text{(in)}} \mathrel{+}= G_{b,t,:}.
$$
*Character:* sparse — only embedding rows for tokens present in the mini-batch are touched.

### 4. Total gradient on $E$

By linearity,
$$
\frac{\partial \ell}{\partial E}
= \Big(\frac{\partial \ell}{\partial E}\Big)^{\text{(out)}}
+
\Big(\frac{\partial \ell}{\partial E}\Big)^{\text{(in)}}.
$$
Pragmatically, frameworks accumulate both contributions into `E.grad` during a single backward pass.


## A per-position worked derivative (so there is no mystery)

Fix a single position $(b,t)$. Let $h=H_{b,t,:}\in\mathbb{R}^D$, $z=Z_{b,t,:}\in\mathbb{R}^V$, and $y=Y_{b,t}$ the correct index.

* $p_j=\dfrac{e^{z_j}}{\sum_k e^{z_k}}$.
* $\dfrac{\partial \ell_{b,t}}{\partial z_j}=p_j-\mathbf{1}_{j=y}$.
* Output-side update for $E_{v,:}$ from this position:
  $$
  \dfrac{\partial \ell_{b,t}}{\partial E_{v,:}}^{\text{(out,pos)}} = (p_v-\mathbf{1}_{v=y})h^\top.
  $$
* Gradient into $h$ from the head:
  $$
  \dfrac{\partial \ell_{b,t}}{\partial h} = \sum_{v=1}^V (p_v-\mathbf{1}_{v=y})E_{v,:}^\top = E^\top (p - e_y).
  $$

*[Figure: Outer product update per position: residuals Δ and hidden state h produce the output-side update to E]*

Summing these per-position contributions across $(b,t)$ recovers the tensor equations above. This shows how softmax residuals produce outer-product updates on $E$ and how they also feed back into the model via $h$.


## Computational Accounting

Consider $B=4$, $T=128$, $D=4096$, $V=32{,}000$.

* $BT = 4\times128 = 512$.
* $(BT)\times D = 512\times4096 = 2{,}097{,}152$.
* Multiply by $V$: $2{,}097{,}152\times 32{,}000 = (2{,}097{,}152\times32)\times1000 = 67{,}108{,}864\times1000 = 67{,}108{,}864{,}000$.

So roughly $6.71\times 10^{10}$ multiply–accumulate operations are required for that single forward (or backward) pass through the head for the batch — a salutary reminder that the projection to vocabulary is often the dominant cost when $V$ is large.


## Interpretation and Consequences

* **Read–write symmetry.** Tying $W=E^\top$ means the vector space used to *read* tokens (embedding lookup) is identical to the space used to *write* tokens (projection). This reduces parameter redundancy and aligns representation and generation semantics.
* **Two distinct learning channels.** An embedding row changes for two reasons: (i) its use as an input (sparse updates) and (ii) its role in predicting outputs (dense outer-product updates). Both matter, but they have very different computational and statistical character.
* **Sparsity vs. density.** Input-side updates touch only the rows present in the batch (sparse). Output-side updates touch all $V$ rows (dense) because softmax spreads probability mass over the vocabulary. This explains why the head can be a bottleneck in large-vocabulary models.
* **Practical design choices.** If $V$ is large, we can look towards techniques like: adaptive softmax, vocabulary culling, sampling-based losses, or token clustering, to reduce the dense cost while preserving predictive fidelity.


## Closing Remark

The model **reads** by looking up embedding rows and **writes** by taking inner products with those same rows; tying them makes the read and write vocabularies identical, and backpropagation simply sums the sparse read-derived corrections with the dense write-derived outer-product corrections into one embedding table.
