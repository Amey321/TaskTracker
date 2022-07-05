import { Component, useState } from 'react'
const AddTask = ({ activity, addtask }) => {
  const [text,setText]= useState('')
  const [day,setDay]= useState('')
  const [reminder,setReminder]= useState(false)
  const [addT,setAddT]=useState(false)
  const dis = (e) => {
    e.preventDefault()
    setDay('')
  setText('')
  setReminder(false)
    setAddT(!addT);
  }
  const onSubmit = (e) => {
  e.preventDefault()
  if(!text)
  {
    alert("Please enter text")
    return
  }
    addtask({text, day, reminder})
  setDay('')
  setText('')
  setReminder(false)
  }
  return (
  
    <div className='addT' value= {addT}>
    
    { addT ?
    <form className='form'>
      <p> </p>
      <p> </p>
        <div className='enttask'>
            <label>Task:</label>
            <input type='text' placeholder='Enter task' value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
        <div className='abc'>
            <label>Day & Time:</label>
            <input type='text' placeholder='Enter Day & Time' value={day} onChange={(e) => setDay(e.target.value)} />
        </div>
        {/* <div className='b'>
            <label>Set Reminder</label>
            <input type='checkbox' placeholder='Enter task' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
    </div> */}
        
            <button className='subbtn' onClick={onSubmit} > Save task </button>
            <button className='closeform' onClick={dis}>X </button>
        
    </form>  : 
    <button className='btn' onClick={dis}>Create Task</button>  }
    </div>
  )
}

export default AddTask