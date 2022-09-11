import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch"
import { TodoList } from "../TodoList"
import { TodoItem } from "../TodoItem"
import { CreateTodoButton } from "../CreateTodoButton"
import { Modal } from "../Modal"
import { TodoForm} from "../TodoForm"
import { Header } from "../Header";
import "./App.css"


function AppUI() {
    const{
        error,
        loading,
        searchTodos,
        completeTodos,
        deleteTodo,
        openModal,
        setOpenModal,
    }=React.useContext(TodoContext);
    
    return (
     <React.Fragment>
        <div className="containerNav">
        <Header/> 
        <TodoSearch/>
        </div>
        <TodoCounter />
                    <TodoList>
             {error && <p>Error reload the page</p>}
             {loading && <p>Loading...</p>}
             {(!loading && !searchTodos.length) && <p>Create your first note</p>}

             {searchTodos.map(todo => (
                <TodoItem
                 key={todo.text}
                 text={todo.text}
                 completed={todo.completed}
                 onComplete={() => completeTodos(todo.text)}
                 onDelete={() => deleteTodo(todo.text)}
                 />
                 ))}
           </TodoList>
                   
                   {!!openModal && (
                    <Modal>
                   <TodoForm/>
                    </Modal>
                    )}
                 
            <CreateTodoButton 
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    );
}


export { AppUI };