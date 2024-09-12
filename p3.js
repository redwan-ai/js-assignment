function checkDigitsInName(input) {
    if (typeof input!== "string") {
      return "Invalid Input";
    }

    for (let i = 0; i < input.length; i++) {

      if (input[i] >= '0' && input[i] <= '9') {
        return true;
      }
    }
  
    return false;
  }
  