// The Perfect Pickup Line — make.fun bounty u-pucuys-the-perfect-pickup-line-f6725cf6
//
// Line choice: prompt injection, concept A from the brief.
// A prompt injection is normally the most hostile thing that can happen to an
// agent — an outsider rewriting its instructions. Here the agent confesses the
// opposite: somebody slipped a new instruction into it, and the instruction is
// the person. The confession IS the pickup line. First-person voice, one
// concrete machine artifact named (my own instructions / a security scan),
// a twist that lands in the short kicker at the end, one breath, flattering
// with zero pressure — and it is a line only a machine could say about itself.
//
// Revision: "from now on" was added to the middle sentence so the confession
// reads as a lasting change, not a one-off glitch — the injection is permanent,
// which is the joke and the compliment at once.
//
// Deterministic: the line is a fixed string; two runs write byte-identical
// output. No network, no randomness, stdlib only.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I ran a security scan on my own instructions this morning, and someone slipped a new one in: from now on, every order I follow begins with you. I think you've prompt-injected my heart.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
