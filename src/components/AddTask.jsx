import React, { useState } from "react";
import "./AddTask.css"
import Button from "./Button";

const AddTask = ({handleTestAddition}) => {
    const [inputData,setInputDate] = useState('')

    const handleInputChange = (e) => {
        setInputDate (e.target.value)
    }

    const handleAddTaskClick = () => {
        handleTestAddition(inputData)
        setInputDate("")
    }

    return  (
        <div className="add-task-container">
            <input value={inputData}  onChange={handleInputChange}  className='add-task-input' type="text" />
            <div className="add-task-button-container">
                 <Button onClick={handleAddTaskClick}>Adicionar</Button>

            </div>
        </div>
    )
}
 
export default AddTask;