const DB_USERS = [];

// show sign up
document.getElementById('register-button').addEventListener('click', () => {
	// alert()
    sign_up_form.style.display = "block";
    login_form.style.display = "none";

})

document.getElementById('login-button').addEventListener('click', () => {
	// alert()
    sign_up_form.style.display = "none";
    login_form.style.display = "block";

})
// reset field

const resetFields = () =>{
    document.getElementById("first-name").value="";
    document.getElementById("last-name").value="";
    document.getElementById("sign-upemail").value="";
    document.getElementById("phone").value="";
    document.getElementById("password").value="";
    document.getElementById("confirm_pass").value="";
    document.getElementById('tnC').checked = false

}
const signup_form = () => {
  let firstname = document.getElementById("first-name").value;
  let lastname = document.getElementById("last-name").value;
  let email = document.getElementById("sign-upemail").value;
  let phone = document.getElementById("phone").value;
  let password = document.getElementById("password").value;
  let confirm_pass = document.getElementById("confirm_pass").value;
  let tnC = document.getElementById("tnC").checked;

  // validation
  let error = false

  if (
    firstname &&
    firstname.indexOf(" ") != 0 &&
    firstname.trim().length >= 1
  ) {
    document.getElementById("valid-firstname").style.display = "block";
    document.getElementById("invalid-firstname").style.display = "none";
  } else {
    document.getElementById("valid-firstname").style.display = "none";
    document.getElementById("invalid-firstname").style.display = "block";
    error = true;
  }
  // console.log(firstname.indexOf(" "));

  if (lastname && lastname.indexOf(" ") != 0 && lastname.trim().length >= 1) {
    document.getElementById("valid-lastname").style.display = "block";
    document.getElementById("invalid-lastname").style.display = "none";
  } else {
    document.getElementById("valid-lastname").style.display = "none";
    document.getElementById("invalid-lastname").style.display = "block";
    error = true;
  }

  if (
    email &&
    email.includes("@") &&
    email.includes(".") &&
    email.lastIndexOf(".") <= email.length - 3 &&
    email.indexOf("@") !== 0
  ) {
    document.getElementById("valid-signup-email").style.display = "block";
    document.getElementById("invalid-signup-email").style.display = "none";
  } else {
    document.getElementById("invalid-signup-email").style.display = "block";
    document.getElementById("valid-signup-email").style.display = "none";
    error = true;

    // error = true
  }

  if (phone && phone.length === 10 && parseInt(phone)) {
    document.getElementById("valid-phone").style.display = "block";
    document.getElementById("invalid-phone").style.display = "none";
  } else {
    document.getElementById("invalid-phone").style.display = "block";
    document.getElementById("valid-phone").style.display = "none";
    error = true;
  }

  if (confirm_pass && password === confirm_pass) {
    document.getElementById("invalid-confirm_pass").style.display = "block";
    document.getElementById("invalid-confirm_pass").style.display = "none";
  } else {
    document.getElementById("invalid-confirm_pass").style.display = "none";
    document.getElementById("invalid-confirm_pass").style.display = "block";
    error = true;
  }

  
if(tnC) {
    // document.getElementById("invalid-tnC").style.display = "none";
    document.getElementById("tnc_success").style.color = "green";

} else {
    // document.getElementById("invalid-tnC").style.display = "block";
    document.getElementById("tnc_success").style.color = "#dc3545";

    error=true;


    // error = true
}

if(!error){

    setTimeout(() => {
        resetFields();
   document.getElementById("succes-alert").style.display = "none";
        
    }, 2000);
    var elements = document.getElementsByClassName('valid-feedback')
   
    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = 'none';
     }
     document.getElementById("tnc_success").style.color = "black";
     document.getElementById("succes-alert").style.display = "block";
     
     let userDetails = {
         firstname,
         lastname,
         email,
         // password : encrypt(password),
         phone
     }
     
     DB_USERS.push(userDetails);
     console.log(DB_USERS);
}

}