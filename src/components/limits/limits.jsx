import React, { useState } from "react";
import { Progress } from "../progress/progress";
import styles from "./limits.module.scss";

export const Limits = () => {

    const [showLimits, setShowLimits] = useState(true);
    const [showInvoices, setShowInvoices] = useState(false);

    const limitArray = [
        {
            name: "Team members",
            step: 3,
            steps: 6,
            description: {
                text: "Need more members?",
                link: {
                    text: "Upgrade your plan",
                    address: "#"
                }
            }
        },
        {
            name: "Outgoing e-invoices",
            step: Infinity,
            steps: Infinity,
            description: {
                text: "Send as many e-invoices as you want",
            }
        },
        {
            name: "Connected sources (banks)",
            step: 5,
            steps: 5,
            description: {
                text: "Need more banks to connect?",
                link: {
                    text: "Upgrade your plan",
                    address: "#"
                }
            }
        },
    ]

    const ShowInvoices = () => {
        setShowLimits(false);
        setShowInvoices(true)
    }
    const ShowLimits = () => {
        setShowLimits(true);
        setShowInvoices(false)
    }

    return (
        <div className={styles["main"]}>
            <div className={styles["tabs"]}>
                <span className={`${styles["tab"]} ${showLimits && styles["show"]}`} onClick={ShowLimits} >Limits</span>
                <span className={`${styles["tab"]} ${showInvoices && styles["show"]}`} onClick={ShowInvoices} >Invoices</span>
            </div>
            <div className={styles["progressBlocks"]}>
                {limitArray.map(limit => {
                    if (showLimits) {
                        return (
                            <Progress
                                key={limit.name}
                                name={limit.name}
                                step={limit.step}
                                steps={limit.steps}
                                description={limit.description}
                                mainStyle={styles["progressBlock"]} />
                        )
                    }
                    if (showInvoices) {
                        return (
                            <Progress
                                key={limit.name}
                                name={limit.name}
                                step={Math.round(Math.random()*20)}
                                steps={Math.round(Math.random()*20)}
                                description={limit.description}
                                mainStyle={styles["progressBlock"]} />
                        )
                    }
                return(<></>)
                })
                }
            </div>
        </div>
    )
}