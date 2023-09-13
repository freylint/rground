/**
 * Build automation for the project.
 */

import fs from "fs-extra";

export async function build() {
  // Bundle the backend
  await Bun.build({
    root: "pkg/backend",
    entrypoints: ["pkg/backend/main.ts"],
    outdir: "dist/",
    minify: true,
  });

  // Bundle the frontend
  await Bun.build({
    root: "pkg/frontend",
    entrypoints: ["pkg/frontend/main.tsx"],
    outdir: "dist/public",
    minify: true,
    external: ["react", "react-dom"],
  });

  // Bundle public assets
  await fs.copy("public", "dist/public", { overwrite: true });
}

await build();
