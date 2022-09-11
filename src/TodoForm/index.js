import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm(){
const [newTodoValue,setNewTodoValue]=useState('');
const{
    addTodo,
    setOpenModal,
}=useContext(TodoContext)

const onChange=(event)=>{
    setNewTodoValue(event.target.value)
    console.log(setNewTodoValue)
}
const Cancel=()=>{
    setOpenModal(false)
}
    
const onSubmit=(event)=>{
    event.preventDefault();
    addTodo(newTodoValue)
    setOpenModal(false)
}

    return(
<form className='formTask' onSubmit={onSubmit}>
    <label className="titleTask">Task</label>
        <textarea
        className="textAreaTask"
        value={newTodoValue}
        onChange={onChange}
        placeholder="Add To do">
        </textarea>
    <div className="containerButton">
    <button 
    className="buttonModal"
    type="button"
    onClick={Cancel}>
        Cancel
    </button>
    <button
    className="buttonModal"
    type="submit">
        Add
    </button>
    </div>
</form>
    )
}

export {TodoForm};
