import React from "react";
import styles from './Profile.module.css';

const Profile = (props)=>{
    const OnClickDaily=()=>{
        props.onSelectFilter('daily');
    };
    const OnClickWeekly=()=>{
        props.onSelectFilter('weekly');
    };
    const OnClickMonthly=()=>{
        props.onSelectFilter('monthly');
    };

    return(
        <div className={styles["block"]}>
            <div className={styles["profile-box"]}>
                <div className={styles["photo-box"]}>
                    <img src="./images/image-jeremy.png" alt="Jeremy Profile Photo"/>
                </div>
                <div className={styles["text-box"]}>
                    <span className={styles["header-text"]}>Report for</span>
                    <h2 className= {styles["name"]}>Jeremy Robson</h2>
                </div>
            </div>
            <div className={styles["filter-box"]}>
                <p onClick={OnClickDaily}>Daily</p>
                <p onClick={OnClickWeekly}>Weekly</p>
                <p onClick={OnClickMonthly}>Monthly</p>
            </div>
        </div>
        
    );
};

export default Profile;