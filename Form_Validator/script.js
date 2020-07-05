const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

//Functions
const showErr = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
};

const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

const checkEmail = (input) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(input.value.trim())) {
    showErr(input, `${input.id.toUpperCase()} is not valid email`);
  } else {
    showSuccess(input);
  }
};

const checkRequired = (inputArr) => {
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      showErr(input, `${input.id.toUpperCase()} is required`);
    } else {
      showSuccess(input);
    }
  });
};

const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showErr(input, `${input.id.toUpperCase()} should be more than ${min} characters`);
  } else if (input.value.length > max) {
    showErr(input, `${input.id.toUpperCase()} should be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
};

const checkPasswords = (input1, input2) => {
  if (input2.value === "" || input1.value.toLowerCase() !== input2.value.toLowerCase()) {
    showErr(input2, "Passowrds do not match. Check Again");
  } else {
    showSuccess(input2);
  }
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  //
  checkRequired([username, email, password, confirmPassword]);
  checkLength(username, 3, 15);
  checkLength(password, 8, 30);
  checkEmail(email);
  checkPasswords(password, confirmPassword);
});
