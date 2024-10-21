import { useState } from "react";

const TodoList = ({todo,deleteTodo,handleToggle,handleEdit,handleSave}) => {
const [editDatas,setEditData] = useState("");   
  return (
    <>
      <div>
        <h1>Todo List</h1>
        {todo.map((el)=>{
            return (
                <div key={el.id} className="border border-red-500 h-10 m-2 flex just items-center p-2">
                     <h1>{el.todo}</h1> 
                     <button className="h-8  w-50 text-white bg-gray-500 m-2 p-1 rounded-lg" onClick={()=>handleToggle(el.id)}>{el.status?"Done":"Not Done "}</button>
                     <button className="h-8  w-50 text-white bg-red-500 m-2 p-1 rounded-lg" onClick={()=>deleteTodo(el.id)}>Delete</button>
                     <button className="h-8  w-50 text-white bg-red-500 m-2 p-1 rounded-lg" onClick={()=>handleEdit(el.id,setEditData)}>Edit</button>  
                     {el.isEditing&&
                    <div>
                         <input className="border border-black" type="text" value={editDatas} onChange={(e)=>setEditData(e.target.value)} />
                         <button className="h-8  w-50 text-white bg-red-500 m-2 p-1 rounded-lg" onClick={()=>handleSave(el.id,editDatas)}>Update</button>
                    </div>
                     
                     }
                </div>
        
            )
            
        })}
      </div>
    </>
  );
};

export default TodoList;
