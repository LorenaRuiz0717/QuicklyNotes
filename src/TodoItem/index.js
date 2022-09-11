import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  // const onCompleted=()=>{
  //   alert("Complete your task "+ props.text)
  // }
  
  // const onDelete=(props)=>{
  //   alert("Delete your task "+ props.text)
  // }
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} 
      onClick={props.onComplete}>
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete"
      onClick={props.onDelete}>
        X
      </span>
    </li>
  );
}

export { TodoItem };