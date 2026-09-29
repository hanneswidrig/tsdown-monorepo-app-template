import { execSync } from "node:child_process";

import { defineConfig } from "vite-plus";

export default defineConfig({
  pack: {
    entry: ["src/index.ts"],
    exports: { devExports: true },
    onSuccess: (config) => {
      if (!config.watch) return;
      execSync("node dist/index.mjs", { stdio: "inherit" });
    },
  },
});
