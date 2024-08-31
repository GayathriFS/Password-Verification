var btn = document.querySelector(".btn");
var form = document.getElementById("form");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  var name1 = document.getElementById("name1").value;
  var pass = document.getElementById("pass").value;
  var pass1 = document.getElementById("pass1").value;

  var nameRegex = /^[a-zA-Z0-9]+$/;
  var passRegex = /^[a-zA-Z0-9]{8}$/;

  var errors = [];

  if (!nameRegex.test(name1)) {
    errors.push("Please enter a valid name");
    document.getElementById("name_error").innerHTML = "Please enter a valid name";
  } else {
    document.getElementById("name_error").innerHTML = "";
  }

  if (!passRegex.test(pass)) {
    errors.push("Password should be 8 characters long with no special characters");
    document.getElementById("pass_error").innerHTML = "Password should be 8 characters long with no special characters";
  } else {
    document.getElementById("pass_error").innerHTML = "";
  }

  if (pass !== pass1) {
    errors.push("Password do not match");
    document.getElementById("confirm_pass_error").innerHTML = "Password do not match";
  } else {
    document.getElementById("confirm_pass_error").innerHTML = "";
  }

  if (errors.length > 0) {
    console.log(errors);
  } else {
    if (name1 === "" && pass === "" && pass1 === "") {
      form.reset();
    } else {
      form.submit();
      alert("Form submitted succesfully")
      form.reset();
    }
  }
});
