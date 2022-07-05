import SingleTask from "./SingleTask"
const Task = ({activities,del}) => {
  return (
    <>
        {activities.map((activity) => 
        <SingleTask activity={activity} del={del}/>
     
        ) }
    </>
  )
}

export default Task