import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/CompletedChallenges.module.css'

export function CompletedChallenges() {

    const { challengesCompleted, ready } = useContext(ChallengesContext);
    let size_screen

    if (typeof window !== "undefined") {
        // browser code
        size_screen = window.innerWidth
      }

    return (
        <div>
            {size_screen <= 430 ? (
            <>
            {ready && (

                <div className = {styles.completedChallengesContainer}>

                <span>Desafios Completos!</span>
                <span>{challengesCompleted}</span>

                </div>

            )}
            </>
            ) : (
                <div className = {styles.completedChallengesContainer}>

                <span>Desafios Completos!</span>
                <span>{challengesCompleted}</span>

                </div>
            )}



        </div>


    )

}