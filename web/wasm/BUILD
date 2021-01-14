genrule(
    name = "gen_test",
    srcs = ["web_shim.cpp", "//main:squiggles_srcs"],
    outs = [
        "squiggles.wasm",
        "squiggles.js",
    ],
    cmd = [
        "./tools/emsdk/upstream/emscripten/emcc $SRCS -s WASM=1 -s MODULARIZE -s EXTRA_EXPORTED_RUNTIME_METHODS='[\"ccall\", \"cwrap\"]' -I main/include --std=gnu++17 -o squiggles.js",
    ],
    deps = [
        # pulling in the squiggles source directly since we need to rebuild the
        # library with emcc rather than gcc to link properly
        "//main:squiggles_srcs", 
        "//main:squiggles_hdrs",
        "//tools:emcc_lib",
    ],
)
