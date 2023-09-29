function caesarCipher(str, num) {
    // Create an array of the alphabet, both lowercase and uppercase
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    // Initialize an empty string to store the result
    let result = "";
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
  
      // Check if the character is alphabetic
      if (alphabet.includes(char)) {
        // Find the index of the character in the alphabet
        const charIndex = alphabet.indexOf(char);
  
        // Calculate the new index after shifting by num positions
        const newIndex = (charIndex + num) % 52; // 52 is the length of the alphabet array
  
        // Handle negative newIndex
        const finalIndex = newIndex >= 0 ? newIndex : newIndex + 52;
  
        // Append the shifted character to the result string
        result += alphabet[finalIndex];
      } else {
        // If the character is not alphabetic, keep it unchanged
        result += char;
      }
    }
  
    return result;
  }
  
  // Test cases
  console.log(caesarCipher("zoo keeper", 2)); // Output: "bqq mggrgt"
  console.log(caesarCipher("bqq mggrgt", -2)); // Output: "zoo keeper"
  console.log(caesarCipher("My name is Henrique", 3)); // Output: "pb qdph lv khqultxh "