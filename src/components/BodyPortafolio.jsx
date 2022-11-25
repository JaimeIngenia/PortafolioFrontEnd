import React from 'react'
import styles from '../styles/BodyPortafolio.module.css'
import  mayor_morado from '../assets/mayor_morado.svg' 
import  portafolio from '../assets/portafolio.svg' 
import btn_next from '../assets/btn_next.svg'
import { Proyectos } from './Proyectos'


export const BodyPortafolio = () => {
  return (
    <div className={`${styles.megaPrincipal} `} >
    
        <div className={ `${styles.contenedorPrincipal}  col-12` } >        
        
           
               

                    <div className={`${styles.contenedorVertical}`}  >
                        <p className={`${styles.textoPrincipal}`} > Hi    <br /> 
                            I'm Jaime <br />
                            Web developer
                        </p>
                        <div className={`${styles.contenedorHorizontal} ${styles.contenedorFront}`}>

                            <img src={mayor_morado} alt="" />
                            <p  className={`${styles.textoFront} `} >Front End Developer</p>

                        </div>

                        <div className={`${styles.contenedorHorizontal} ${styles.contenedorBotones}`}  >
                            <button className={`${styles.btn_contact}`} >Contact me!!</button>

                            <button className={`${styles.btn_download}`}  > Dowloand </button>
                        </div>
                        <img className={styles.iconoDown} src={btn_next} alt="" />

                    </div>
                    
                    <img src={portafolio} alt="" />
                    

            
                





        </div>
        
    </div>
  )
}
