// To-Do List App
// Create a simple to-do list app where users can add, delete, and mark tasks as complete.
// Use state to manage the list of tasks and ensure proper list key handling.
// Practice Focus: Array manipulation, state management, list rendering, and controlled components.




import { useState } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';

const TodoMain = () => {
    const [todoList,setTodoList] = useState([]);
    const [todo,setTodo] = useState("");
    const id = uuidv4();
    const addTodo = ()=>{
        const data = {
            id:id,
            todo:todo,
            status:false,
            isEditing:false
            }
        
        setTodoList([...todoList,data])
        setTodo("")
    }

    const deleteTodo = (id)=>{
        const  updatedTodoList = todoList.filter((el)=>el.id!==id)
        setTodoList(updatedTodoList);
    }
    const handleToggle = (id)=>{
        const toggleTodo = todoList.map((el)=>{
            if(el.id==id){
                return {...el,status:!el.status};
            }
            return el;
        })
        setTodoList(toggleTodo);
    }
    const handleEdit = (id,setEditData)=>{
         setEditData("")
         const editData = todoList.map((el)=>{
            if(el.id===id){
                return {...el,isEditing:!el.isEditing}
            }
            return el;
         })
        
         setTodoList(editData)
    }
    const handleSave = (id,updatedData)=>{
        const update = todoList.map((el)=>{
            if(el.id===id){
                return{...el,todo:updatedData,isEditing:false}
            }
            return el;
        })
        setTodoList(update);
    }
  return (
    <>
      <h1>TodoMain</h1>
      <div className="border border-black h-52 w-full m-3 p-3">
        <input className="border border-black" type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} /> 
        <button onClick={addTodo} className="h-6 w-20 bg-slate-900 text-white mx-2">Add</button>
      </div>
      <TodoList todo = {todoList} deleteTodo={deleteTodo} handleToggle={handleToggle}  handleEdit={handleEdit} handleSave={handleSave}/>
    </>
  );
};

export default TodoMain;
