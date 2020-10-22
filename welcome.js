window.onload = function() {
    var username = window.localStorage.getItem('username');
    if(username===window.localStorage.getItem('username')){
    document.getElementById('welcome').innerHTML = 'Welcome ' + username + '!';
 }
 else{
     var user=window.localStorage.getItem('user');
     if(user===window.localStorage.getItem('user')){
        document.getElementById('welcome').innerHTML = 'Welcome ' + user + '!';
     }
 }
}

var exitwl=document.getElementById("exitwl");
exitwl.addEventListener("submit",(e)=>{
    e.preventDefault();
    window.close();
    window.location="register.html";

})