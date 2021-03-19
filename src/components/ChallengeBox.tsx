import styles from '../styles/components/ChallengeBox.module.css';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';


export function ChallengeBox() {

    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);

    return(

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
                            onClick={resetChallenge}
                        >
                            Falhei
                        </button>

                        <button 
                            type='button'
                            id={styles.challengeSucceededButton}
                            onClick={completeChallenge}
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

    );

}