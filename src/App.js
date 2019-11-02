import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';




class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

constructor(){
  super();
  this.state ={
   todolist: [
    {
      task: 'Wash Dishes',
      id: 1,
      completed: false
    },
    {
      task: 'Vaccum Floors',
      id: 2,
      completed: false
    },
    {
      task: 'Get Groceries',
      id:3,
      completed: false
    },
    {
      task: 'Meal Prep',
      id: 4,
      completed: false
    } 
 
  
  ],
  todos: ''
  }
}
formHandleChanges = e => {
  this.setState({
    todoName: e.target.value
  });
};


 
 

toggleCompleted = todoId => {
  console.log("toggleCompleted: ", todoId);

  this.setState({
    todolist: this.state.todolist.map(todo => {
      if (todo.id === todoId) {
        return {
          ...todo,
         completed: !todo.completed
        };
      }
      return todo;
    })
  });
};

clearCompleted = () => {
  console.log("clearCompleted");
  this.setState({
    todolist: this.state.todolist.filter(todo => {
      return !todo.completed;
    })
  });
};
addTodo = todoName => {
  console.log(todoName.task);
  todoName.preventDefault();

  this.setState({
    todolist: [
      ...this.state.todolist,
      {
        task: this.state.todoName,
        id: Date.now(),
        completed: false
      }
    ]
  });
}
/*formHandleSubmit = e => {
  e.preventDefault();
  if (this.state.todoName !== "") {
    this.props.addTodo(this.state.todoName);
    this.setState({
      todoName: ""
    });
  }
};*/

  render() {
    return (
      <div>
        <div>
        <h2>Todo List</h2>
        <TodoForm 
          formAddTodo= {this.addTodo}
          formClearCompleted ={this.clearCompleted}
          //formHandleSubmit = {this.formHandleSubmit}
          formHandleChanges= {this.formHandleChanges}
        />
        </div>
        <TodoList
        todolist ={this.state.todolist}
        toggleCompleted={this.toggleCompleted}
        //todoHandleClick={this.todoHandleClick}

       
        />
      </div>
    );
  }}


export default App;
