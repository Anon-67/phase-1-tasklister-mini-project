document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    buildTasks(e.target.new_task_description.value);
    form.reset();    
  })
});



function buildTasks(tasks) {
  let list = document.createElement('li');
  list.textContent = `${tasks}  `;
  document.querySelector('#tasks').appendChild(list);

  let btn = document.createElement('button');
  btn.textContent = 'X';
  list.appendChild(btn);
  btn.addEventListener('click', (e) => {
    e.target.parentNode.remove();

  })

}