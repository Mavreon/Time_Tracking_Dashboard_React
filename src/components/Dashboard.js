import React from "react";
import styles from "./Dashboard.module.css"
import Slot from "./Slot";

const Dashboard = (props)=>{
    return(
        <div className={styles["wrapper"]}>
            {
                props.data.map(
                    object => <Slot key={object.title} object={object} filter = {props.filter}/>
                )
            }
        </div>
    );
};

export default Dashboard;