//declare dom elements
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const taskInput = document.querySelector('#task');
const filter=document.querySelector('#filter');
const clear=document.querySelector('.clear-tasks');

//load DOM model
document.addEventListener('DOMContentLoaded',loadTasks);  
// Add task to taskList
  form.addEventListener('submit', addTask);
  //remove taskItem on being clicked
  taskList.addEventListener('click',removeTask);
  //filter task items
  filter.addEventListener('keyup',filterTasks);
  //clears the taskList
  clear.addEventListener('click',clearTask);

//define event-handling methods
//add task to tasklist
function addTask(e)
{
  e.preventDefault();
  if(taskInput.value ==='')
  alert("Enter task!")
  //adding taskInput to taskList 
  const li=document.createElement('li');
  li.className = 'collection-item';
  li.appendChild(document.createTextNode(taskInput.value));
  //adding delete button to list items
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);
  taskList.appendChild(li);
  taskInput.value=null;
  //save task inputs to local storage
saveTaskToLocal(taskInput.value);
  

}
// Remove Task
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are You Sure?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}
//filter the tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}


  //clear the task list
  function clearTask(e)
  {
    taskList.innerHTML='';
    localStorage.clear;
  }

  //save List tasks to local
  function saveTaskToLocal(task)
  {
    let tasks;
    if(localStorage.getItem('tasks')===null)
    {
      tasks=[];
    }
    else
    {
      tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
  }

  //retrives and load the tasks saved to local into task list
  function loadTasks()
  {
    let tasks;
    if(localStorage.getItem('tasks')===null)
    {
      tasks=[];
    }
    else{
      tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task){
      // Create li element
      const li = document.createElement('li');
      // Add class
      li.className = 'collection-item';
      // Create text node and append to li
      li.appendChild(document.createTextNode(task));
      // Create new link element
      const link = document.createElement('a');
      // Add class
      link.className = 'delete-item secondary-content';
      // Add icon html
      link.innerHTML = '<i class="fa fa-remove"></i>';
      // Append the link to li
      li.appendChild(link);
  
      // Append li to ul
      taskList.appendChild(li);
    });
  }
  

