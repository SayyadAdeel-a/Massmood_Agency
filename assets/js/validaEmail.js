//*** Email validation routine

function validaEmail() {
  let form = document.getElementById("form");
  let email = document.getElementById("email").value;
  let text = document.getElementById("text");
  // var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  //*** Validation area
  if (email.match(pattern)) {
    text.innerHTML = "";
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = "Your email is correct";
    text.style.color = "#00ff15";

    setTimeout(() => {
      form.classList.remove("valid");
      email = document.getElementById("email").value = "";
      text.innerHTML = "";
    }, 15000);
  } else {
    text.innerHTML = "";
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerHTML = "Please enter a valid email";
    text.style.color = "#fff";

    setTimeout(() => {
      form.classList.remove("invalid");
      email = document.getElementById("email").value = "";
      text.innerHTML = "";
    }, 15000);
  }

  //*** validate if email is empty
  if (email == "") {
    text.innerHTML = "";
    form.classList.remove("valid");
    form.classList.remove("invalid");
    text.innerHTML = "Please enter your email!";
    text.style.color = "#fff";

    setTimeout(() => {
      text.innerHTML = "";
    }, 15000);
  }
}

//*** validate if button was pressed without entering an email
function validarBoton() {
  let form = document.getElementById("form");
  let email = document.getElementById("email").value;
  let text = document.getElementById("text");
  const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if (email == "") {
    text.innerHTML = "";
    form.classList.remove("valid");
    form.classList.remove("invalid");
    text.innerHTML = "You must enter an email!";
    text.style.color = "#fff";

    setTimeout(() => {
      text.innerHTML = "";
      window.history.go();
    }, 15000);
  } else {
    if (email.match(pattern)) {
      text.innerHTML = "You have been registered successfully!";
      text.style.color = "#00ff15";

      setTimeout(() => {
        text.innerHTML = "";
        window.history.go();
      }, 10000);
    }
  }
}
