function generate() {
  const prompt = document.getElementById("prompt").value;
  const logic = parsePrompt(prompt);

  if (logic.type === "adder") {
    const code = generateVerilogAdder(logic.bits);
    document.getElementById("editor").value = code;
  } else {
    alert("❌ Unknown request / Requête inconnue");
  }
}
