import style from "./List.module.scss";

const List = () => {
    const tasks = [
        {
            task: 'React',
            time: '02:00:00'
        },
        {
            task: 'Javascript',
            time: '01:00:00'
        },
        {
            task: 'Typescript',
            time: '03:00:00'
        }
    ]

    return (
        <aside className={style.taskList}>
            <h2>Daily Studies</h2>
            <ul>
                {tasks.map(t => <li key={t.task} className={style.item}> <h3>{t.task}</h3><span>{t.time}</span></li>)}
            </ul>
        </aside>
    )
}

export default List;