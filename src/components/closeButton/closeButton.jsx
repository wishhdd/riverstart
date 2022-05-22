import React from "react";
import styles from "./closeButton.module.scss";

export const CloseButton = ({click}) => {
    return (
        <div className={styles["main"]} onClick={click}>
            <span></span>
            <span></span>
        </div>);
};