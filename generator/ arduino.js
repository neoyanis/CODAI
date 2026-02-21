// generator/arduino.js
(function () {
  "use strict";
  console.log("arduino.js chargé ✅");

  window.generateArduino = function (gate = "AND") {
    gate = gate.toUpperCase();
    let expr =
      gate === "OR" ? "A || B" :
      gate === "XOR" ? "(A != B)" :
      "A && B";

    return `
const int pinA = 2;
const int pinB = 3;
const int pinY = 13;

void setup() {
  pinMode(pinA, INPUT);
  pinMode(pinB, INPUT);
  pinMode(pinY, OUTPUT);
}

void loop() {
  bool A = digitalRead(pinA);
  bool B = digitalRead(pinB);
  bool Y = ${expr};
  digitalWrite(pinY, Y);
}
`.trim();
  };
})();
