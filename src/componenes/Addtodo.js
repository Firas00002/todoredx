import React, { useState } from 'react'

const Addtodo = ({change}) => {
    const [addtask, setAddtask] = useState ("")

   
       
         return (
        <div>
            
                <input type='text' value={addtask} onChange={(event)=>setAddtask(event.target.value)} />
         
                <button onClick={()=>change(addtask)}>add task</button>
        
            
        </div>
    )
}

export default Addtodo