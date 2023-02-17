import React, { useState } from 'react'
import ListItem from './ListItem';

export default function Todo() {
    const [todo, setTodo] = useState(' ');
    const [todoList, setTodoList] = useState([]);
    
    const handleTodoChange = (event) =>{
        setTodo(event.target.value);
        
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        let tempList = todoList;
        tempList.push(todo)
        setTodoList(tempList);
        console.log(todoList);
        setTodo('')
    };

    return (
    <div> Todo App
        <form onSubmit={handleSubmit}>
            <input type='text' value={todo} onChange={handleTodoChange}></input>
            <button type='submit'>Add</button>
        </form>
        {todoList.map((item,index) =>(
            <ListItem key={index} name={item}></ListItem>
        ))}
    </div>
  )
}
