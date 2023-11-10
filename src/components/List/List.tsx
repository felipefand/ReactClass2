import { TaskProp } from "../../types/task";
import Item from "./Item/Item";
import style from "./List.module.scss";

interface ListProps {
    tasks: TaskProp[],
    selectTask: (selectedTask: TaskProp) => void
}

const List = ({ tasks, selectTask } : ListProps) => {
    return (
        <aside className={style.taskList}>
            <h2>Daily Studies</h2>
            <ul>
                {tasks.map((item) => (
                    <Item selectTask={selectTask} key={item.id} {...item}  />
                ))}
            </ul>
        </aside>
    )
}

export default List;