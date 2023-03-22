// var attempt = 3;
function validate(){
var username = document.getElementById("username").value;
// var password = document.getElementById("password").value;
if(username.length != 0){
    if( username == 201 ){
alert ("Login successfully");
window.location = "newpage.html";
return false;
}
    else{
alert ("Invalid User Id/Password");
attempt -- ;
alert("Only "+attempt+" attempt(s) are left");
        if(attempt==0){
            alert("You have reached maximum number of attempts.");
            document.getElementById("username").disabled = true;
            // document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
        }
return false;
}
}
else{
    alert("Batch no. can't be empty! Please enter your User Batch no..");
}
}