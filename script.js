const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// TOGGLE SIDE NAV
document.getElementById("menu").addEventListener("click", () => {
  const sideNav = document.getElementById("sidenav");
  sideNav.classList[0]
    ? (sideNav.className = "")
    : (sideNav.className = "show-sidenav");
});

// VALIDATION
const form = document.getElementById("form");
const _name = document.getElementById("name");
const _email = document.getElementById("email");
const _message = document.getElementById("message");

const showSucces = (input) =>
  (input.parentElement.className = "form-control success");

const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
};

const checkEmail = (input) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  re.test(input.value.trim())
    ? showSucces(input)
    : showError(input, "Invalid email address.");
};

const checkRequired = (inputArr) => {
  inputArr.forEach(function (input) {
    !input.value.trim()
      ? showError(input, "This field is required")
      : showSucces(input);
  });
};

//Event Listeners
_name.addEventListener("change", () => checkRequired([_name]));
_email.addEventListener("change", () => checkEmail(_email));
_message.addEventListener("change", () => checkRequired([_message]));

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkRequired([_name, _message]);
  checkEmail(email);
});
