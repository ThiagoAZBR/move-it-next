import styles from '../styles/components/Profile.module.css'

export function Profile() {

    return (

        <div className = {styles.profileContainer}>
            <img src="https://github.com/ThiagoAZBR.png" alt=""/>
            <div>
                <strong>Thiago A Zeferino</strong>
                <p>
                    
                    <img src="up.svg" alt=""/>
                    Level 1

                </p>
            </div>
        </div>

    );

}