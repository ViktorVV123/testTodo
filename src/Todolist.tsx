import React, {ChangeEvent, ChangeEventHandler,KeyboardEvent, useState} from 'react';
import {valueType} from "./App";
import Button from "./Components/Button";
import button from "./Components/Button";
import InputPlusButton from "./Components/InputPlusButton";


type todolisyType = {
    task: Array<typeTask>
    title: string
    checkBox: (taskID: string, isDone: boolean) => void
    onClick: (value: valueType) => void
    onClickInput:(skill:string)=>void
    deleteTask:(taskID:string)=>void
}
type typeTask = {
    id: string
    skill: string
    isDone: boolean
}

export const Todolist = (props: todolisyType) => {
    const titleHandler = (skill:string) => {
        props.onClickInput(skill)
    }
    const clickBoxHandler = (taskID: string, event: ChangeEvent<HTMLInputElement>) => {
        props.checkBox(taskID, event.currentTarget.checked)
    }
    const onClickHandlerAll = () => {
        props.onClick('all')
    }
    const onClickHandlerActive = () => {
        props.onClick('active')
    }
    const onClickHandlerCompleted = () => {
        props.onClick('completed')
    }
    const deleteHandler = (taskID:string) => {
        props.deleteTask(taskID)
    }
    return (
        <div>
            {props.title}
            <div>
                <InputPlusButton callBack={titleHandler}/>

            </div>
            <div className='d-flex'> {props.task.map((e) => {
                return (
                    <div key={e.id}>
                        <li>
                            <input type='checkbox' checked={e.isDone} onChange={(event) => {
                                clickBoxHandler(e.id, event)
                            }}/>
                            {e.skill}
                        <button onClick={()=>deleteHandler(e.id)}>x</button>
                        </li>

                    </div>
                )
            })}
            </div>

            <Button callBack={onClickHandlerAll} title={'All'}/>
            <Button callBack={onClickHandlerActive} title={'Active'}/>
            <Button callBack={onClickHandlerCompleted} title={'Completed'}/>

        </div>
    );
};

