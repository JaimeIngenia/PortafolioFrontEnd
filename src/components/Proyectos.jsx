import styles from '../styles/Proyectos.module.css'
import btn_next from '../assets/btn_next.svg'

import React from 'react'
import { Card } from './Card'

export const Proyectos = () => {
  return (
    <div className={`${styles.contenedorPrincipal}  `} >
        <div className={`${styles.contenedorVertical}  col-12 `}>

            <div className={`${styles.contenedorHorizontal}  col-12`} >
                <button className={`${styles.btn_FrontEnd}`} >Front End</button>
                <button className={`${styles.btn_otros}`} >Ruby on Rails</button>
                <button className={`${styles.btn_otros}`} >Python</button>
                
            </div>

            <div className={`${styles.contenedorCards}  `} >
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>

            <img className={`${styles.btn_next}`} src={btn_next} alt="" />

        </div>
    
    
    </div>
  )
}
