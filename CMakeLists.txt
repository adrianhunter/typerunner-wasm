cmake_minimum_required(VERSION 3.5)
set(CMAKE_CXX_STANDARD 20)

project(typescript)

# -sWASMFS
# sNO_DISABLE_EXCEPTION_CATCHING
set(CMAKE_CXX_FLAGS "-Wno-unused-command-line-argument -Wno-unused-variable -Wno-enum-constexpr-conversion -Wno-switch -Wno-trigraphs")
set(CMAKE_EXECUTABLE_SUFFIX ".mjs")

# set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -sMAIN_MODULE=2 -O3 -sSTANDALONE_WASM -sWASM_BIGINT -sEXPORTED_FUNCTIONS=_malloc,_free -sEXPORTED_RUNTIME_METHODS=ccall,cwrap,allocateUTF8,UTF8ToString")
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -O1 --minify=0 -sFORCE_FILESYSTEM=1 -sWASM_BIGINT -sEXPORTED_FUNCTIONS=_malloc,_free -sEXPORTED_RUNTIME_METHODS=FS,ccall,cwrap,allocateUTF8,UTF8ToString -lembind")

include_directories(TypeRunner/libs/magic_enum)
include_directories(TypeRunner/libs/tracy)
include_directories(TypeRunner/libs/fmt/include)
add_subdirectory(TypeRunner/libs/fmt)
add_subdirectory(TypeRunner/src)
add_executable(typescript_main main_wasm.cpp)
target_link_libraries(typescript_main typescript fmt)
