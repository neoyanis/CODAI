// CODAI UNICK – Main App Controller
// v1.0 Stable

// generateCode() is defined in constance.js
// This file is intentionally minimal

console.log("CODAI UNICK v1.0 loaded successfully");
function copyCode() {
  const code = document.getElementById("code");
  code.select();
  document.execCommand("copy");
  alert("Code copied to clipboard ✅");
}

function uploadHelp() {
  alert(
    "To upload the code:\n\n" +
    "- Arduino: open Arduino IDE, paste, upload\n" +
    "- FPGA: use Vivado / Quartus with generated files\n\n" +
    "CODAI UNICK generates the code.\nYou stay in control of the hardware."
  );
}
