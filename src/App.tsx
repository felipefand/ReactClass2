import Form from './components/Form/Form';
import List from './components/List/List';
import style from './App.module.scss';
import Chronometer from './components/Chronometer/Chronometer';
import { useState } from 'react';
import { TaskProp } from './types/task';

function App() {
  const [tasks, setTasks] = useState<TaskProp[] | []>([]);
  const [selected, setSelected] = useState<TaskProp>();

  function selectTask(selectedTask: TaskProp) {
    setSelected(selectedTask);
    setTasks(oldTasks => oldTasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false
    })))
  }

  function finishTask(){
    if (selected) {
      setSelected(undefined);
      setTasks(oldTasks => oldTasks.map(task => {
        if (task.id === selected.id) {
          return {
            ...task,
            selected: false,
            completed: true
          }
        }
        return task;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
        <Form setTasks = {setTasks}/>
        <List tasks = {tasks} selectTask={selectTask}/>
        <Chronometer finishTask={finishTask} selected={selected}/>
    </div>
  );
}

export default App;
