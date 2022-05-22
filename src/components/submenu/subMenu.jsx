import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./subMenu.module.scss"


export const SubMenu = ({ menus }) => {
    const location = useLocation();
    return (<>
        {menus.map(m => {
            return (
                <div key={m.title}>
                    <div className={`fontH6 ${styles['title']}`}>{m.title}</div>
                    <ul className={styles["items"]}>
                        {m.items.map((item) => {
                            return (
                                <Link key={item.title}
                                    className={`${styles["item"]} ${location.pathname === item.link && styles["action"]}`}
                                    to={item.link}>
                                    {item.title}
                                </Link>
                            )
                        })}
                    </ul>
                </div>
            )
        })}

    </>)
}