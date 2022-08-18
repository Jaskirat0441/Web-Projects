const resetFields = () =>{
    document.getElementById("first-name").value="";
    document.getElementById("last-name").value="";
    document.getElementById("email").value="";
    document.getElementById("city").value="";
    document.getElementById("state").value='None';
    document.getElementById("zip").value="";
    document.getElementById('tnC').checked = false

}
const validate=()=>{
let firstname= document.getElementById("first-name").value;
let lastname= document.getElementById("last-name").value;
let email= document.getElementById("email").value;
let city= document.getElementById("city").value;
let state= document.getElementById("state").value;
let zip= document.getElementById("zip").value;
let tnC= document.getElementById("tnC").checked;
// console.log(tnC);
let error= false;

if(firstname  && firstname.indexOf(" ")!=0 && (firstname.trim()).length>=1){
    document.getElementById("valid-firstname").style.display="block";
    document.getElementById("invalid-firstname").style.display="none";
}
else{
    document.getElementById("valid-firstname").style.display="none";
    document.getElementById("invalid-firstname").style.display="block";
    error=true;
}
// console.log(firstname.indexOf(" "));

if(lastname  && lastname.indexOf(" ")!=0 && (lastname.trim()).length>=1){
    document.getElementById("valid-lastname").style.display="block";
    document.getElementById("invalid-lastname").style.display="none";
}
else{
    document.getElementById("valid-lastname").style.display="none";
    document.getElementById("invalid-lastname").style.display="block";
    error=true;

}

if (
    email &&
    email.includes("@") &&
    email.includes(".") &&
    email.lastIndexOf(".") <= email.length - 3 &&
		email.indexOf('@') !== 0
  ) {
    document.getElementById("valid-email").style.display = "block";
    document.getElementById("invalid-email").style.display = "none";
  } else {
    document.getElementById("invalid-email").style.display = "block";
    document.getElementById("valid-email").style.display = "none";
    error=true;

		// error = true
  }
 
if(city  && city.indexOf(" ")!=0 && (city.trim()).length>=1){
    document.getElementById("valid-city").style.display="block";
    document.getElementById("invalid-city").style.display="none";
}
else{
    document.getElementById("valid-city").style.display="none";
    document.getElementById("invalid-city").style.display="block";
    error=true;

}

// console.log(state);

if(state!=='None'){
    document.getElementById("valid-state").style.display="block";
    document.getElementById("invalid-state").style.display="none";
}
else{
    document.getElementById("valid-state").style.display="none";
    document.getElementById("invalid-state").style.display="block";
    error=true;

}

if(zip && zip.length === 6 && parseInt(zip)) {
    document.getElementById("valid-zip").style.display="block";
    document.getElementById("invalid-zip").style.display="none";
}
else{
    document.getElementById("valid-zip").style.display="none";
    document.getElementById("invalid-zip").style.display="block";
    error=true;

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
// console.log(document.getElementsByClassName("valid-feedback"));

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
    // document.getElementById('tnC').checked = false


//    document.getElementsByClassName("valid-feedback").style.display="none";
}
else{
    
   document.getElementById("succes-alert").style.display = "none";
}
}