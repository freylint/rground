await Bun.build({
  root: "pkg/backend",
  entrypoints: ["pkg/backend/main.ts"],
  outdir: "dist/",
});
