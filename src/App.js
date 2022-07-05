import Header from './component/Header';
import Task from './component/Task';
import AddTask from './component/AddTask';
import SingleTask from './component/SingleTask';
import { useState } from 'react'
import { render } from '@testing-library/react';
const App = () => {
  const [activities,setActivities]=useState([
    {
        id: -1,
        text:'Doctors Appointment',
        day: 'Feb 6th at 2:30pm',
        reminder: true,
    },
    {
        id: -2,
        text:'Buying milk',
        day: 'Feb 18th at 7:30am',
        reminder: true,
    },
    {
        id: -3,
        text:'Taking medicines',
        day: 'Feb 20th at 2:30pm',
        reminder: false,
    }
])
let i=3
const addtask = (activity) => {
  
  const id=Math.floor(Math.random()*10000)+1
  console.log(id)
  const temp={id, ...activity}
setActivities([...activities,temp])
}
const del = (id) => {
  setActivities(activities.filter((activities) => activities.id !== id))
}
const loadform = () => {
  return(
    <div>
      <h1>Hello</h1>
      <AddTask activities={activities} addtask={addtask}/> 
    </div>
  )
}
  return (
    
    <div>
    
      <Header />
      <AddTask activities={activities} addtask={addtask}/>  
      <Task activities={activities} del={del} />
    </div>
  )
}

  
export default App;