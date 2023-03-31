# typerunner-wasm

When building for wasm/emscripten. I get some of these errors:

magic_enum.hpp:450:24: error: integer value 128 is outside the valid range of values [0, 127] for this enumeration type [-Wenum-constexpr-conversion]
                return static_cast<E>(U{1} << static_cast<U>(static_cast<int>(i) + O));
                       ^
/Users/X/Documents/GitHub/typerunner-wasm/TypeRunner/libs/magic_enum/magic_enum.hpp:438:40: error: integer value 128 is outside the valid range of values [0, 127] for this enumeration type [-Wenum-constexpr-conversion]
            return n<E, static_cast<E>(V)>().size() != 0;
                                       ^
/Users/X/Documents/GitHub/typerunner-wasm/TypeRunner/libs/magic_enum/magic_enum.hpp:411:78: error: integer value 128 is outside the valid range of values [0, 127] for this enumeration type [-Wenum-constexpr-conversion]
            [[maybe_unused]] constexpr auto custom = customize::enum_name<E>(V);
                                                                             ^
/Users/X/Documents/GitHub/typerunner-wasm/TypeRunner/libs/magic_enum/magic_enum.hpp:450:24: error: integer value 256 is outside the valid range of values [0, 127] for this enumeration type [-Wenum-constexpr-conversion]
                return static_cast<E>(U{1} << static_cast<U>(static_cast<int>(i) + O));



Fixed that by adding "-Wno-enum-constexpr-conversion" into TypeRunner/CMakeLists.txt


fixed this error:

```shell In file included from /Users/X/Documents/GitHub/typerunner-wasm/TypeRunner/libs/tracy/TracyClient.cpp:14:
/Users/X/Documents/GitHub/typerunner-wasm/TypeRunner/libs/tracy/common/TracySystem.cpp:88:6: error: "Unsupported platform!"
    #error "Unsupported platform!"
     ^
1 error generated.
em++: error: '/Users/X/Documents/GitHub/typerunner-wasm/emsdk/upstream/bin/clang++ -target wasm32-unknown-emscripten -fignore-exceptions -fvisibility=default -mllvm -combiner-global-alias-analysis=false -mllvm -enable-emscripten-sjlj -mllvm -disable-lsr -DEMSCRIPTEN --sysroot=/Users/X/Documents/GitHub/typerunner-wasm/emsdk/upstream/emscripten/cache/sysroot -Xclang -iwithsysroot/include/fakesdl -Xclang -iwithsysroot/include/compat -DTRACY_ENABLE -I/usr/local/include -I/Users/X/Documents/GitHub/typerunner-wasm/TypeRunner/libs/fmt/include -isystem /Users/X/Documents/GitHub/typerunner-wasm/TypeRunner/libs/tracy -Wno-unused-variable -Wno-switch -Wno-trigraphs -Wno-enum-constexpr-conversion -g3 -std=gnu++20 -MD -MT libs/tracy/CMakeFiles/TracyClient.dir/TracyClient.cpp.o -MF CMakeFiles/TracyClient.dir/TracyClient.cpp.o.d -c /Users/X/Documents/GitHub/typerunner-wasm/TypeRunner/libs/tracy/TracyClient.cpp -o CMakeFiles/TracyClient.dir/TracyClient.cpp.o' failed (returned 1)
make[2]: *** [libs/tracy/CMakeFiles/TracyClient.dir/TracyClient.cpp.o] Error 1
make[1]: *** [libs/tracy/CMakeFiles/TracyClient.dir/all] Error 2
make: *** [all] Error 2
emmake: error: 'make' failed (returned 2)```


by removing uncommenting "add_subdirectory(libs/tracy)" in TypeRunner/CMakeLists.txt