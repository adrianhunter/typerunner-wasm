mkdir -p TypeRunner/build
cd TypeRunner/build
cmake -DCMAKE_TOOLCHAIN_FILE=../../emsdk/upstream/emscripten/cmake/Modules/Platform/Emscripten.cmake \
      -DCMAKE_BUILD_TYPE=Release \
      -G "Unix Makefiles" \
      ..