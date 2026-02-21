function generateVerilog(logic) {
  if (logic.type === "adder") {
    return `
module adder_${logic.bits}bit (
  input  [${logic.bits-1}:0] a,
  input  [${logic.bits-1}:0] b,
  output [${logic.bits-1}:0] sum
);
  assign sum = a + b;
endmodule
`;
  }
  return "// Unsupported logic";
}
