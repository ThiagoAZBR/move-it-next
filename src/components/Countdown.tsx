import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css'


export function Countdown() {

    const { 

        minutes,
        seconds,
        hasFinished, 
        isActive,
        StartCountdown, 
        ResetCountdown
    
        } = useContext(CountdownContext)
    
    const { ready } = useContext(ChallengesContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');
    let size_screen

    if (typeof window !== "undefined") {
        // browser code
        size_screen = window.innerWidth
      }

    return (
        <div>
            {size_screen <= 830 ? (
                <>
            
            {ready && (
                //  ------------------
        <div>
        <div className = {styles.countdownContainer}>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRight}</span>
            </div>
            
            <span>:</span>

            <div>
                <span>{secondLeft}</span>
                <span>{secondRight}</span>
            </div>
        </div>
        
        {hasFinished ? (

            <button 
            disabled
            className={styles.countdownButton}
            >
            Ciclo Encerrado
            </button>

        ) : (
            <>
                {isActive ? (
                <button 
                    type='button' 
                    className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                    onClick={ResetCountdown}
                >
                    Abandonar Ciclo
                </button>

                ) : (
                <button 
                    type='button' 
                    className={styles.countdownButton} 
                    onClick={StartCountdown}
                >
                    Iniciar Um Ciclo
                </button>
                )}
            </>
        ) }
    </div>

                //  ------------------
            )}
                </>
            ) : (
                <div>
                <div className = {styles.countdownContainer}>
                    <div>
                        <span>{minuteLeft}</span>
                        <span>{minuteRight}</span>
                    </div>
                    
                    <span>:</span>
        
                    <div>
                        <span>{secondLeft}</span>
                        <span>{secondRight}</span>
                    </div>
                </div>
                
                {hasFinished ? (
        
                    <button 
                    disabled
                    className={styles.countdownButton}
                    >
                    Ciclo Encerrado
                    </button>
        
                ) : (
                    <>
                        {isActive ? (
                        <button 
                            type='button' 
                            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                            onClick={ResetCountdown}
                        >
                            Abandonar Ciclo
                        </button>
        
                        ) : (
                        <button 
                            type='button' 
                            className={styles.countdownButton} 
                            onClick={StartCountdown}
                        >
                            Iniciar Um Ciclo
                        </button>
                        )}
                    </>
                ) }
            </div>
            )}

        </div>
    )
}