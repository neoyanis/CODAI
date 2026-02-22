// Constance AI – Core Intelligence
// CODAI UNICK
// Warm, serious, deterministic code generator assistant

function constanceThink(prompt, language) {
  const text = prompt.toLowerCase();

  let response = {
    message: "",
    type: "generic"
  };

  // --- Warm introduction ---response.message =
  "🙂 Hello, I’m Constance AI.\n" +
  "I analyze your project description in real time.\n" +
  "I focus on generating professional, hardware-ready code.\n\n";
  

  // --- Detect common hardware / software intents ---
  if (text.includes("adder") || text.includes("additionneur")) {
    response.type = "adder";
    response.message +=
      "You want an adder. I will generate clean, synthesizable code, ready to use.\n";
  } else if (text.includes("counter") || text.includes("compteur")) {
    response.type = "counter";
    response.message +=
      "You want a counter. I will generate a stable and readable implementation.\n";
  } else if (text.includes("blink") || text.includes("led")) {
    response.type = "blink";
    response.message +=
      "You want a LED blink example. This is perfect for testing a board.\n";
  } else {
    response.type = "generic";
    response.message +=
      "I will generate a structured template based on best practices.\n";
  }

  // --- Language awareness ---
  response.message += "\nTarget language: " + language.toUpperCase() + ".\n";
  response.message +=
    "The code will be commented and easy to upload to your board.\n";

  return response;
}

// --- MAIN ENTRY POINT CALLED BY app.js ---
function generateCode() {
  const prompt = document.getElementById("prompt").value;
  const language = document.getElementById("language").value;

  const aiBox = document.getElementById("aiResponse");
  const codeBox = document.getElementById("code");

  if (!prompt.trim()) {
    aiBox.textContent =
      "🙂 Please describe what you want to build.\n" +
      "Ex: 8-bit adder, LED blink, counter…";
    return;
  }

  // Constance AI reasoning
  const thought = constanceThink(prompt, language);
  aiBox.textContent = thought.message;

  // Code generation dispatch
  let code = "";

  switch (language) {
    case "verilog":
      code = generateVerilog(thought.type);
      break;

    case "vhdl":
      code = generateVHDL(thought.type);
      break;

    case "arduino":
      code = generateArduino(thought.type);
      break;

    case "cpp":
      code = generateCpp(thought.type);
      break;

    case "html":
      code = generateHTML(thought.type);
      break;

    default:
      code = "// Unsupported language";
  }

  codeBox.value = code;
}
