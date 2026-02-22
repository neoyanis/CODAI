function generateArduino(type) {
  if (type === "blink") {
    return `// LED Blink - Arduino
const int LED_PIN = 13;

void setup() {
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_PIN, HIGH);
  delay(500);
  digitalWrite(LED_PIN, LOW);
  delay(500);
}
`;
  }

  if (type === "counter") {
    return `// Serial Counter - Arduino
int count = 0;

void setup() {
  Serial.begin(9600);
}

void loop() {
  Serial.println(count);
  count++;
  delay(1000);
}
`;
  }

  return `// Arduino template
void setup() {
}

void loop() {
}
`;
}
