import React from "react";
import './Task.css'
import {CgClose, CgInfo} from "react-icons/cg"
import { useHistory } from "react-router-dom";

const Task = ({task,handleTaskClick,handleTaskDeletion}) => {
     const history = useHistory();

     const handleTaskDetailsClick = () => {
          history.push(`/${task.title}`)
     }

    return (
        <div className='task-container'
          style={task.completed ? {borderLeft: "6px solid chartreuse"} : {}}
        >
            <div className="task-title" onClick={() => handleTaskClick(task.id)}>
               {task.title}
            </div>

          <div className="button-container">
               <button onClick={handleTaskDetailsClick}  className="see-task-details-task">
                    <CgInfo/>
               </button>
               
               <button onClick={() => handleTaskDeletion(task.id)}  className="remove-task">
                    <CgClose/>
               </button>

           
          </div>

        </div>
     );
}
 
export default Task;