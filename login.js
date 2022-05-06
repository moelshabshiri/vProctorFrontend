let input = document.getElementById("submit");
let loading = false;
document.getElementById("loader").style.display = "none";
document.getElementById("submit").style.display = "block";

let button = input.addEventListener("click", (e) => {
  console.log("here");
  let form = {
    email: document.querySelector("#userID"),
    password: document.querySelector("#password"),
    submit: document.querySelector("#submit"),
  };
  var usID = document.getElementById("userID").value;
  console.log(document.getElementById("userID").value);
  console.log(form);
  localStorage.setItem("val", usID);

  e.preventDefault();
  const login =
    " https://classroommonitoring.herokuapp.com/api/user/login_proctor";
  loading = true;
  document.getElementById("loader").style.display = "block";
  document.getElementById("submit").style.display = "none";
  fetch(login, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      national_id: form.email.value,
      password: form.password.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("loader").style.display = "none";
      document.getElementById("submit").style.display = "block";

      loading = false;
      console.log(data.status);
      if (data.status == "success") {
        window.location.href = "confirm.html";
      } else {
        alert("Invalid User ID or Password"); /*displays error message*/
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
