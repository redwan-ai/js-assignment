function sendNotification(email) {
    
    if (email.indexOf('@') === -1) {
      return "Invalid Email";
    }
   
    var parts = email.split('@');
    var username = parts[0];
    var domainName = parts[1];

    var message = username + " sent you an email from " + domainName;
    
    return message;
  }    