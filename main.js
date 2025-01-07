
const inputBox = document.getElementById('input-box');
const addButton = document.querySelector('button');
const listContainer = document.getElementById('list=container');

function addTask() {
    const taskText = inputBox.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const newTask = document.createElement('li');
    newTask.textContent = taskText;

    newTask.addEventListener('click', () => {
        newTask.classList.toggle('completed'); 
    });

    newTask.addEventListener('dblclick', () => {
        listContainer.removeChild(newTask);
    });
    listContainer.appendChild(newTask); 
    inputBox.value = ''; 
}


addButton.addEventListener('click', addTask);


inputBox.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});