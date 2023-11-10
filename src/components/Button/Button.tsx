import style from './Button.module.scss';

interface TasksProp {
    text: string,
    type?: "button" | "submit" | "reset" | undefined
    onClick?: () => void
}

const Button = (props: TasksProp) => {
    let type = props.type ? props.type : "button";
    return (
        <button onClick={props.onClick} type={type} className={style.button}>
            {props.text}
        </button>
    )
}

export default Button;