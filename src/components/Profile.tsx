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

    const AddNew = ({}) => {
        const [file, setFile] = React.useState(null)
        
        const fileHandler = (e) => {
            setFile(e.target.files[0])
        }
        
        return (
                    <div>
                        <div className={styles.personal_image}>
                            <label className={styles.label}>
                            <input type="file" onChange={fileHandler} />
                                    <figure className={styles.personal_figure}>

                                    <img src={file? URL.createObjectURL(file) : null} alt={file? file.name : null} id={styles.personal_avatar}/>


                                        <figcaption className={styles.personal_figcaption}>

                                            <img src="https://raw.githubusercontent.com/ThiagoLuizNunes/angular-boilerplate/master/src/assets/imgs/camera-white.png" />

                                        </figcaption>
                                    </figure>
                            </label>
                        </div>
                    </div>

        )
    }
    
    
    


    let size_screen

    if (typeof window !== "undefined") {
        // browser code
        size_screen = window.innerWidth
        ReactDOM.render(<AddNew />, document.getElementById('root'));
    }

    return (

        <div id={styles.root}>
            {size_screen <= 430 ? (
                <>
                {ready && (
                    <div className = {styles.profileContainer}>
                        <AddNew />
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
                    <AddNew />
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