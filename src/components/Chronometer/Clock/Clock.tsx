import style from "./Clock.module.scss"

interface ClockProps {
    time: number | undefined
}

const Clock = ({time = 0} : ClockProps) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    const [minuteTens, minuteUnity] = String(minutes).padStart(2, '0')
    const [secondTens, secondUnity] = String(seconds).padStart(2, '0')

    return (
        <>
            <span className={style.relogioNumero}>{minuteTens}</span>
            <span className={style.relogioNumero}>{minuteUnity}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{secondTens}</span>
            <span className={style.relogioNumero}>{secondUnity}</span>
        </>
    )
}

export default Clock;