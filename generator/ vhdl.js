function generateVerilog(type) {
  if (type === "adder") {
    return `// 8-bit Adder - Synthesizable Verilog
module adder8 (
  input  [7:0] A,
  input  [7:0] B,
  output [8:0] SUM
);
  assign SUM = A + B;
endmodule
`;
  }

  if (type === "counter") {
    return `// 8-bit Counter - Verilog
module counter8 (
  input clk,
  input reset,
  output reg [7:0] count
);
  always @(posedge clk or posedge reset) begin
    if (reset)
      count <= 8'b0;
    else
      count <= count + 1;
  end
endmodule
`;
  }

  return `// Verilog template
module top (
  input clk,
  input reset
);
// Describe your logic here
endmodule
`;
}
