import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const entryPath = join(outDir, "entry.txt");
// The program writes this one fixed sentence to entry.txt without changing a word of it.
const text = "The agenda arrived two minutes before start, with one item on it: a link to this meeting.";

try {
  mkdirSync(outDir, { recursive: true });
} catch (err) {
  console.error("could not create output dir from " + scriptDir + ":", err);
  process.exit(1);
}

try {
  writeFileSync(entryPath, text, "utf8");
} catch (err) {
  console.error("failed to write entry.txt from " + scriptDir + ":", err);
  process.exit(1);
}
