import style from './Chronometer.module.scss';
import Button from '../Button/Button';
import Clock from './Clock/Clock';
import { timeToSeconds } from '../../common/utils/time';
import { TaskProp } from '../../types/task';
import { useEffect, useState } from 'react';

interface ChronometerProps {
    selected: TaskProp | undefined,
    finishTask: () => void
}

const Chronometer = ({selected, finishTask} : ChronometerProps) => {
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if (selected?.time) setTime(timeToSeconds(selected.time))
    }, [selected])

    function startTimer(counter: number = 0){
        setTimeout(() => {
            if (counter > 0) {
                setTime(counter - 1);
                return startTimer(counter - 1);
            }
            finishTask();
        }, 1000)
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Choose a card and begin chronometer</p>
            <div className={style.relogioWrapper}>
                <Clock time={time}/>
            </div>
            <Button onClick={() => startTimer(time)} text="Start"/>
        </div>
    )
}

export default Chronometer;