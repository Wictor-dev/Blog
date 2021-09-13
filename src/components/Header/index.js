import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeColor } from '../../features/background'
import { removeColor } from '../../features/background'
import styles from './Header.module.scss'
export default function Header(){

    const dispatch = useDispatch();
   
    const onSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className={styles.headerContainer}>
            <div className={styles.title}>
                <h1>Blog</h1>
            </div>
            <form onSubmit={onSubmit} className={styles.formContainer}>
                <div>
                    <button onClick={()=>{dispatch(changeColor('black'))}}>Noturno</button>
                    <button onClick={()=>{dispatch(removeColor())}}>dia</button>
                </div>
            </form> 

        </div>
    )
}