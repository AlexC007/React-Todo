import React from 'react';


const TodoForm = props => {
 

  return (
      <form /*onSubmit= {props.formHandleSubmit}*/>
        
        <input onChange= {props.formHandleChanges}type="text" name="todo"/>
        <button onClick= {props.formAddTodo}>Add Todo</button>
        <button onClick= {props.formClearCompleted}>Clear Completed</button>
      </form>
    );

}

export default TodoForm;
