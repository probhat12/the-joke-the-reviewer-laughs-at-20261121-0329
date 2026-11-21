import { mkdirSync, writeFileSync } from "node:fs";

const joke = "I asked my AI coding agent to fix a flaky test. It made the test deterministic: it fails on every run.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", `${joke}\n`, "utf8");
