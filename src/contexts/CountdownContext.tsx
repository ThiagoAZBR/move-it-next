import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData {

    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    StartCountdown: () => void;
    ResetCountdown: () => void;
    // modifyTimer: (parameter) => any;

}

interface CountdownProviderProps {

    children: ReactNode;

}

let countdownTimeout: NodeJS.Timeout

export const CountdownContext = createContext({} as CountdownContextData)

export function CountdownProvider( {children} : CountdownProviderProps ) {

    const { startNewChallenge, turnReadyOff } = useContext(ChallengesContext);

    const [time, setTime] = useState(5);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    // function modifyTimer(parameter: any) {

    //     setTime(parseInt(parameter))

    // }
    
    function StartCountdown() {
        setIsActive(true)
    }

    function ResetCountdown() {

        clearTimeout(countdownTimeout);
        setIsActive(false);
        setHasFinished(false);

        if (time == 0) {

            setTime(1 * 60)

        }

    }

    useEffect(() => {

        if (isActive && time > 0) {

            countdownTimeout = setTimeout(() => {

                setTime(time - 1)

            }, 1000)

        } else if (isActive && time === 0) {

            setHasFinished(true)
            turnReadyOff()
            setIsActive(false)
            startNewChallenge()

            
        }

    }, [isActive, time])

    return (

        <CountdownContext.Provider value={{

            minutes,
            seconds,
            hasFinished,
            isActive,
            StartCountdown,
            ResetCountdown
            // modifyTimer

        }}>

            {children}

        </CountdownContext.Provider>

    )


}