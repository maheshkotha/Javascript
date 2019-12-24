// object syntax
var var_name = {
    key1: 'value',
    key2: 'value',
    key3: 'value3'
};



// todos object

var todosObj = {
    todosList: ['item1', 'item2', 'item3'],
    displayTodos: function() {
        console.log(this.todosList);
    },
    addTodos: function(item) {
        this.todosList.push(item);
        this.displayTodos();
    },
    updateTodos: function(item) {
        this.todosList[item - 1] = 'update item';
        this.displayTodos();
    },
    deleteTodos: function(item) {
        item--;
        this.todosList.splice(item, 1);
        this.displayTodos();
    }
};


// display todos list 
todosObj.displayTodos();

// Add todos list item 
todosObj.addTodos('new item');

// Update todos list 
todosObj.updateTodos(4);

// delete todos list item
todosObj.deleteTodos(1);


