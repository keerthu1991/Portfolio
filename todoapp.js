const $addTodo=document.getElementById("addTodo");
const $todoList=document.getElementById("todoList");
$todoform=document.getElementById("todoform");
$addTodo.addEventListener('keypress',(e)=>{
if(e.code==="Enter"&&e.target.value!==''){
    e.preventDefault();
    let todo=e.target.value;
    let $todoItem=document.createElement('li');
    let todoId=new Date().getTime();
    $todoItem.innerHTML=`
    <input id=${todoId} type="checkbox"/>
    <label for=${todoId}>${todo}</label>
    `;
    $todoList.appendChild($todoItem);
    $addTodo.value="";
    $todoList.addEventListener('click',(e)=>{
        if(e.target.checked){
            e.target.parentElement.classList.add('completed');
            $todoItem.lastElementChild.classList.add('completed');
        }
        else{
            e.target.parentElement.classList.remove('completed');
            $todoItem.lastElementChild.classList.remove('completed');
        }
    })
}
});
$todoform.addEventListener('submit',(e)=>{
    e.preventDefault();
    window.location='welcomepage.html';
});