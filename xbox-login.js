function handleSigninFormSubmit(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please enter your email and password.");
    return;
  }

  // Simulate successful authentication
  alert("Authentication successful!");

  // Redirect the user to the Xbox homepage or dashboard
  window.location.href = "https://www.xbox.com/en-US/";
}

const signinForm = document.getElementById("signin-form");
signinForm.addEventListener("submit", handleSigninFormSubmit);
