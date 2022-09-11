import React, { useState,createContext } from "react";
import {useLocalStorage } from "./useLocalStorage";


const TodoContext=createContext();


function TodoProvider(props){

    const {
        item:todos,
        saveItem:saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS1', []);
      const [searchValue, setSearchValue] = useState('');
      const [openModal, setOpenModal] = useState(false);
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
      // console.log(todos)
    
      let searchTodos = [];
      if (!searchValue.length >= 1) {
        searchTodos = todos;
      } else {
        searchTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        });
      }

      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          completed:false,
          text,
        })
        saveTodos(newTodos);
      };

      const completeTodos = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
      };
    
      const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      };
    
    return(
      <TodoContext.Provider value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchTodos,
        addTodo,
        completeTodos,
        deleteTodo,
        openModal,
        setOpenModal,
      }}>
    {props.children}
</TodoContext.Provider>
    );
}

export {TodoContext,TodoProvider};
