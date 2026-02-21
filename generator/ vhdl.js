// generator/vhdl.js
(function () {
  "use strict";
  console.log("vhdl.js chargé ✅");

  window.generateVHDL = function (gate = "AND") {
    gate = gate.toUpperCase();
    let op = gate === "OR" ? "or" : gate === "XOR" ? "xor" : "and";

    return `
library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity logic_gate is
  Port (
    A : in STD_LOGIC;
    B : in STD_LOGIC;
    Y : out STD_LOGIC
  );
end logic_gate;

architecture Behavioral of logic_gate is
begin
  Y <= A ${op} B;
end Behavioral;
`.trim();
  };
})();
