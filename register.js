var regform=document.getElementById('regform');

regform.addEventListener("submit",(e)=>{
        e.preventDefault();
        var name=document.getElementById('name').value;
        var email=document.getElementById('email').value;
        var addr=document.getElementById('addr').value;
        var phone=document.getElementById('phone').value;
        var pass=document.getElementById('pass').value;
        var cnfpass=document.getElementById('cnfpass').value;    
       var nameregex=/^[a-z]+[ ]?[a-z]$/i;
        var emailregex=/^[a-z0-9]+@[a-z0-9]+\.[a-z]+$/i;
        var addrregex=/^[a-z\d\s\,\.\-]+$/i;
        var phoneregex=/^\d{10}$/;
        var pwdregex=/^[a-zA-z\d\,\.\-\s\$\&\%\*\@\#\!\(\)\{\}]{8,14}$/;
        if(window.localStorage){
          if(name!==null&&email!==null&&addr!==null&&phone!==null&&name!==''&&email!==''&&addr!==''&&phone!==''&&pass!==null&&pass!==''&&cnfpass!==null&&cnfpass!==''){
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
                                var uname=nameregex.test(username);
                                var id=emailregex.test(emailid);
                                var add=addrregex.test(address);
                                var ph=phoneregex.test(phonno);
                                var pwd=pwdregex.test(password);
                                var cpwd=pwdregex.test(confirmpwd);
                             if(uname===true&&id===true&&add===true&&ph===true&&pwd===true&&cpwd===true){
                                    alert("You are successfully registered!!!");  
                                    window.localStorage.setItem('username',username);  
                                   
                                   db.collection('regusers').add({
                                       username:name,
                                       emailid:email,
                                       address:addr,
                                       phoneno:phone,
                                       password:pass,
                                       confirmpassword:cnfpass
                                   })
                                  .then(function(){
                                   window.location.href='welcomepage.html';
                                   regform.name.value='';
                                   regform.email.value='';
                                   regform.addr.value='';
                                   regform.phone.value='';
                                   regform.pass.value='';
                                   regform.cnfpass.value='';
                                })
                                .catch(function(error){
                                    console.log('error')
                                });
                                   
                                  db.collection('loginusers').add({
                                    username:name,
                                    password:pass
                                })
                                .then(function(){
                                    console.log("done");
                                
                                })
                                .catch(function(error){
                                    console.log("error");
                                });
                                }
                                else{
                                    alert("Username or Email ID or Address or Phone number or Passwords did not meet the field validations, kindly try again!!!")
                                }
              }else{
                    alert("Passwords do not match");
                }
       }   
    }
})
