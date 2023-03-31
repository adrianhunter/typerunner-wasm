import $ from "https://deno.land/x/dax@0.28.0/mod.ts";

import * as fs from "https://deno.land/std@0.182.0/fs/exists.ts";

if (!fs.existsSync(new URL("./TypeRunner", import.meta.url))) {
  await $`git clone https://github.com/marcj/TypeRunner`;
  await $`cd TypeRunner && git submodule update --init --recursive`;
  await Deno.copyFile(
    new URL("./CMakeListsTS.txt", import.meta.url),
    new URL("./TypeRunner/src/CMakeLists.txt", import.meta.url)
  );
}

if (!fs.existsSync(new URL("./emsdk", import.meta.url))) {
  await $`bash setup_emsdk.sh`;
}

try {
  await Deno.mkdir(new URL("TypeRunner/build", import.meta.url));
  //   await $`bash setup_build.sh`;
} catch (_e) {
  // console.error(_e);
  //
}

try {
  await Deno.mkdir(new URL("build", import.meta.url));
  //   await $`bash setup_build.sh`;
} catch (_e) {
  // console.error(_e);
  //
} finally {
  await $`bash build.sh`;

  // await $`bash source emsdk/emsdk_env.sh`.exportEnv();
  // await $`which emmake`;
  // await $`echo 'DONE!!'`.;

  //   await $`mkdir -p build`;
  //   await $`cd build && cmake -DCMAKE_TOOLCHAIN_FILE=../emsdk/upstream/emscripten/cmake/Modules/Platform/Emscripten.cmake \
  // -DCMAKE_BUILD_TYPE=Release \
  // -G "Unix Makefiles" \
  // ..`;
  //   await $`cd build && emmake make`;
}

// import { CommandBuilder } from "https://deno.land/x/dax@0.28.0/mod.ts";

// const commandBuilder = new CommandBuilder()
//   .cwd("./subDir")
//   .stdout("inheritPiped") // output to stdout and pipe to a buffer
//   .noThrow();

// const cwd = Deno.cwd();

// const buildDir = `${cwd}/build/`;

// // await $`wasm2wat ${buildDir}bench.wasm -o ${buildDir}bench.wat`;
// await $`wasm2wat ${buildDir}typescript_main.wasm -o ${buildDir}typescript_main.wat`;

// await $`cp build/typescript_main.mjs ./public/`;
// await $`cp build/typescript_main.wasm ./public/`;

// if (!fs.existsSync(new URL("./TypeRunner/build", import.meta.url))) {
//   await $`bash setup_build.sh`;
// }
// const cool = await $`sh emsdk/emsdk_env.sh`.exportEnv();

// console.log("coolcoolcool", cool);
// await $`which emcc`;

// await $`bash build.sh`;
// await $`bash emsdk/emsdk_env.sh && emmake make -C TypeRunner/build`.exportEnv();

// const cwd = Deno.cwd();
// const args = `emmake make -C ${cwd}/TypeRunner/build`.split(" ");
// await $`emmake ${args}`;
