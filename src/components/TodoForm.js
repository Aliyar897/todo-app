import { useState } from 'react';
import styles from './style.module.css'

const TodoForm = ({todo, setTodo, todoList, setTodoList}) =>{
    const [val, setVal] = useState('')
    const handleOnChange =(event) =>{
        setTodo(event.target.value);
        // console.log(todo)
    };

    const handleSubmit =(event) =>{
        event.preventDefault();
        if(todo !==''){
            let tempList = [];
        tempList = todoList;
        tempList.push(todo);
        setTodoList(tempList);

        // setTodoList([...todoList, todo]);
        // console.log(todoList)
        setTodo('')
        const items = todoList.map((item) => (
            <li>
                {item}
            </li>))
            
       setVal(items);

        }else{
            alert('Enter item')
        }
        


    }
    const handleDelete = (event)=> {
        event.preventDefault();
        console.log(todoList)
        if(todoList.length !== 0){
            let temp = [];
            temp = todoList.pop();
            // console.log(todoList)
            const items = todoList.map((item) =>(
                
                <li>{item}</li>
            ))
    
            setVal(items)
        }else{
            alert('The list is empty!')
        }

        
    }
    const handleEdit = (event) =>{
        event.preventDefault();
        // console.log('Edit clicked')
    }

    return(
        <div className={styles.todoform}>
            <form >
                <input 
                    value={todo}
                    onChange ={handleOnChange} 
                    className={styles.todoinput} 
                    type='text' 
                    placeholder="Add Todo Item">
                    
                </input>
                <button onClick={handleSubmit} className={styles.todobutton}>Add</button>
                <button onClick={handleDelete} className={styles.todobutton}>Delete</button>
                <button onClick={handleEdit} className={styles.todobutton}>Edit</button>
                <h2>List of the Items</h2>

                <ol>
                    {val}
                </ol>
            </form>
        </div>
    )
}

export default TodoForm