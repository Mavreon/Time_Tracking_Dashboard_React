import React from "react";
import styles from './Profile.module.css';

const Profile = (props)=>{
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
                <p>Daily</p>
                <p>Weekly</p>
                <p>Monthly</p>
            </div>
        </div>
        
    );
};

export default Profile;