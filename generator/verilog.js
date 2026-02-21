// generator/verilog.js
(function () {
  "use strict";
  console.log("verilog.js chargé ✅");

  window.generateVerilog = function (gate = "AND") {
    gate = gate.toUpperCase();
    let op = gate === "OR" ? "|" : gate === "XOR" ? "^" : "&";

    return `
module logic_gate (
  input wire A,
  input wire B,
  output wire Y
);

assign Y = A ${op} B;

endmodule
`.trim();
  };
})();
