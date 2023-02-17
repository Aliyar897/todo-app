// import Hello from './components/Hello';

// import ClassEvent from "./components/ClassEvent";
// import ConditionalComponenet from "./components/ConditionalComponenet";
// import Counter from "./components/Counter";
// import Form from "./components/Form";
// import FuncationalCounter from "./components/FuncationalCounter";
// import FunctionEvent from "./components/FunctionEvent";
import { useState } from "react";
import Header from "./components/Header";
// import InlineComponent from "./components/InlineComponent";
// import Message from "./components/Message";
// import ModuleComponent from "./components/ModuleComponent";
// import Products from "./components/Products";
// import Profile from "./components/Profile";
// import Resume from "./components/Resume";
// import StylesheetComponent from "./components/StylesheetComponent";
// import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";


function App() {

  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      {/* <Todo></Todo> */}
      {/* <InlineComponent> </InlineComponent> */}
      {/* <StylesheetComponent> </StylesheetComponent> */}
      {/* <ModuleComponent /> */}
    <Header />
    <TodoForm 
      todo={todo} 
      setTodo ={setTodo}
      todoList ={todoList} 
      setTodoList ={setTodoList} 
    >        
    </TodoForm>
    </div>
  );
}

export default App;
