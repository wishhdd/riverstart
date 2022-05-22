import React, { useState } from "react";
import { Banner } from "../banner/banner";
import { Button } from "../button/button";
import styles from "./plan.module.scss";

export const Plan = () => {

    const[plan, setPlan] = useState({cost:"6.99", save:"24.00"})

    return (
        <div className={styles["main"]}>
            <span className={styles["changePlan"]} onClick={() => setPlan({cost:Math.round(Math.random()*10000)/100, save:Math.round(Math.random()*10000)/100})
            } >
            Change plan</span>
            <h1 className={`fontH1 ${styles["title"]}`}>Invoicing Start</h1>
            <div className={styles["price"]}>
                <span className="fontH2">{plan.cost} €</span>
                <span className="colorTextLight fontH4"> /mo</span>
            </div>
            <div className={styles["payInfo"]}>
                <span className={`fontTextSmall ${styles["date"]}`}>
                    We’ll charge 6,99 € on Jul 24, 2020
                </span>
                <span className={`fontTextSmall ${styles["changeCard"]}`}>
                    Change card *** 5423 or billing info
                </span>
            </div>
            <div className={styles["switch"]}>
                <Button text="Switch to annual plan" color="secondary" style={styles["switch__button"]}/>
                <span>
                    and save {plan.save} € a year
                </span>
            </div>
            <Banner />
        </div>

    );
};