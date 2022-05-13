import { saveLocal } from './status.js';

export function add(list) {
  list.push({ description: document.querySelector('#task-1').value, isCompleted: false, index: list.length + 1 });
  document.querySelector('#task-1').value = '';
  saveLocal(list);
}

export function updateIndex(list) {
  let i = 1;
  list.forEach((elem) => {
    elem.index = i;
    i += 1;
  });
}

export function removeDone(list) {
  list = list.filter((elem) => elem.isCompleted === false);
  updateIndex(list);
  saveLocal(list);
}