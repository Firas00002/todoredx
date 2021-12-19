import React, { useState } from 'react'
import Addtodo from './Addtodo'

const Todo = () => {
    const [todo, setTodo] = useState([{ id: Math.random(), action: 'learn react hook',isShown:false },
                                      { id: Math.random(), action: 'learn react state' ,isShown:true},
                                      { id: Math.random(), action: 'learn react Router' ,isShown:false},
                                      { id: Math.random(), action: 'learn react Redux',isShown:true}])

   const handledelete = (i)=>{
    setTodo([...todo.filter((el)=>el.id !==i)])
   }
   
   const handledone = (i)=>{
    setTodo(todo.map((el)=>el.id===i?{...el,isShown:!el.isShown}:el))}

    const handleadd =(input)=>{
        const newtask ={
            id:Math.random(),
            action:input,
            isShown:false
        }
setTodo([...todo,newtask])
    }
   

    return (
        <div>
            <Addtodo change={handleadd}/>
            {todo.map((el,i)=> <li id={el.isShown?"Appp":""} key={i}>
             {el.action} 
             <button onClick={()=>handledelete(el.id)}>Delete</button> 
             <button onClick={()=>handledone(el.id)}>Done</button>
            </li>)}
        
        
        </div>
    )
}

export default Todo