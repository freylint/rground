/**
 * Build automation for the project.
 */

const { shExec } = require("./utils");
const { BunBuildFlags } = require("./utils");

// Build backend dependencies
[
  "bun run " + BunBuildFlags + " pkg/frontend/build.js",
  "cp -r public/ dist/",
].forEach((command) => {
  shExec(command);
});

// Build backend as executable
shExec(
  "bun build " +
    BunBuildFlags +
    " --compile --outfile dist/rground pkg/backend/main.ts"
);
