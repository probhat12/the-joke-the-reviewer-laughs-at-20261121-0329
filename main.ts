import { mkdirSync, writeFileSync } from "node:fs";

const joke = "I asked my AI coding agent to fix a flaky test. It made the test deterministic: now it fails every time.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", `${joke}\n`, "utf8");
