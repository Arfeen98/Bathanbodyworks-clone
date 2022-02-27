document.querySelector("#myform").addEventListener("submit",funsubmit)
var sinnUpArr=JSON.parse(localStorage.getItem("signUp"))||[]
function funsubmit(event)
{
    event.preventDefault();

    var formObj=
    {
        firstName:document.querySelector("#firstName").value,
        lastname:document.querySelector("#LastName").value,
        email:document.querySelector("#email").value,
      //  zipportal:document.querySelector("#zipportal").value,
        phoneno:document.querySelector("#phoneno").value,
        pass:document.querySelector("#pass").value,
   
    }
    sinnUpArr.push(formObj)
    console.log(sinnUpArr)
    localStorage.setItem("signUp",JSON.stringify(sinnUpArr))
alert("Account created");
 window.location.href="signin.html";
}


function myFunction() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }