import React from "react";
import styles from "./Dashboard.module.css"
import Slot from "./Slot";

const Dashboard = (props)=>{
    return(
        <div className={styles["wrapper"]}>
            <Slot></Slot>
            <Slot></Slot>
            <Slot></Slot>
            <Slot></Slot>
            <Slot></Slot>
            <Slot></Slot>
        </div>
    );
};

export default Dashboard;