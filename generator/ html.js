// generator/html.js
(function () {
  "use strict";
  console.log("html.js chargé ✅");

  window.generateHTML = function (gate = "AND") {
    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Simulation ${gate}</title>
</head>
<body>
  <h1>Porte logique ${gate}</h1>
  <p>A = <input type="checkbox" id="A"></p>
  <p>B = <input type="checkbox" id="B"></p>
  <button onclick="calc()">Calculer</button>
  <p>Y = <span id="Y">0</span></p>

  <script>
    function calc() {
      const A = document.getElementById("A").checked;
      const B = document.getElementById("B").checked;
      let Y;
      switch ("${gate}") {
        case "OR": Y = A || B; break;
        case "XOR": Y = A !== B; break;
        default: Y = A && B;
      }
      document.getElementById("Y").textContent = Y ? 1 : 0;
    }
  </script>
</body>
</html>
`.trim();
  };
})();
