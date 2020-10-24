//var username = window.localStorage.getItem('username');
//console.log(username);
//var user=window.localStorage.getItem('user');
//console.log(user);
/*var regpage=document.referrer;
console.log(regpage);
var loginpage=document.referrer;
console.log(loginpage);
var script=document.createElement('script');
   
function welcome(doc){
    var username=doc.data().username;
    console.log(username);
 }
 if(regpage==='http://127.0.0.1:5500/index.html'){
     script.src='http://127.0.0.1:5500/register.js' ;

 db.collection('regusers').where('username','==',name.value).get().then((snapshot)=>{
    snapshot.docs.forEach((doc)=>{
        welcome(doc);
        var uname=doc.data().username;
        
               document.getElementById('welcome').innerHTML = 'Welcome ' + uname + '!';
        })
        })
        document.body.appendChild(script);
}

 if(loginpage==='http://127.0.0.1:5500/loginreg.html')
{
    script.src="http://127.0.0.1:5500/loginreg.js";
 db.collection('loginusers').where('username','==',txtuser).get().then((snapshot)=>{
    snapshot.docs.forEach((doc)=>{
        welcome(doc);
        var uname=doc.data().username;
            document.getElementById('welcome').innerHTML = 'Welcome ' + uname + '!';
        })
    })
    document.body.appendChild(script);
}


var mydata=document.getElementById("mydata");
mydata.addEventListener("submit",(e)=>{
    e.preventDefault();
    window.location="mydata.html";
})*/
var exitwl=document.getElementById("exitwl");
exitwl.addEventListener("submit",(e)=>{
    e.preventDefault();
    window.close();
    window.location="index.html";

})