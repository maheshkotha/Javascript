// TOdo list 
var todos = ['item1', 'item2', 'itme3']

// Display todos list using function
function displayTodoList() {
    console.log(todos)
}
displayTodoList()

// Add new item in todos list
function addtodosItem() {
    todos.push('new item')
    displayTodoList();
}
addtodosItem();

// Add new item with customise
function addtodosItemCustomise(item) {
    todos.push(item);
    displayTodoList();
}
addtodosItemCustomise('item4');

// Update todos list
function updateTodos(item_no) {
    todos[item_no - 1] = 'update item' + item_no;
    displayTodoList();
}
updateTodos(3);

// Delete todos list item 
function deleteTodos(item_no) {
    todos.splice((item_no - 1), 1);
    displayTodoList();
}
deleteTodos(4);