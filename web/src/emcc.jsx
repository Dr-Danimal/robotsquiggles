import React, { useEffect } from "react";
import Squiggles from "squiggles_wasm";
// import makeFactorial from "./factorial";

export const Emcc = () => {
  // makeFactorial().then((instance) => {
  //   // What is with the weird exports._Z4facti function?
  //   // This is how the function name is encoded by the C++ to wasm compiler
  //   const factorial = instance.exports._Z4facti;

  //   console.log(factorial(1)); // 1
  //   console.log(factorial(2)); // 2
  //   console.log(factorial(3)); // 6
  // });

  const squiggles = Squiggles();
  console.log(squiggles);
  // useEffect(() => {
  //   const loadWasm = async () => {
  //     try {
  //       const wasm = await import("./factorial");
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   };
  //   loadWasm();
  // });
  return <></>;
};
