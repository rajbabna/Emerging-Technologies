import { spawnSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const webRoot = join(scriptDir, "..");

const generate = spawnSync(
  process.execPath,
  [join(scriptDir, "generate-proposal.mjs")],
  { stdio: "inherit", cwd: webRoot },
);
if (generate.status !== 0) process.exit(generate.status ?? 1);

const nextBin = join(webRoot, "node_modules", "next", "dist", "bin", "next");
const build = spawnSync(process.execPath, [nextBin, "build"], {
  stdio: "inherit",
  cwd: webRoot,
  env: { ...process.env, STATIC_EXPORT: "1" },
});

process.exit(build.status ?? 1);
