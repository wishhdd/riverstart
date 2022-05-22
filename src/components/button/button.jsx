import React from "react";
import styles from "./button.module.scss";

export const Button = ({
    text = '',
    color = 'primary',
    style=''
}) => {
    return (<div className={`${styles["main"]} ${styles[color]} ${style}`}>
        <span>
            {text}
        </span>
    </div>)
}