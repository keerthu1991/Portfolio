let txtuser=document.querySelector(".txtuser");
let txtpass=document.querySelector(".txtpass");
let submit=document.querySelector(".submit");

function validateUser(doc){
if(window.localStorage){
   // var id=setAttribute('data-id',doc.id);
    var username=doc.data().username;
    var password=doc.data().password;
    console.log(username);
    console.log(password);
    localStorage.setItem("user",username);
    localStorage.setItem("pass",password);
    let user=localStorage.getItem("user");
    let pass=localStorage.getItem("pass");
    let message=document.querySelector(".message");
    submit.addEventListener("click",(e)=>{
        e.preventDefault();
        if(txtuser.value===username&&txtpass.value===password){
            //console.log(txtuser.value);
            //console.log(txtpass.value);
            message.innerHTML="Login Successful!";
            //console.log(password);
            window.location='welcomepage.html';
        }else{
            message.innerHTML="Username or Password is Invalid!";
        }
    })
}
}
db.collection('loginusers').get().then((snapshot)=>{
    //console.log(snapshot.docs);
    snapshot.docs.forEach((doc)=>{
        validateUser(doc);
    })
})