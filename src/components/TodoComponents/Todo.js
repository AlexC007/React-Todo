import React from 'react';


const Todo = props =>{
    return(
        <div className='todo' 
        style={props.todo.completed ? {textDecoration: 'line-through'}: null}
        onClick={() => props.toggleCompleted(props.todo.id)}>
            <p>{props.todo.task}</p>
        </div>
    );
};
export default Todo;