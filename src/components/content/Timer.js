import React, { useState, useEffect, useCallback } from 'react';
import "./Content.css";


const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
        },
        [playing, audio]
    );

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
        audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, [audio]);

    return [playing, toggle];
};

function Timer ({src}) {
    // eslint-disable-next-line no-unused-vars
    const [playing, toggleAudio] = useAudio("/beep-01a.mp3");
    const [endTime, setEndTime] = useState(-1);
    const [timeLeft, setTimeLeft] = useState(parseFloat(src)*60*1000);

    const [ticking, setTicking] = useState(false);

    const start = () => {
        const time = (new Date()).getTime();
        setEndTime(time+timeLeft);
        setTicking(true);
    };

    const pause = () => {
        setTicking(false);
        const time = (new Date()).getTime();
        const timeLeft = endTime-time;
        setTimeLeft(timeLeft);
    };

    const reset = useCallback(() => {
        setTicking(false);
        setTimeLeft(parseFloat(src)*60*1000);
    }, [src]);

    const getTimeLeft = useCallback(() => {
        const time = (new Date()).getTime();
        const timeLeft = endTime-time;
        return timeLeft;
    }, [endTime]);
        

    const getFormattedTime = () => {
        const pad = (n) => {
            return String(n).padStart(2, '0');
        }
        const seconds = ~~((timeLeft+500)/1000)%60;
        const minutes = ~~(timeLeft/(60*1000))%60;
        const hours = ~~(timeLeft/(60*60*1000));

        const fSeconds = pad(seconds);
        const fMinutes = (hours > 0 ? pad(minutes) : String(minutes)).concat(":");
        const fHours = (hours > 0 ?  String(hours).concat(":") : "");

        return `${fHours}${fMinutes}${fSeconds}`;
    }

    useEffect( () => {
        if (isNaN(timeLeft)) {
            return;
        }
        const interval = setInterval(() => {
            if (ticking) {
                const timeLeft = getTimeLeft();
                if (timeLeft < 0) {
                    reset();
                    toggleAudio();
                } else {
                    setTimeLeft(getTimeLeft());
                }
                

            }
        }, 1000);
        return () => clearInterval(interval);
    }, [timeLeft, ticking, getTimeLeft, reset, toggleAudio]);


    const startButton = <i className="material-icons" onClick={start}>play_arrow</i>;
    const pauseButton = <i className="material-icons" onClick={pause}>pause</i>;

    return (
        <div className="timer">
            {getFormattedTime()}
            {ticking ? pauseButton : startButton}
            <i className="material-icons" onClick={reset}>replay</i>
            
        </div>
    );

}

export default Timer;
