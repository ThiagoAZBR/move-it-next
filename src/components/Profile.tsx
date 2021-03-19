import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile() {

    const { level } = useContext(ChallengesContext);

    return (

        <div className = {styles.profileContainer}>
            <img src="https://github.com/ThiagoAZBR.png" alt=""/>
            <div>
                <strong>Thiago A Zeferino</strong>
                <p>
                    
                    <img src="up.svg" alt=""/>
                    Level {level}

                </p>
            </div>
        </div>

    );

}