
function validateForm(){
    var email = document.forms["auth-form"].elements["email"].value;
 
   
    if(email.length<5){
        document.getElementById("errors").innerText="Email must be longer than 5 symbols.";
        return false;
    }

    if(!email.includes("@")){
        
        document.getElementById("errors").innerText="Email must contain @";
        return false;
    }
    if(!email.includes(".")){
        
        document.getElementById("errors").innerText="Email must contain .";
        return false;
    }

    var password = document.forms["auth-form"].elements["password"].value;
   
    if(password.length<6){
        document.getElementById("errors").innerText="Password must be longer than 6 symbols."
        return false;
    }

    var re = new RegExp(/.*[a-z]+.*[A-Z]+.*/);
    if(!password.match(re)){
        document.getElementById("errors").innerText="Password must have one uppercase and one lowercase letter"
        return false;
    }
   
    var re2 = new RegExp(/.*[0-9]+.*/);
    var re3 = new RegExp(/.*[!@#$%^&]+.*/);

    if(!password.match(re2)){
        document.getElementById("errors").innerText="Password must have one digit"
        return false;
    }
    
    if(!password.match(re3)){
        document.getElementById("errors").innerText="Password must have one special symbol from the group !@#$%^&"
        return false;
    }
        alert("Успешна регистрация");
     
}
