let logIn = document.querySelector("#loginForm");

logIn.addEventListener("submit", (e) => {
  e.preventDefault();
  const loginData = {
    email: e.target[0].value,
    password: e.target[1].value,
  };

  getDataFromLocalStorage(loginData);
});

function getDataFromLocalStorage(data) {
  let localData = JSON.parse(localStorage.getItem("userData"));

  // Check if localData exists and has length
  if (!localData || localData.length === 0) {
    alert("No account on this email!");
    return;
  }

  // Loop to check if email and password match
  let isAuthenticated = false;
  for (let i = 0; i < localData.length; i++) {
    if (
      localData[i].email === data.email &&
      localData[i].password === data.password
    ) {
      isAuthenticated = true;
      break; // Exit the loop if user is found
    }
  }

  if (isAuthenticated) {
    alert("you're LoggedIn");
    setTimeout(() => {
      document.location.href = "./kanban.html";
    }, 2000);
  } else {
    alert("incorrect Email or Password!");
  }
}
