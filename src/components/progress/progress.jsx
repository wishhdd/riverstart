import React from "react";
import styles from "./progress.module.scss";

export const Progress = ({ name = "", step = 0, steps = 0, mainStyle = '', description = '' }) => {

    if (step > steps) {
        steps = step
    }
    let progress = (step / steps) * 100

    const starColor = {
        r: 65,
        g: 93,
        b: 232,
    }
    const endColor = {
        r: 255,
        g: 87,
        b: 98
    }

    const colorStep = (start, end) => {
        return (end - start) / 50
    }

    let color = `rgb(${starColor.r} ${starColor.g} ${starColor.b})`

    if (progress > 50) {
        color = `rgb(
        ${starColor.r + colorStep(starColor.r, endColor.r) * (progress - 50)}
        ${starColor.g + colorStep(starColor.g, endColor.g) * (progress - 50)}
        ${starColor.b + colorStep(starColor.b, endColor.b) * (progress - 50)})`
    }

    progress = progress + "%"
    if (step === Infinity) {
        progress = "100%"
    }

    return (
        <div className={mainStyle}>
            <div className={styles["head"]}>
                <div className={styles["head__title"]}>{name}</div>
                <div className={styles["head__progress"]}>
                    {step === Infinity ? "Unlimited"
                        : (<>
                            <span className={styles["head__step"]}>{step}</span>
                            <span> / {steps}</span>
                        </>)

                    }
                </div>
            </div>
            <div className={styles["progressBar"]} style={{
                "--percentages": progress,
                "--colorPercentages": color
            }}></div>
            <div className={styles["description"]}>
                <span className={styles["description__text"]}>{description.text}</span>
                {description.link && <a className={styles["description__link"]} href={description.link.address}>{description.link.text}</a>}

            </div>
        </div>
    )
}