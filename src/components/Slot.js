import React from "react";
import styles from './Slot.module.css';



const Slot = (props)=>{
    // console.log(props.object);
    let filter = props.filter;
    let selected = {};
    let previous = '';
    if(filter ==='daily'){
        selected = props.object.timeframes.daily;
        previous = 'Yesterday';
    }
    else if(filter === 'weekly'){
        selected = props.object.timeframes.weekly;
        previous = 'Last Week';
    }
    else{
        selected = props.object.timeframes.monthly;
        previous = 'Last Month';
    }

    return(
        <div className={styles["card"]} style={{backgroundColor: props.object.color, backgroundImage: `url(${props.object.icon})`}}>
            <div className={styles["block"]}>
                <div className={styles["header"]}>
                    <p className={styles["label"]}>{props.object.title}</p>
                    <i className={styles["ellipsis-icon"]}><img src="./images/icon-ellipsis.svg" alt="Ellipsis Icon"/></i>
                </div>
                <div className={styles["info"]}>
                    <h2 className={styles["time-spent-current"]}>
                        {`${selected.current}hrs`}
                    </h2>
                    <span className={styles["time-spent-previous"]}>{`${previous} - ${selected.previous}hrs`}</span>
                </div>
            </div>
        </div>
    );
}

export default Slot;