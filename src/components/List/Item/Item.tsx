import { TaskProp } from '../../../types/task';
import style from './Item.module.scss';

interface ItemProp extends TaskProp{
    selectTask: (selectedTask: TaskProp) => void
}

const Item = ({task, time, selected, completed, id, selectTask}: ItemProp) => {
    return (
        <li className={`${style.item} ${selected ? style.selectedTask : ''} ${completed ? style.completedTask : ''}`} onClick={() => !completed && selectTask({
            task,
            time,
            selected,
            completed,
            id
        })}>
        <h3> {task} </h3>
        <span> {time} </span>
        {completed && <span className={style.completed} aria-label='Task Completed'></span>}
        </li>
    )
}

export default Item;