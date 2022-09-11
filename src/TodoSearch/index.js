import React, { useContext } from "react";
import { TodoContext } from '../TodoContext';
import './TodoSearch.css'
import { FaSearch } from "react-icons/fa";

function TodoSearch(){
    const {searchValue,setSearchValue}=useContext(TodoContext);
    const onSearchValueChange=(event)=>{
    setSearchValue(event.target.value)
    }
    return(
        <div className="containerSearch">
        <input
        className="TodoSearch" 
        placeholder="Search your note"
        value={searchValue}
        onChange={onSearchValueChange}/>
           <div className="search">
        <span className="iconSearch"><FaSearch/></span>
        </div>
        </div>
    )
}

export { TodoSearch };