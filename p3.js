function checkDigitsInName(input) {
    // Check if the input is a string
    if (typeof input !== 'string') {
      return "Invalid Input";
    }
  
    // Iterate over each character in the string
    for (let i = 0; i < input.length; i++) {
      // Check if the character is a digit
      if (input[i] >= '0' && input[i] <= '9') {
        return true;
      }
    }
  
    // Return false if no digit is found
    return false;
  }
  
  // Example usage
  console.log(checkDigitsInName('Raj123'));    // Output: true
  console.log(checkDigitsInName('n9ayeem'));   // Output: true
  console.log(checkDigitsInName('e1mu3'));     // Output: true
  console.log(checkDigitsInName('Suman'));     // Output: false
  console.log(checkDigitsInName('Name2024'));  // Output: true
  console.log(checkDigitsInName('!@#'));       // Output: false
  console.log(checkDigitsInName(["Raj"]));     // Output: Invalid Input
  