let userInput = document.querySelector(".input-field");
const button = document.querySelector(".btn-btn");
const errorValue = document.querySelector("p");

let place = document.getElementsByName("mail")[0].placeholder;
button.addEventListener("click", function () {
  if (!userInput.value) {
    console.log(userInput.value);
    userInput.style.border = "solid 0.1mm red";
    document.getElementsByName("mail")[0].placeholder =
      "you need to input your email";

    errorValue.style.color = "red";
    errorValue.innerHTML = "input your email to proceed";

    console.log(errorValue);
    var x = window.matchMedia("(max-width: 768px)");
    if (x.matches) {
      // If media query matches
      document.querySelector(".field").insertBefore(errorValue, button);
    }
  } else if (!userInput.value.includes("@gmail.com")) {
    userInput.value = "";

    userInput.style.border = "solid 0.1mm red";
    document.getElementsByName("mail")[0].placeholder = "Input a Valid email";

    errorValue.style.color = "red";
    errorValue.innerHTML = "example@gmail.com";
    // setTimeout(() => (errorValue.style.display = "none"), 3000);
    // document.querySelector(".field").insertBefore(errorValue, button);

    var x = window.matchMedia("(max-width: 768px)");
    if (x.matches) {
      // If media query matches
      document.querySelector(".field").insertBefore(errorValue, button);
    }
  } else {
    errorValue.innerHTML = "you have register SUCCESSFULLY!";
    errorValue.style.color = "#4f7df3";
    userInput.style.border = "solid 0.1mm  #4f7df3";
    setTimeout(() => (errorValue.style.display = "none"), 3000);
    userInput.value = "";
    document.getElementsByName("mail")[0].placeholder = "your email address...";
    var x = window.matchMedia("(max-width: 768px)");
    if (x.matches) {
      // If media query matches
      document.querySelector(".field").insertBefore(errorValue, button);
    }
  }
});
