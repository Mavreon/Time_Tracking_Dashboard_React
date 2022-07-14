import React from "react";
import styles from "./Dashboard.module.css"
import Slot from "./Slot";

const Dashboard = (props)=>{
    return(
        <div className={styles["wrapper"]}>
            {/* {console.log(props.data)} */}
            {props.data.map(object => <Slot key={object.title} object={object} filter = {props.filter}/>)}
            {/* <Slot></Slot>
            <Slot></Slot>
            <Slot></Slot>
            <Slot></Slot>
            <Slot></Slot>
            <Slot></Slot> */}
        </div>
    );
};

export default Dashboard;