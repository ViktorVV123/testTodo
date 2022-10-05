import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import button from "./Button";

type InputType={
    callBack:(newTask:string)=>void
}

const InputPlusButton = (props:InputType) => {
    let [newTask, setNewTask] = useState('')
    const onClickInputHandler = () => {
        if(newTask.trim()!=='')
            props.callBack(newTask)
        setNewTask('')
    }
    const addNewTask = (event:ChangeEvent<HTMLInputElement>) => {
        setNewTask(event.currentTarget.value)
    }
    const onKeyDownHandler = (event:KeyboardEvent<HTMLInputElement>) => {
        if (event.key==='Enter'){
            onClickInputHandler()

        }
    }
    return (
        <div>
            <input
                value={newTask}
                onChange={addNewTask}
                onKeyDown={onKeyDownHandler}

            />
            <button onClick={onClickInputHandler}>+</button>
        </div>

    );
};

export default InputPlusButton;