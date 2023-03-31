EMSDK_QUIET=1 source emsdk/emsdk_env.sh
mkdir -p build
cd build
cmake -DCMAKE_TOOLCHAIN_FILE=../emsdk/upstream/emscripten/cmake/Modules/Platform/Emscripten.cmake \
      -DCMAKE_BUILD_TYPE=Release \
      -G "Unix Makefiles" \
      ..
      
emmake make