let signUpButton = document.getElementById("sign-up-button");
let signUpHolder = document.querySelector(".sign-up-holder");

let signIn = document.getElementById("sign-in");
let signUp = document.getElementById("sign-up");

let holderH1 = document.getElementById("holder-h1");
let holderH3 = document.getElementById("holder-h3");

let mobileSignUp = document.getElementById("mobile-sign-up");
let mobileSignIn = document.getElementById("mobile-sign-in");

signUpButton.addEventListener("click", function () {
  if (
    signUpHolder.classList.contains("unswitched") ||
    !signUpHolder.classList.contains("switched")
  ) {
    signUpHolder.classList.remove("unswitched");
    signUpHolder.classList.add("switched");

    signUp.classList.remove("hidden");
    signIn.classList.add("hidden");

    holderH1.innerHTML = "Already Have An Account?";
    holderH3.innerHTML =
      "Sign-in To Continue Your Important Activities On Our Website!";
    signUpButton.innerHTML = "Sign-In";
  } else if (signUpHolder.classList.contains("switched")) {
    signUpHolder.classList.remove("switched");
    signUpHolder.classList.add("unswitched");

    signIn.classList.remove("hidden");
    signUp.classList.add("hidden");

    holderH1.innerHTML = "Welcome To Our Site!";
    holderH3.innerHTML =
      "If you are new here and don't know where to start, just sign up to visit our page!";
    signUpButton.innerHTML = "Sign-Up";
  }
});

mobileSignUp.addEventListener("click", function () {
  signIn.style.display = "none";
  signUp.style.display = "flex";
  signUp.classList.remove("hidden");
  signIn.classList.add("hidden");
});

mobileSignIn.addEventListener("click", function () {
  signUp.style.display = "none";
  signIn.style.display = "flex";
  signIn.classList.remove("hidden");
  signUp.classList.add("hidden");
});
