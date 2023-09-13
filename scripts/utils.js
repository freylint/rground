const { exec } = require("child_process");

/**
 * Executes a given command on the host shell.
 * @param {Command to run} command
 */
export function shExec(command) {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }

    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
}

/**
 * Common flags to pass to the bun compiler.
 */
export const BunBuildFlags = "--minify";
