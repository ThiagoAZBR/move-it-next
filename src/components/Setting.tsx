import { useContext, useState } from 'react'
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../styles/components/Settings.module.css'



export function Settings() {

    const { modifyTimer } = useContext(CountdownContext)

    const [activeConfig, setActiveConfig] = useState(false)
    const [showArrow, setShowArrow] = useState(true)
    const [title, setTitle] = useState(0)

    function setShowOptions() {

        setActiveConfig(true)
        setShowArrow(false)

    }

    function setNotShowOptions() {

        setActiveConfig(false)
        setShowArrow(true)
        

    }

    function sendVibes() {

        modifyTimer(title)

    }

    let inputNumber = null

    if (typeof window !== "undefined") {
        // browser code
        inputNumber = document.querySelector("#inputNumber")
      }


    return (
        <div className={styles.global}>

            {showArrow && (
                <button type='button' id={styles.buttonClose} onClick={setShowOptions}>
                    <img src="seta-branca.png" alt=""/>
                </button>

            )}

            {activeConfig && (

                <div className={styles.config}>
                    <div className={styles.optionsConfig}>
                        <button 
                            type='button' 
                            onClick={setNotShowOptions} 
                            id={styles.closeOptions}
                        >
                            <img src="ecs.svg" alt="" id={styles.imgClose} />
                        </button>
                        <p id={styles.phraseConfig}>
                            - Digite o Valor do Temporizador -
                        </p>
                        <p id={styles.phraseConfig2}>Após Isso Clique No X de Fechar</p>
                        <input onChange={event => setTitle(parseInt(event.target.value))} type="number" id={styles.inputNumber} />
                        <input type="submit" value="Enviar" id={styles.submittButton} onClick={sendVibes} />
                        <p id={styles.tipsNumbers}>
                            - 15 minutos = 900 <br />
                            - 25 minutos = 1500 <br />
                            - 30 minutos = 1800 <br />
                            - 1 hora = 3600
                        </p>
                    </div>
                </div>



            )}

        </div>
    )

}