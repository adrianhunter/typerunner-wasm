#include <unistd.h>
#include <iostream>
#include <memory>
#include <span>
#include <fmt/core.h>
#include "./TypeRunner/src/checker/vm2.h"
#include "./TypeRunner/src/core.h"
#include "./TypeRunner/src/parser2.h"
#include "./TypeRunner/src/checker/module2.h"
#include "./TypeRunner/src/checker/compiler.h"
using namespace tr;

extern int checkCode(const string &code)
{
    ZoneScoped;
    std::string file = "demo.ts";
    std::string fileName = "demo";
    auto bytecodePath = file + ".tsb";
    auto buffer = code;
    checker::Compiler compiler;
    Parser parser;
    auto result = parser.parseSourceFile(
        file, buffer, types::ScriptTarget::Latest, false, ScriptKind::TS, {});
    auto program = compiler.compileSourceFile(result);
    auto bin = program.build();
    // auto asd = result.get()->statements;
    auto module = make_shared<vm2::Module>(bin, fileName, code);
    vm2::run(module);
    module->printErrors();
    return 0;
}

int main(int argc, char *argv[])
{
    return 0;
}

#include <emscripten.h>
#include <emscripten/val.h>
#include <emscripten/bind.h>
using namespace emscripten;

EMSCRIPTEN_BINDINGS(wow)
{
    emscripten::function("checkCode", &checkCode);
};