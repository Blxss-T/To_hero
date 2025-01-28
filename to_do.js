const Taskinput=document.getElementById('AddTask');
const addTaskButton=document.getElementById('Add');
const Tasklist=document.getElementById('Task_list');
//add new tasks
addTaskButton.addEventListener("click",function(event){
    event.preventDefault();
    NewTask();
});
function NewTask(){
    const thetask=Taskinput.value.trim();
    if(thetask===""){
        alert("Please enter a task!🙄");
        return;
    }
    //list the tasks
    const ListTasks=document.createElement('li');
    ListTasks.textContent=thetask;
    //add a task-complete button
    const completeButton=document.createElement("button");
    completeButton.textContent="Complete💪"
    completeButton.style.marginLeft="10px";
    completeButton.addEventListener("click",()=>{
        ListTasks.classList.toggle("completed");
    });
    //Add a delete button
    const deleteTask=document.createElement("button");
    deleteTask.textContent="Delete task";
    deleteTask.style.marginLeft="5px";
    deleteTask.addEventListener("click",()=>{
      Tasklist.removeChild(ListTasks);
    });
    ListTasks.appendChild(completeButton);
    ListTasks.appendChild(deleteTask);
    Tasklist.appendChild(ListTasks);

    Taskinput.value="";
}