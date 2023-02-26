const submit = document.querySelector("#submit");
const message = document.querySelector("#block");

const locked = document.querySelectorAll(".locked");
const lock = document.querySelector("#lock");
const backButton = document.querySelector("#back");
locked.forEach((item) => {
  item.addEventListener("click", () => {
    lock.style.display = "flex";
    lock.classList.remove("fade-out");
    setTimeout(() => {
      lock.classList.add("fade-in");
    }, 300);
  });
});

backButton.addEventListener("click", () => {
  lock.classList.add("fade-out");
  setTimeout(() => {
    lock.classList.remove("fade-in");
    lock.style.display = "none";
  }, 300);
});

const checkPassword = () => {
  let password = document.getElementById("password").value;

  if (password === "") {
    message.textContent = "Please input password.";
  } else if (password !== "clinton wan whine them people") {
    message.textContent = "Sorry, wrong password.";
  } else {
    message.textContent = "Success! Password correct.";
  }
};

submit.addEventListener("click", checkPassword);
