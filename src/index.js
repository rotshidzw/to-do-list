// import _ from 'lodash';
// import printMe from './print.js';
import './style.css';

const todo = [
{
  descr: 'my first to do list ',
  comple: true,
  index: 0,
  },

{
  descr: 'my second to do list ',
  comple: false, 
  index: 1,
  },
];

function todoList() {
  let todoLi = '';
  todo.forEach((item) => {
    let checker;
    let strike;
    if (item.comple === true) {
      checker = 'checked';
      strike = 'strike-through';
    }
    todoLi += `<li class="task">
    <input class="task-check" type="checkbox" ${checker}>
    <span class="list ${strike}" >${item.descr}</span>
    <i class='fa fa-ellipsis-v' style="margin-left:auto"></i></li>`;
  });
  document.querySelector('.todo-list').innerHTML = todoLi;
}
todoList();
