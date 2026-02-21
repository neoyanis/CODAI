
function generate() {
  console.log("generate called");

  const promptText = document.getElementById("prompt").value;
  const logic = parsePrompt(promptText);

  let code = "";

  switch (logic.language) {
    case "verilog":
      code = generateVerilog(logic);
      break;

    case "vhdl":
      code = generateVHDL(logic);
      break;

    case "arduino":
      code = generateArduino(logic);
      break;

    case "cpp":
      code = generateCpp(logic);
      break;

    default:
      alert("❌ Language not supported");
      return;
  }

  document.getElementById("editor").value = code;

  // 🔥 SIMULATION AUTO
  runSimulation(logic, code);
}
