window.onload=function(){
    var username = window.localStorage.getItem('user');
    if(username===window.localStorage.getItem('user')){
        var mydata=document.getElementById('mydata');
var mytable=document.getElementById('mytable');
function rendermydata(doc){
    var tr=document.createElement('tr');
    var tduname=document.createElement('td');
    var tdemail=document.createElement('td');
    var tdphone=document.createElement('td');
    var tdaddr=document.createElement('td');
    var tdpass=document.createElement('td');
    tduname.textContent=doc.data().username;
    tdemail.textContent=doc.data().emailid;
    tdphone.textContent=doc.data().phoneno;
    tdaddr.textContent=doc.data().address;
    tdpass.textContent=doc.data().password;
    tr.setAttribute('row-id',doc.id)
    tr.appendChild(tduname);
    tr.appendChild(tdemail);
    tr.appendChild(tdphone);
    tr.appendChild(tdaddr);
    tr.appendChild(tdpass);
    mytable.appendChild(tr);
}
    }
}



db .collection('regusers').where('username','==',username).get().then((snapshot)=>{
    snapshot.docs.forEach((doc)=>{
        rendermydata(doc);
    })
})
var home=document.getElementById("home");
home.addEventListener('submit',(e)=>{
    e.preventDefault();
    window.location='welcomepage.html';
});
var updatebtn=document.getElementById("updatebtn");
updatebtn.addEventListener("submit",(e)=>{
    e.preventDefault();
   // window.close();
    window.location="updateform.html";
})
