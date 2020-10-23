window.onload=function(){
    var username = window.localStorage.getItem('user');
    if(username===window.localStorage.getItem('user')){
function updatemydata(doc){
    var email=doc.data().emailid;
    var phone=doc.data().phoneno;
       var address=doc.data().address;
       var password=doc.data().password;
       var cnfpass=doc.data().confirmpassword;

       console.log(email);
       console.log(phone);
       console.log(address);
       console.log(password);
       console.log(cnfpass);

}
    }
}
var updform=document.getElementById('updform');
updform.addEventListener("submit",(e)=>{
    e.preventDefault();
        var email=document.getElementById('email').value;
        var addr=document.getElementById('addr').value;
        var phone=document.getElementById('phone').value;
        var pass=document.getElementById('pass').value;
        var cnfpass=document.getElementById('cnfpass').value;
        var emailregex=/^[a-z0-9]+@[a-z0-9]+\.[a-z]+$/i;
        var addrregex=/^[a-z\d\s\,\.\-]+$/i;
        var phoneregex=/^\d{10}$/;
        var pwdregex=/^[a-zA-z\d\,\.\-\s\$\&\%\*\@\#\!\(\)\{\}]{8,14}$/;
        db.collection('regusers').where('username','==',user).get().then((snapshot)=>{
            snapshot.docs.forEach((doc)=>{
                updatemydata(doc);
               var id=doc.id;
        if(window.localStorage){
            if(email!==null||email!==''||addr!==''||addr!==null||phone!==''||phone!==null)
            {
                if(pass!==''&&pass!==null&&cnfpass!==''&&cnfpass!==null){
                    if(pass===cnfpass){
                        localStorage.setItem("user",name);
                                localStorage.setItem("mail",email);
                                localStorage.setItem("address",addr);
                                localStorage.setItem("phone",phone);
                                localStorage.setItem("password",pass);
                                localStorage.setItem("cnfpass",cnfpass);
                                var username=localStorage.getItem("user");
                                var emailid=localStorage.getItem("mail");
                                var address=localStorage.getItem("address");
                                var phonno=localStorage.getItem("phone");
                                var password=localStorage.getItem("password");
                                var confirmpwd=localStorage.getItem("cnfpass");
                                var id=emailregex.test(emailid);
                                var add=addrregex.test(address);
                                var ph=phoneregex.test(phonno);
                                var pwd=pwdregex.test(password);
                                var cpwd=pwdregex.test(confirmpwd);
                             if(id===true&&add===true&&ph===true&&pwd===true&&cpwd===true){
                                    alert("You have successfully updated!"); 
                                    db.collection('regusers').doc(id).update({
                                        emailid:email,
                                        address:addr,
                                        phoneno:phone,
                                        password:pass,
                                        confirmpassword:cnfpass
                                    })
                    }
                    else{
                        alert('noexpression');
                    }
                }
                else{
                    alert('nomatch');
                }
            }
        }
            else{
                alert('passnonull')
            }
        }
    })
    }).catch(function(error){
        alert('error');
        })
})

var home=document.getElementById("home");
home.addEventListener('submit',(e)=>{
    e.preventDefault();
    window.location='welcomepage.html';
});

