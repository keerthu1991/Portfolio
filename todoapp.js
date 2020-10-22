var todoList=document.getElementById("todoList");
function rendertodos(doc){
    var li=document.createElement('li');
    var task=document.createElement('span');
    var cross=document.createElement('div');
    cross.classList.add('float-right');
    li.setAttribute('taskid',doc.id);
    task.textContent=doc.data().todolistname;
    cross.textContent='x';
    li.classList.add('list-group-item');
    li.appendChild(task);
    li.appendChild(cross);
    todoList.appendChild(li);
    cross.addEventListener('click',(e)=>{
        e.stopPropagation();
        var id=e.target.parentElement.getAttribute('taskid');
        db.collection('todolist').doc(id).delete();
    })
}
db.collection('todolist').get().then((snapshot)=>{
    snapshot.docs.forEach((doc)=>{
        rendertodos(doc);
    })
})
var todoform=document.getElementById("todoform");
todoform.addEventListener('submit',(e)=>{
    e.preventDefault();
    var addTodo=document.getElementById("addTodo").value;
    if(window.localStorage){
    if(addTodo!==''&&addTodo!==null){
    var todo=addTodo;
    localStorage.setItem("todotask",todo);
    var task=localStorage.getItem("todotask");
    db.collection('todolist').add({
        todolistname:todo
    })
    .then(function(){
        console.log('done');
        todoform.addTodo.value='';
    })
    .catch(function(error){
        console.log('error');
    });
    //localStorage.setItem("todotask",todo);
    //var task=localStorage.getItem("todotask");
    }
    else{
        alert("Todo field cannot be left empty!");
    }
}
}) 
var home=document.getElementById("home");
home.addEventListener('submit',(e)=>{
    e.preventDefault();
    window.location='welcomepage.html';
});
var exittodo=document.getElementById("exittodo");
exittodo.addEventListener("submit",(e)=>{
    e.preventDefault();
    window.close();
    window.location="index.html";
})


