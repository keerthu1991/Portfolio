var txtuser=document.querySelector(".txtuser");
var txtpass=document.querySelector(".txtpass");

var submit=document.querySelector(".submit"); 
function renderlogin(doc){

       var username=doc.data().username;
       var password=doc.data().password;

       console.log(username);
       console.log(password);
  

}
db.collection('loginusers').get().then((snapshot)=>{
    snapshot.docs.forEach((doc)=>{
        renderlogin(doc);
    })
})
submit.addEventListener("click",(e)=>{
    e.preventDefault();
   
    if(window.localStorage){
        if(txtuser.value!==''&&txtuser.value!==null&&txtpass.value!==''&&txtpass.value!==null){
        db.collection('loginusers').where('username','==',txtuser.value).get().then((snapshot)=>{
            snapshot.docs.forEach((doc)=>{
                renderlogin(doc);
                var pwd=doc.data().password;
                var uname=doc.data().username;
                //console.log(uname);
                //console.log(pwd);
    localStorage.setItem("user",txtuser);
    var user=localStorage.getItem("user");
    if(txtuser.value==uname&&txtpass.value==pwd){
    alert('Welcome!!!');
    window.localStorage.setItem('user',user); 
    window.location='welcomepage.html';
    }
    else{
        alert('Username or Password is Invalid! Kindly Try again!');
    }
    })

    
    })
    .catch(function(error){
        alert('username or password is invalid');
    });
}
    else{
        alert('Fields cannot be empty! KIndly Fill!');
    }
}
})
