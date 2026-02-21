
function parsePrompt(text) {
  text = text.toLowerCase();

  const logic = {
    type: "unknown",
    bits: 1,
    language: "verilog"
  };

  if (text.includes("adder") || text.includes("additionneur")) {
    logic.type = "adder";
    logic.bits = text.includes("8") ? 8 : 1;
  }

  if (text.includes("vhdl")) logic.language = "vhdl";
  else if (text.includes("arduino")) logic.language = "arduino";
  else if (text.includes("c++") || text.includes("cpp")) logic.language = "cpp";
  else logic.language = "verilog";

  return logic;
}
