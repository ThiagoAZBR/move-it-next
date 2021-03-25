import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal() {

    const { level, closeLevelUpModal } = useContext(ChallengesContext);

    return (

        <div className={styles.global}>

            <div className={styles.modal}>
                <header>
                    { level }
                    <img src="coroa-de-louros.svg" alt=""/>
                </header>

                <strong>
                    Parabéns
                </strong>

                <p>
                    Você Alcançou Um Novo Level!
                </p>

                <button type='button' onClick={closeLevelUpModal}>
                    <img src="Fechar.svg" alt=""/>
                </button>

            </div>

        </div>

    )

}