import style from "./Form.module.scss";
import Button from "../Button/Button";
import { useState } from "react";
import { TaskProp } from "../../types/task";
import {v4 as uuidv4} from 'uuid';

const Form = ({setTasks} : {setTasks : React.Dispatch<React.SetStateAction<TaskProp[]>>}) => {
    const [formState, setForm] = useState({
        task: '',
        time: "00:00",
    });

    function addTask(event : React.FormEvent){
        event.preventDefault();
        setTasks(oldTasks => [...oldTasks, {...formState, selected: false, completed: false, id: uuidv4()}])
        setForm({
            task: "",
            time: "00:00"
        })
    }

    return (
            <form className={style.newTask} onSubmit={addTask}>
                <div className={style.inputContainer}>
                    <label htmlFor='task'>
                        Add a new Task
                    </label>
                    <input value={formState.task} onChange={event => setForm({...formState, task: event.target.value}) } type='text' name='task' id='task' placeholder='What do you want to study?' required />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor='time'>
                        Time
                    </label>
                    <input type='time' step='1' name='time' id='time' min='00:00:00' max="01:30:00" value={formState.time} onChange={event => setForm({...formState, time: event.target.value})} required/>
                </div>
                <Button type="submit"
                    text="Add"
                />
            </form>
    )
}

export default Form;