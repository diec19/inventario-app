"use client"


import { useTasks } from "../app/context/TasksContext" 



const page = () => {
  const {tasks} = useTasks()
  console.log(tasks)
  
  return (
    <div>
      

        {
        tasks.map(task=>(

            <div key={task.id}>
               <p>{task.nombre}</p>
            </div>          
          
         ))
        }
    </div>
  )
}
export default page