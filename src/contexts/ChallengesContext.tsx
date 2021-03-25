import { createContext, useState, ReactNode, useEffect } from 'react';
import Cookies from 'js-cookie';
import challenges from '../../challenges.json';
import { LevelUpModal } from '../components/LevelUpModal';


interface Challenge {

    type: 'body' | 'eye';
    description: string;
    amount: number;

}

interface ChallengesContextData {

    level: number;
    currentExperience: number;
    challengesCompleted: number;
    activeChallenge: Challenge;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    completeChallenge: () => void;
    closeLevelUpModal: () => void;
    experienceToNextLevel: number;
    ready: boolean;
    turnReadyOn: () => void;
    turnReadyOff: () => void;

}

interface ChallengesProviderProps {

    children: ReactNode;
    level: number;
    currentExperience: number;
    challengesCompleted: number;

}

export const ChallengesContext = createContext({} as ChallengesContextData);


export function ChallengesProvider(
    { 
    children, 
    ...rest
    }: ChallengesProviderProps) {

    const [level, setLevel] = useState(rest.level ?? 1);
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
    const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0)

    const [activeChallenge, setActiveChallenge] = useState(null)
    const [showLevelUp, setShowLevelUp] = useState(false)
    const [ready, setReady] = useState(true)

    const experienceToNextLevel = Math.pow((level + 1) * 2, 2)

    useEffect(() => {

        Notification.requestPermission();

    }, [])

    useEffect(() => {

        Cookies.set('level', String(level))
        Cookies.set('currentExperience', String(currentExperience))
        Cookies.set('challengesCompleted', String(challengesCompleted))
        
    }, [level, currentExperience, challengesCompleted])

    function turnReadyOn() {

        setReady(true)

    }

    function turnReadyOff() {

        setReady(false)

    }

    function levelUp() {

        setLevel(level + 1);
        setShowLevelUp(true);

    }

    function closeLevelUpModal() {

        setShowLevelUp(false)

    }

    function startNewChallenge() {

        turnReadyOff()
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge)

        new Audio('/notification.mp3').play();

        if (Notification.permission === 'granted') {

            new Notification('Novo Desafio!!!', {

                body: `Valendo ${challenge.amount}xp!`

            })

        }



    }

    function resetChallenge() {

        setActiveChallenge(null)
        turnReadyOn()

    }

    function completeChallenge() {

        if (!activeChallenge) {

            return;

        }

        const { amount } = activeChallenge;

        let finalExperience = currentExperience + amount;

        if ( finalExperience >= experienceToNextLevel) {

            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();

        }

        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        turnReadyOn()
        setChallengesCompleted(challengesCompleted + 1);

    }


    return (

        <ChallengesContext.Provider 
            value={{ level,
                    startNewChallenge,
                    currentExperience,
                    challengesCompleted,
                    levelUp,
                    activeChallenge,
                    resetChallenge,
                    experienceToNextLevel,
                    completeChallenge,
                    closeLevelUpModal,
                    turnReadyOff,
                    turnReadyOn,
                    ready }}
        >
            {children}

        { showLevelUp && <LevelUpModal />}
            
        </ChallengesContext.Provider>

    )

}

