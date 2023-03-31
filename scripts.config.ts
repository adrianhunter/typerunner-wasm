import { DenonConfig } from "https://deno.land/x/denon@2.5.0/mod.ts";

const config: DenonConfig = {
  scripts: {
    build: {
      cmd: "deno run -A build.ts",
    },
    dev: {
      cmd: "deno run -A build.ts && deno run -A server.ts",
    },
    serve: {
      cmd: "deno run -A server.ts",
    },
  },
  watch: true,
  watcher: {
    skip: ["./TypeRunner/build", "./build", "./public", "emsdk"],
  },
};

export default config;
