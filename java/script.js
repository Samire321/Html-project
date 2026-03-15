function validateForm() {
 
  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let confirmPassword = document.getElementById("confirmPassword").value.trim();

  let mesazhi = document.getElementById("mesazhi");
  mesazhi.innerHTML = "";

  if (username.length < 3) {
    mesazhi.innerHTML = "<div class='alert alert-warning'>Emri duhet të jetë së paku 3 karaktere.</div>";
    return;
  }
  if (!email.includes("@")) {
    mesazhi.innerHTML = "<div class='alert alert-warning'>Email-i duhet të përmbajë '@'.</div>";
    return;
  }
  if (password.length < 6) {
    mesazhi.innerHTML = "<div class='alert alert-warning'>Fjalëkalimi duhet të jetë së paku 6 karaktere.</div>";
    return;
  }
  if (password !== confirmPassword) {
    mesazhi.innerHTML = "<div class='alert alert-danger'>Fjalëkalimet nuk përputhen.</div>";
    return;
  }

  mesazhi.innerHTML = "<div class='alert alert-success'>Forma u dërgua me sukses!</div>";
}
