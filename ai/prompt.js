function parsePrompt(text) {
  text = text.toLowerCase();

  if (text.includes("adder") || text.includes("additionneur")) {
    return {
      type: "adder",
      bits: text.includes("8") ? 8 : 1
    };
  }

  return { type: "unknown" };
}
