// ==============================
// A) Součet kladných čísel
// ==============================

function sumPositive(arr) {
    if (!Array.isArray(arr)) return 0;
  
    return arr.reduce((sum, value) => {
      if (typeof value === "number" && value > 0) {
        return sum + value;
      }
      return sum;
    }, 0);
  }
  
  // ---------- Testy ----------
  const tests = [
    { input: [], expected: 0, description: "Prázdné pole" },
    { input: [-1, -5, -10], expected: 0, description: "Jen záporná čísla" },
    { input: [-2, 3, 4, -1], expected: 7, description: "Smíšená čísla" },
    { input: [1000000, 2000000], expected: 3000000, description: "Velká čísla" },
    {
      input: [1, 2, 3, 4, 5, -3, "a", null],
      expected: 15,
      description: "Delší pole + nečíselné hodnoty",
    },
  ];
  
  console.log("=== TESTY: součet kladných čísel ===");
  
  tests.forEach((test, index) => {
    const result = sumPositive(test.input);
    const status = result === test.expected ? "OK" : "FAIL";
  
    console.log(`Test ${index + 1}: ${test.description}`);
    console.log("Vstup:", test.input);
    console.log("Očekávaný výsledek:", test.expected);
    console.log("Skutečný výsledek:", result);
    console.log("Výsledek:", status);
    console.log("--------------------------");
  });
  
  // ==============================
  // B) Odstranění duplicit
  // ==============================
  
  // Varianta 1 – seznamový přístup
  function removeDuplicatesList(arr) {
    const result = [];
    for (const item of arr) {
      if (!result.includes(item)) {
        result.push(item);
      }
    }
    return result;
  }
  
  // Varianta 2 – Set
  function removeDuplicatesSet(arr) {
    return Array.from(new Set(arr));
  }
  
  // Generování testovacích dat
  function generateData(size) {
    const data = [];
    for (let i = 0; i < size; i++) {
      data.push("item" + (i % 100)); // záměrné duplicity
    }
    return data;
  }
  
  // ---------- Měření času ----------
  function measure(label, fn) {
    console.time(label);
    fn();
    console.timeEnd(label);
  }
  
  const smallData = generateData(1000);
  const bigData = generateData(50000);
  
  console.log("=== MĚŘENÍ ČASU ===");
  
  measure("List – 1 000", () => removeDuplicatesList(smallData));
  measure("Set  – 1 000", () => removeDuplicatesSet(smallData));
  
  measure("List – 50 000", () => removeDuplicatesList(bigData));
  measure("Set  – 50 000", () => removeDuplicatesSet(bigData));
  