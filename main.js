let taskId = 1;

document.getElementById('todo-form').addEventListener('submit', (e) => {
    e.preventDefault();

    let newTaskElement = document.getElementById('new-task');
    let newTask = newTaskElement.value;

    let todoContainer = document.getElementById('items')

    let li = document.createElement('li');
    li.classList.add('item');
    li.innerHTML = `
        <input type="checkbox" onchange="markComplete(${taskId})" id="task${taskId}" />
        <label for="task${taskId}" >${newTask}</label>
    `
    todoContainer.prepend(li);

    taskId++;
    newTaskElement.value = '';

})

function markComplete(taskId) {
    let taskCheckbox = document.getElementById(`task${taskId}`)
    let task = taskCheckbox.nextElementSibling.innerText; // innerText of Label

    // Adding task to completed container
    let completedContainer = document.getElementById('completed-container')
    
    let button = document.createElement('button')
    button.classList.add('delete');
    button.innerText = 'Delete';
    button.onclick = deleteTask;

    let li = document.createElement('li')
    li.classList.add('item')
    li.innerText = task;
    li.appendChild(button);

    completedContainer.appendChild(li);

    // remove from incoming container
    let todoContainer = document.getElementById('items')
    todoContainer.removeChild(taskCheckbox.parentNode);
}

// deleting task
function deleteTask(event){

    let completedContainer = document.getElementById('completed-container')
    completedContainer.removeChild(event.target.parentNode)

}