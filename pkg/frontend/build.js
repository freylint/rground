await Bun.build({
  root: "pkg/frontend",
  entrypoints: ["pkg/frontend/index.tsx"],
  outdir: "dist/frontend",
});
