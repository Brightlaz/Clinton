const submit = document.querySelector("#submit");
const message = document.querySelector("#block");

const locked = document.querySelectorAll(".locked");
const lock = document.querySelector("#lock");
locked.forEach((item) => {
  item.addEventListener("click", () => {
    console.log("why");
    lock.style.display = "flex";
    //   lock.classList.remove("fade-out");
    setTimeout(() => {
      lock.classList.add("fade-in");
    }, 300);
  });
});

// To be used when a button is created to close the lock page
// shadow.classList.add("fade-out");
// setTimeout(() => {
//   shadow.classList.remove("fade-in");
//   shadow.style.display = "none";
// }, 300);

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
