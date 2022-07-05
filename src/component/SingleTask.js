const SingleTask=({ activity, del }) => {
  return (
    <div className="singletask">
        <h3>{activity.text}</h3>
        <h3>{activity.day}</h3>
        <button className="delbtn" onClick={() => del(activity.id)}>Delete</button>
    </div>
  )
}

export default SingleTask