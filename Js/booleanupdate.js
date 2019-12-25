// todos object
var todosObj = {
    todosList: [],
    displayTodos: function() {
        if (this.todosList.length == 0) {
            console.log('Empty List');
        } else {
            console.log(this.todosList);
        }
    },
    addTodos: function(itemText) {
        this.todosList.push({
            itemText: itemText,
            completed: false
        });
        this.displayTodos();
    },
    updateTodos: function(itemNo) {
        this.todosList[itemNo - 1].completed = !this.todosList[itemNo - 1].completed;
        this.displayTodos();
    },
    deleteTodos: function(item) {
        item--;
        var a = this.todosList[item].itemText;
        this.todosList.splice(item, 1);
        console.log('deleted' + a);
        this.displayTodos();
    }
};
// todos object
var todosObj = {
    todosList: [],
    displayTodos: function() {
        if (this.todosList.length == 0) {
            console.log('Empty List');
        } else {
            console.log(this.todosList);
        }
    },
    addTodos: function(itemText) {
        this.todosList.push({
            itemText: itemText,
            completed: false
        });
        this.displayTodos();
    },
    updateTodos: function(itemNo) {
        this.todosList[itemNo - 1].completed = !this.todosList[itemNo - 1].completed;
        this.displayTodos();
    },
    deleteTodos: function(item) {
        item--;
        var a = this.todosList[item].itemText;
        this.todosList.splice(item, 1);
        console.log('deleted' + a);
        this.displayTodos();
    }
};

// display todos list 
todosObj.displayTodos();    // Empty list

// Add todos list item 
todosObj.addTodos('first item');    // [{itemText: 'first item', complete: false}]      

// Add todos in second item
todosObj.addTodos('second item');  // [{itemTex: 'first item', completed: false}, {itemText: 'second item', completed: false}]

// Update todos list 
todosObj.updateTodos(2);        // [{itemText: 'first item', completed: false}, {itemText: 'second item', completed: true}]

// delete todos list item
todosObj.deleteTodos(1);        // [{itemText: 'second item', completed: true}]


