import React from "react";

export default function Form({ setStatus, setInputText, todos, setTodos, inputText }){
    function inputTextHandler(e){
        console.log(e.target.value);
        setInputText(e.target.value);
    }
    function submitTodoHandler(e){
        e.preventDefault();
        setTodos([
            ...todos, 
            {text:inputText, completed:false, id: Math.random() * 1000}
        ]);
        setInputText("");
    }
    function statusHandler(e){
        setStatus(e.target.value);
    }
    return(
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input"/>
            <button onClick={submitTodoHandler} className="todo-btn" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}