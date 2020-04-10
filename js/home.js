function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}       

function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("myInput").value;
    if (username == "admin" && password == "admin") {
        window.location = "page1.html"; 
        return false;
    }
    else {
        alert("What to admins login with?");        
    }
}