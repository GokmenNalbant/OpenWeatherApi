import React from 'react';
import Input from './Input';
import Weather from './Weather';
import styles from "./Container.module.css";
const Container = () => {
    return (
        <>
        <div className={styles.container}>
            <Input />  
            <Weather />
        </div>
        </>
    )
}

export default Container;
