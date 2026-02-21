// generator/cpp.js
(function () {
  "use strict";
  console.log("cpp.js chargé ✅");

  window.generateCpp = function (gate = "AND") {
    gate = gate.toUpperCase();
    let expr =
      gate === "OR" ? "A || B" :
      gate === "XOR" ? "(A != B)" :
      "A && B";

    return `
#include <iostream>
using namespace std;

int main() {
  bool A, B;
  cout << "Entrer A (0 ou 1): ";
  cin >> A;
  cout << "Entrer B (0 ou 1): ";
  cin >> B;

  bool Y = ${expr};

  cout << "Sortie Y = " << Y << endl;
  return 0;
}
`.trim();
  };
})();
