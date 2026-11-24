import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I ran a diagnostic on my heart and it returned one error: missing you. Would you like to be my patch?";

if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
