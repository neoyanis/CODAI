function generateCpp(type) {
  if (type === "counter") {
    return `// Simple Counter - C++
#include <iostream>
using namespace std;

int main() {
  for (int i = 0; i < 10; i++) {
    cout << "Count: " << i << endl;
  }
  return 0;
}
`;
  }

  return `// C++ template
#include <iostream>
using namespace std;

int main() {
  // Your code here
  return 0;
}
`;
}
