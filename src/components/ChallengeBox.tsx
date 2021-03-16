import styles from '../styles/components/ChallengeBox.module.css'



export function ChallengeBox() {

    const hasActiveChallenge = true

    return(

        <div className={styles.challengeBoxContainer}>

            { hasActiveChallenge ? (
                <div className = {styles.challengeActive}>

                    <header>Ganhe 400 xp</header>

                    <main>
                        <img src="mao-com-halter.png" alt="Mão levantada segurando um halter"/>
                        <strong>Novo Desafio</strong>
                        <p>Levante, faça uns alongamentos e se hidrate</p>
                    </main>

                    <footer>
                        <button 
                            type='button'
                            id={styles.challengeFailedButton}
                        >
                            Falhei
                        </button>

                        <button 
                            type='button'
                            id={styles.challengeSucceededButton}
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