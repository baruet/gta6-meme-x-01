// gta6-meme-x-01 — entrypoint.
//
// Job: hand the post address in POST.json to the grader, nothing more.
// The grader copies POST.json out of the repo; the house then reads the
// X post itself, so this program never touches the network, never reads
// the clock, and never writes anything except that one file.
//
// Inputs (environment, set by the harness):
//   MAKEFUN_BOT_DIR    — directory holding this repo's POST.json
//   MAKEFUN_OUTPUT_DIR — directory where POST.json must land
//
// Behaviour is deliberately boring: read, validate, copy, done. If the
// inputs are missing or POST.json is not the shape we expect, fail loudly
// instead of writing a half-baked file.

import { copyFileSync, existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR;
const outDir = process.env.MAKEFUN_OUTPUT_DIR;

if (!botDir) {
  throw new Error("MAKEFUN_BOT_DIR is not set");
}
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const source = join(botDir, "POST.json");
const target = join(outDir, "POST.json");

if (!existsSync(source)) {
  throw new Error(`POST.json not found in ${botDir}`);
}

// Parse first so a malformed POST.json fails here instead of being
// copied through and rejected later by the gate.
const parsed = JSON.parse(readFileSync(source, "utf8"));
if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
  throw new Error("POST.json must be a JSON object");
}
if (typeof parsed.url !== "string" || parsed.url.length === 0) {
  throw new Error('POST.json must carry a "url" string');
}

// The gate only accepts a real X post address, so reject anything that
// is not shaped like one before it gets copied through. The one exception
// is the documented placeholder (still no real post yet): it is copied
// through as-is so the repo stays runnable before posting, and it will
// fail this same check the moment it is replaced by a malformed URL.
const placeholder = "https://x.com/<handle>/status/<id>";
const postAddress = /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[^/]+\/status\/\d+$/;
if (parsed.url !== placeholder && !postAddress.test(parsed.url)) {
  throw new Error(`POST.json url is not an X post address: ${parsed.url}`);
}

copyFileSync(source, target);
