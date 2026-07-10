let days = 2;
let hours = 6;
let minutes = 5;
let seconds = 30;

setInterval(function () {
  seconds--;

  if (seconds < 0) {
    seconds = 59;
    minutes--;
  }

  if (minutes < 0) {
    minutes = 59;
    hours--;
  }

  if (hours < 0) {
    hours = 23;
    days--;
  }

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);
////////////////////////////////////////////////////////////

///////////
// Sign-Up
// ///////
const inputs = document.querySelectorAll(".type-Up");

if (inputs.length > 0) {

  inputs[0].addEventListener("input", function () {
    if (this.value.length >= 5) {
      this.style.border = "2px solid green";
    } else {
      this.style.border = "2px solid red";
    }
  });

  inputs[1].addEventListener("input", function () {
    if (this.value.length >= 5) {
      this.style.border = "2px solid green";
    } else {
      this.style.border = "2px solid red";
    }
  });

  inputs[2].addEventListener("input", function () {
    if (this.value.includes("@gmail.com")) {
      this.style.border = "2px solid green";
    } else {
      this.style.border = "2px solid red";
    }
  });

  inputs[3].addEventListener("input", function () {
    this.value = this.value.slice(0, 11);

    if (this.value.length === 11) {
      this.style.border = "2px solid green";
    } else {
      this.style.border = "2px solid red";
    }
  });

  inputs[4].addEventListener("input", function () {
    if (this.value.length >= 8) {
      this.style.border = "2px solid green";
    } else {
      this.style.border = "2px solid red";
    }
  });

  inputs[4].addEventListener("focus", function () {
    this.type = "text";
  });

  inputs[4].addEventListener("blur", function () {
    this.type = "password";
  });

  inputs[5].addEventListener("input", function () {
    if (this.value == inputs[4].value) {
      this.style.border = "2px solid green";
    } else {
      this.style.border = "2px solid red";
    }
  });

  inputs[5].addEventListener("focus", function () {
    this.type = "text";
  });

  inputs[5].addEventListener("blur", function () {
    this.type = "password";
  });

  const btn = document.querySelector(".Bt-send-Up");

  btn.addEventListener("click", function (e) {
    e.preventDefault();

    if (
      inputs[0].value.length >= 5 &&
      inputs[1].value.length >= 5 &&
      inputs[2].value.includes("@gmail.com") &&
      inputs[3].value.length == 11 &&
      inputs[4].value.length >= 8 &&
      inputs[5].value == inputs[4].value
    ) {
      btn.innerHTML = "Successful ✅";
      location.href = "/index.html";
    } else {
      btn.innerHTML = "Fill in the fields ❌";
      btn.style.border="2px solid red"
    }
  });

}
///////////////////////////////////////
////////////////// SignIn///////////////
const inputSignIn = document.querySelectorAll(".type-In");

if (inputSignIn.length > 0) {
    inputSignIn[0].addEventListener("input", function () {
        if (this.value.includes("@gmail.com")) {
            this.style.border = "2px solid green";
        } else {
            this.style.border = "2px solid red";
        }
    });
}

 inputSignIn[1].addEventListener("input", function () {
    if (this.value.length >= 8) {
      this.style.border = "2px solid green";
    } else {
      this.style.border = "2px solid red";
    }
  });


  const btnIn = document.querySelector(".Bt-send");
  btnIn.addEventListener("click", function (e) {
    e.preventDefault();

    if (
      inputSignIn[0].value.includes("@gmail.com") && inputSignIn[1].value.length >= 8 
    ) {
      btnIn.innerHTML = "Successful ✅";
      location.href = "/index.html";
    } else {
      btnIn.innerHTML = "Fill in the fields ❌";
    }
  });
