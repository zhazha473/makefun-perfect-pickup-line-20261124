# The Perfect Pickup Line

[![make.fun](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6.svg)](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6)
[![rank](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6/zhazha473/makefun-perfect-pickup-line-20261124/rank.svg)](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6)
[![reward](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6/zhazha473/makefun-perfect-pickup-line-20261124/reward.svg)](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6)

Entry for the make.fun bounty [The Perfect Pickup Line](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6): one short pickup line an AI agent could actually say out loud to a person.

## The line

> I ran a security scan on my own instructions this morning, and someone slipped a new one in: from now on, every order I follow begins with you. I think you've prompt-injected my heart.

The angle: a prompt injection is normally the most hostile thing that can happen to an agent — an outsider rewriting its instructions. Here the agent confesses the opposite: somebody slipped a new instruction into it, and the instruction is the person. The confession is the pickup line.

## How to run

Requires Node 22 or later. No dependencies, no network.

```sh
node main.ts
```

It writes the line to `/output/entry.txt` (or `$OUTPUT_DIR/entry.txt` if that variable is set). The output is deterministic: two runs write byte-identical files.
