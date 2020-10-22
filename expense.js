var expform=document.getElementById('expform');
var homeform=document.getElementById('homeform');


expform.addEventListener("submit",(e)=>{
        e.preventDefault();  
        if(window.localStorage){
            var salary=parseInt(document.getElementById('salary').value);
            var grocery=parseInt(document.getElementById('grocery').value);
            var maid=parseInt(document.getElementById('maid').value);
            var medical=parseInt(document.getElementById('medical').value);
            var entertain=parseInt(document.getElementById('entertain').value);
            var misc=parseInt(document.getElementById('misc').value); 
          
          if(salary!==null&&grocery!==null&&medical!==null&&salary!==''&&grocery!==''&&medical!==''&&maid!==''&&entertain!==null&&misc!==''&&maid!==null&&entertain!==''&&misc!==null){
              if(salary>0&&grocery<salary&&maid<salary&&misc<salary&&medical<salary&&entertain<salary){
                                parseInt(localStorage.setItem("salary",salary));
                                parseInt(localStorage.setItem("groc",grocery));
                                parseInt(localStorage.setItem("maid",maid));
                                parseInt(localStorage.setItem("medic",medical));
                                parseInt(localStorage.setItem("entertain",entertain));
                                parseInt(localStorage.setItem("misc",misc));
                                var s=parseInt(localStorage.getItem("salary"));
                                var g=parseInt(localStorage.getItem("groc"));
                                var m=parseInt(localStorage.getItem("maid"));
                                var md=parseInt(localStorage.getItem("medic"));
                                var et=parseInt(localStorage.getItem("entertain"));
                                var ms=parseInt(localStorage.getItem("misc")); 
                                    var t=g+m+md+et+ms;
                                    var expense=s-t;
                                    alert("Your Expense is :" + ' ' + expense);
                }
                            else{
                                    alert("Values entered are incorrect, the expense cannot exceed the salary amount, please check and fill.")
                                }  
            }
            else{
                alert("You must fill all the fields!");
            }
        }

})
homeform.addEventListener('submit',(e)=>{
    e.preventDefault();
    window.location='welcomepage.html';
});
var exitexp=document.getElementById("exitexp");
exitexp.addEventListener("submit",(e)=>{
    e.preventDefault();
    window.close();
    window.location="register.html";

})
var exitexp=document.getElementById("exitexp");
exitexp.addEventListener("submit",(e)=>{
    e.preventDefault();
    window.close();
    window.location="index.html";

})