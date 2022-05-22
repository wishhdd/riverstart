import React, { useState } from "react";
import styles from "./banner.module.scss";
import { CloseButton } from "../closeButton/closeButton";
import { Button } from "../button/button";

export const Banner = () => {

    const advantagesItems = [
        "Unlimited outgoing e-invoices",
        "Unlimited connected banks",
        "10 users",
        "Expense management"
    ]
    const [visible, setVisible] = useState(true)

    if (visible) {

        return (

            <aside className={styles["main"]}>
                <div className={`fontH4 ${styles["title"]}`}>Explore new features</div>
                <div className={styles["description"]} >
                    <CloseButton click={() => { setVisible(false) }} />
                    <h3 className={`fontH3 ${styles["description__title"]}`}>Invoicing Premium</h3>
                    <div className={styles["description__columns"]}>
                        <div className={styles["description__advantages"]}>
                            <ul className={styles["description-advantages__items"]}>
                                {advantagesItems.map(item => {
                                    return (<li className={styles["description-advantages__item"]} key={item}>{item}</li>)
                                })}
                            </ul>
                        </div>
                        <div className={styles["description__price-block"]}>
                            <div className={styles["price-block__price"]}>
                                <div className={styles["price-block__cost"]}>
                                    <span className="fontH3">€20.99</span>
                                    <span className="fontH5"> /mo</span>
                                </div>
                                <div className={styles["price-block__price-options"]}>billed annually or 24.99 € billed monthly
                                </div>
                            </div>
                            <Button text="Upgrade" color="primary" />
                        </div>
                    </div>
                </div>

            </aside>)
    }
    else { return <></> }

}