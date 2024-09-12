function waitingTime(interviewTimes, serialNumber) {
    if (!Array.isArray(interviewTimes) || typeof serialNumber !== "number") {
      return "Invalid Input";
    }
  
    let totalTime = 0;
    for (let i = 0; i < interviewTimes.length; i++) {
      totalTime += interviewTimes[i];
    }
    const averageTime = Math.round(totalTime / interviewTimes.length);
  
    const peopleAhead = serialNumber - 1 - interviewTimes.length ;
  
    if (peopleAhead <= 0) {
      return 0;
    }
  
    return peopleAhead * averageTime;
  }
  console.log(waitingTime([3, 5, 7, 11, 6], 10));