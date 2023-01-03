import React, { useEffect, useState } from "react";
import "./app.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

export default function App(){
    //Hooks
    //useState
    const [inputText, setInputText] = useState(""); //setInputText is the function that will change the value of the inputText
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);
    //useEffect
    useEffect(()=>{
        getLocalTodos();
    },[]);
    useEffect(()=>{
        filterHandler();
        saveLocalTodos();
    },[todos,status])//It means that this useEffect will apply the function filterHandler only when the todos or status change
    //Functions
    function filterHandler(){
        switch(status){
            case "completed":
                setFilteredTodos(todos.filter((todo)=>todo.completed===true));
                break;
            case "uncompleted":
                setFilteredTodos(todos.filter((todo)=>todo.completed===false));
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    }
    //Save to local
    function saveLocalTodos(){
        localStorage.setItem("todos",JSON.stringify(todos));
    }
    function getLocalTodos(){
        if(localStorage.getItem("todos")===null){
            localStorage.setItem("todos",JSON.stringify([]));
        }
        else{
            let todoLocal = JSON.parse(localStorage.getItem("todos"));
            setTodos(todoLocal);
        }
    }
    return(
        <div className="app">
            <header>
                <h1>Taher's Todo List</h1>
            </header>
            <Form setStatus={setStatus} inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
            <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>
        </div>
    )
}