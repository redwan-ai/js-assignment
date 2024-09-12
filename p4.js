function calculateFinalScore(input) {
    if (typeof input !== 'object' || input === null) {
      return "Invalid Input";
    }
    const { name, testScore, schoolGrade, isFarmerFamily } = input;
  
    if (typeof name !== 'string' ||
        typeof testScore !== 'number' || testScore < 0 || testScore > 50 ||
        typeof schoolGrade !== 'number' || schoolGrade < 0 || schoolGrade > 30 ||
        typeof isFarmerFamily !== 'boolean') {
      return "Invalid Input";
    }
  
    let finalScore = testScore + schoolGrade;
    if (isFarmerFamily) {
      finalScore += 20;
    }
  
    return finalScore >= 80;
  }
