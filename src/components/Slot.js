import React from "react";
import styles from './Slot.module.css';

const Slot = (props)=>{
    return(
        <div className={styles["card"]}>
            <div className={styles["block"]}>
                <div className={styles["header"]}>
                    <p className={styles["label"]}>Work</p>
                    <i><img src="./images/icon-ellipsis.svg" alt="Ellipsis Icon"/></i>
                </div>
                <h2 className={styles["time-spent-current"]}>32hrs</h2>
                <span className={styles["time-spent-previous"]}>Last Week - 36hrs</span>
            </div>
        </div>
    );
}

export default Slot;