import React, {useState} from 'react';
import {v1} from 'uuid';
import './App.css';
import {Todolist} from "./Todolist";


export type valueType = 'all' | 'active' | 'completed'

function App() {

    let [task, setTask] = useState([
        {id: v1(), skill: 'css', isDone: true},
        {id: v1(), skill: 'js', isDone: true},
        {id: v1(), skill: 'html', isDone: false},
        {id: v1(), skill: 'ts', isDone: false},
    ])

    const checkBox = (taskID: string, isDone: boolean) => {
        setTask(task.map(el => el.id === taskID ? {...el, isDone} : el))
    }

    const [filter,setFilter]=useState('all')
    let filterChange = task
    if (filter==='active'){
        filterChange=task.filter(e=>e.isDone===true)
    }
    if (filter==='completed'){
        filterChange=task.filter(e=>e.isDone===false)
    }

    const onClick = (value: valueType) => {
        setFilter(value)
    }

    const onClickInput =(skill:string) => {
let newTask= {id:v1(), skill: skill, isDone: true}
        setTask([...task,newTask])
    }
    const deleteTask = (taskID:string) => {
        setTask(task.filter(e=>e.id!==taskID ))
    }
    return (
        <div className="app">
            <Todolist title={'Hello'}
                      task={filterChange}
                      checkBox={checkBox}
                      onClick={onClick}
                      onClickInput={onClickInput}
                      deleteTask={deleteTask}
            />
        </div>
    );
}

export default App;
