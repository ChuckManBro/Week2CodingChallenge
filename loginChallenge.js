var loggedIn = false;
let failedAttempts = 0;
let lockedOut = false;

while (!loggedIn && !lockedOut) {
  var username = prompt("Username:");
  var password = prompt("Password:");
  if (username == "chuck123" && password == "1234") {
    loggedIn = true;
    console.log("User successfully logged in");
    alert("Welcome back, " + username);
  } else if (failedAttempts < 2) {
    failedAttempts++;
    alert("Inaccurate credentials!");
  } else {
    lockedOut = true;
    console.log("User locked out");
    alert("Inaccurate credentials. You have been locked out.");
  }
}
