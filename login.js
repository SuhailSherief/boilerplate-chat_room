
function validate() {
    var email = document.getElementById("mail");
    var password = document.getElementById("password");
    if(email.value.trim() == "")
    {
        window.alert("Enter mail address");
        return false;
    }
    else if(password.value.trim() == "")
    {
        window.alert("Enter password");
        return false;
    }
    else{
        return true;
    }
}