genrule(
    name = "gen_test",
    srcs = ["web_shim.cpp", "//main:squiggles_srcs"],
    outs = [
        "squiggles.js",
        "squiggles.wasm"
        # "a.out.js",
        # "a.out.wasm",
    ],
    cmd = [
        # "./tools/emsdk/upstream/emscripten/emcc $SRCS -s MODULARIZE=1 -s EXPORT_NAME=Squiggles -s WASM=1 -s EXTRA_EXPORTED_RUNTIME_METHODS='[\"cwrap\"]' -I main/include --std=gnu++17",
        "./tools/emsdk/upstream/emscripten/emcc $SRCS -s WASM=1 -s EXTRA_EXPORTED_RUNTIME_METHODS='[\"cwrap\"]' -I main/include --std=gnu++17 -o squiggles.js",
    ],
    deps = [
        # pulling in the squiggles source directly since we need to rebuild the
        # library with emcc rather than gcc to link properly
        "//main:squiggles_srcs", 
        "//main:squiggles_hdrs",
        "//tools:emcc_lib",
    ],
)
