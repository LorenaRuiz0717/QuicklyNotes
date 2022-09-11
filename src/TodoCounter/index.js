import React, { useContext } from "react";
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter(){
    const {totalTodos,completedTodos}=useContext(TodoContext);
    return(
        <h3 className="TodoCounter">Completed {completedTodos}  tasks out of your {totalTodos} notes</h3>
    )
}

export { TodoCounter };