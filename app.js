// app.js — CODAI core
(function () {
  "use strict";

  console.log("CODAI app.js chargé ✅");

  function $(id) {
    return document.getElementById(id);
  }

  function generate() {
    const lang = $("language").value;
    const gate = $("gate").value;
    let code = "";

    try {
      switch (lang) {
        case "verilog":
          code = window.generateVerilog(gate);
          break;
        case "vhdl":
          code = window.generateVHDL(gate);
          break;
        case "arduino":
          code = window.generateArduino(gate);
          break;
        case "cpp":
          code = window.generateCpp(gate);
          break;
        case "html":
          code = window.generateHTML(gate);
          break;
        default:
          code = "// Langage non supporté";
      }
    } catch (e) {
      console.error(e);
      code = "❌ Erreur génération : " + e.message;
    }

    $("output").value = code;
  }

  function copyCode() {
    $("output").select();
    document.execCommand("copy");
    alert("Code copié ✅");
  }

  // Expose global
  window.CODAI = {
    generate,
    copyCode
  };
})();
