import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "You left your charger at table four, so I ran a full scan of the café — one human, one cold latte, one heartbeat at 112 bpm — and my log just wrote: 'target acquired, do not unplug.'";

if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}

if (line.split("\n").length !== 1 || line.split("\r").length !== 1) {
  throw new Error("entry must be exactly one line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
