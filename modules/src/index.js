import * as task from './status.js';
import './style.css';

let list = [];
const listEl = document.querySelector('ul');

function todoList() {
  if (window.localStorage.getItem('localTasks')) {
    const localTasks = window.localStorage.getItem('localTasks');
    list = JSON.parse(localTasks);
  }
  document.querySelector('.list-1').innerHTML = '';
  list.forEach((item) => {
    const taskElement = document.createElement('li');
    taskElement.classList.add('task');
    if (item.isCompleted) {
      taskElement.classList.add('completed');
    }
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('task-check');
    checkbox.addEventListener('click', () => {
      task.status(item, list);
      todoList();
    });
    checkbox.checked = item.isCompleted;
    taskElement.appendChild(checkbox);
    const taskText = document.createElement('input');
    taskText.classList = 'task-text';
    taskText.value = item.description;
    taskText.addEventListener('change', () => {
      if (taskText.value.length > 0) {
        item.description = taskText.value;
        task.saveLocal(list);
      }
    });
    taskElement.appendChild(taskText);
    const dragIcon = document.createElement('button');
    dragIcon.classList = 'far fa-trash-alt deleteBtn';
    taskElement.appendChild(dragIcon);
    taskElement.draggable = 'true';
    document.querySelector('.list-1').appendChild(taskElement);
  });
}

document.querySelector('#task-Form').addEventListener('submit', (event) => {
  event.preventDefault();
  task.add(list);
  todoList();
});
document.querySelector('.clear-btn').addEventListener('click', () => {
  task.removeDone(list);
  todoList();
});