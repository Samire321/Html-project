function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  let mesazhi = document.getElementById("mesazhi");
  mesazhi.innerHTML = "";

  if (name.length < 3) {
    mesazhi.innerHTML = "<div class='alert alert-warning'>The name must be at least 3 characters.</div>";
    return;
  }
  if (!email.includes("@")) {
    mesazhi.innerHTML = "<div class='alert alert-warning'>Email must contain '@'.</div>";
    return;
  }
  if (password.length < 8) {
    mesazhi.innerHTML = "<div class='alert alert-warning'>The password must be at least 8 characters.</div>";
    return;
  }

  mesazhi.innerHTML = "<div class='alert alert-success'>The form was submitted successfully!</div>";
}
//Onchange
function ndryshoiTeksti() {
      let name = document.getElementById("name").value;
      document.getElementById("ndryshimi").innerHTML = "Hello, " + name + "!";
    }
