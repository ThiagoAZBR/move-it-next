import { useContext, useEffect, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Profile.module.css'

import React from 'react';
import ReactDOM from 'react-dom';

export function Profile() {

    const { level, ready, turnReadyOn } = useContext(ChallengesContext)
    const { isActive } = useContext(CountdownContext)
    const [state, setState] = useState('plus.png')
    
    

    let size_screen

    if (typeof window !== "undefined") {
        // browser code
        size_screen = window.innerWidth
    }

    return (

        <div id={styles.root}>
            {size_screen <= 430 ? (
                <>
                {ready && (
                    <div className = {styles.profileContainer}>
                    <div>
                        <div className={styles.personal_image}>
                            <label className={styles.label}>
                                    <figure className={styles.personal_figure}>

                                        <img src="" alt=""/>

                                        <figcaption className={styles.personal_figcaption}>

                                            <img src="https://raw.githubusercontent.com/ThiagoLuizNunes/angular-boilerplate/master/src/assets/imgs/camera-white.png" />

                                        </figcaption>
                                    </figure>
                            </label>
                        </div>
                    </div>
                        <div>
                            <strong>You</strong>
                            <p>
                                <img src="up.svg" alt="" id={styles.imgLevel} />
                                 Level {level}
                            </p>
                        </div>
            </div>

                )}
                </>
            ) : (

                    <div className = {styles.profileContainer}>
                    <div>
                        <div className={styles.personal_image}>
                            <label className={styles.label}>
                                    <figure className={styles.personal_figure}>

                                        <img src="" alt=""/>

                                        <figcaption className={styles.personal_figcaption}>

                                            <img src="https://raw.githubusercontent.com/ThiagoLuizNunes/angular-boilerplate/master/src/assets/imgs/camera-white.png" />

                                        </figcaption>
                                    </figure>
                            </label>
                        </div>
                    </div>
                        <div>
                            <strong>You</strong>
                            <p>
                                <img src="up.svg" alt=""/>
                                Level {level}
                            </p>
                        </div>
                        
                        
                    </div>
                
            )}

        
        </div>

        


    );



}