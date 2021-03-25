import styles from '../styles/components/ChallengeBox.module.css';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';


export function ChallengeBox() {

    const { activeChallenge, resetChallenge, completeChallenge, ready } = useContext(ChallengesContext);
    const { ResetCountdown, hasFinished } = useContext(CountdownContext);


    function handleChallengeSucceeded() {

        completeChallenge();
        ResetCountdown();

    }

    function handleChallengeFailed() {

        resetChallenge();
        ResetCountdown();

    }

    let size_screen

    if (typeof window !== "undefined") {
        // browser code
        size_screen = window.innerWidth
      }

    return(
        <div className={styles.global}>
            {size_screen <= 430 ? (
            <>

            {hasFinished && (
                            
            <div className={styles.challengeBoxContainer}>

                { activeChallenge ? (
                    <div className = {styles.challengeActive}>

                        <header>Ganhe {activeChallenge.amount} xp</header>

                        <main>
                            <img src={`${activeChallenge.type}.png`}/>
                            <strong>Novo Desafio</strong>
                            <p>{activeChallenge.description}</p>
                        </main>

                        <footer>
                            <button 
                                type='button'
                                id={styles.challengeFailedButton}
                                onClick={handleChallengeFailed}
                            >
                                Falhei
                            </button>

                            <button 
                                type='button'
                                id={styles.challengeSucceededButton}
                                onClick={handleChallengeSucceeded}
                            >
                                Completei
                            </button>
                        </footer>

                    </div>

                ) : (
                    <div className={styles.challengeNotActive}>
                        <strong>Finalize um ciclo para receber um desafio</strong>
                        <p>
                            <img src="level-up.svg" alt="Level Up (Subir de Nível)"/>
                            Suba de Nivel Completando Desafios
                        </p>
                    </div>
                )}

            </div>

                    )}
                </>

            ) : (
                        
                <div className={styles.challengeBoxContainer}>

                { activeChallenge ? (
                    <div className = {styles.challengeActive}>

                        <header>Ganhe {activeChallenge.amount} xp</header>

                        <main>
                            <img src={`${activeChallenge.type}.png`}/>
                            <strong>Novo Desafio</strong>
                            <p>{activeChallenge.description}</p>
                        </main>

                        <footer>
                            <button 
                                type='button'
                                id={styles.challengeFailedButton}
                                onClick={handleChallengeFailed}
                            >
                                Falhei
                            </button>

                            <button 
                                type='button'
                                id={styles.challengeSucceededButton}
                                onClick={handleChallengeSucceeded}
                            >
                                Completei
                            </button>
                        </footer>

                    </div>

                ) : (
                    <div className={styles.challengeNotActive}>
                        <strong>Finalize um ciclo para receber um desafio</strong>
                        <p>
                            <img src="level-up.svg" alt="Level Up (Subir de Nível)"/>
                            Suba de Nivel Completando Desafios
                        </p>
                    </div>
                )}

            </div>
            )}
        </div>
    );

}