const inputEl = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoListEl = document.getElementById('todo-list');

let todos = [];

function addTodo(){
    const text = inputEl.value.trim();

    if(text){
        todos.push({text: text});
        console.log(todos);

        inputEl.value = '';
        
    }
}

addBtn.addEventListener('click', addTodo);