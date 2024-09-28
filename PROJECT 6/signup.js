let signUp = document.querySelector("#signupForm");
let eye = document.querySelector(".input-box span");
let userData = [];
let password = document.querySelector("#userPassword");

eye.addEventListener("click", function () {
  if (password.type === "password") {
    password.type = "text";
    eye.classList.add("fa-eye-slash");
    eye.classList.remove("fa-eye");
  } else {
    password.type = "password";
    eye.classList.add("fa-eye");
    eye.classList.remove("fa-eye-slash");
  }
});

signUp.addEventListener("submit", (e) => {
  e.preventDefault();
  const collectData = {
    username: e.target[0].value,
    email: e.target[1].value,
    password: e.target[2].value,
  };
  if (collectData) {
    userData.push(collectData);
    saveDataToLocalStorage(userData, e.target[3]);
  }
  e.target[0].value = "";
  e.target[1].value = "";
  e.target[2].value = "";
});

function saveDataToLocalStorage(data, button) {
  let getData = JSON.parse(localStorage.getItem("userData")) || [];  // yeh ik array h 

  let isDuplicate = getData.some(function(userExist) {
    return data.some(function(newUser) {
      return userExist.email === newUser.email;
    });
  });

  if (isDuplicate) {
    alert("already have an account!");
    return;
  }

  let updateData = getData.concat(data);

  localStorage.setItem("userData", JSON.stringify(updateData));

  button.textContent = "LOADING....";
  button.disabled = true;

  setTimeout(() => {
    button.textContent = "SIGNUP";
    button.disabled = false;
    document.location.href = "./kanban.html";
  }, 2000);
}




  // let isDuplicate = getData.some((userExist) => {
  //   return data.some((newUser) => userExist.email === newUser.email);
  // });