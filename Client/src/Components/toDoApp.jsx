import React, { useState } from 'react'

const toDoApp = () => {
const [task,setTask]=useState("");
const [inputText,setInputText]=useState("");
const [editingId,setEditingId]=useState(null);
const [editText,setEditText]=useState("");

const addTask=()=>{
    if (inputText.trim()===''){
        alert('please return a task');
        return;
    }
    const newTask={
        id:Date.now(),
        text:inputText,
        completed:false,
        createdAt:new Date().toLocaleString()
    };
    setTasks([]);
    setInputText('');
}
const deleteTask=(idToDelete)=>{
    const updatedTasks=tasks.filter(task=>task.id!==idToDelete);
    setTasks(updatedTasks);

};

const startEdit = (tasks)=>{
    setEditingId(task.id);
    setEditText(task.text);
};


const saveEdit=(isToEdit)=>{
    if (editText.trim()===''){
        alert('Task cannot be empty');
        return;
    }
    const updatedTasks=tasks.map(task=>{
        if(task.id===idToEdit){
            return {
                ...task,
                text:
            }
        }
    })
}


  return (
    <div>
      


    </div>
  )
}

export default toDoApp
