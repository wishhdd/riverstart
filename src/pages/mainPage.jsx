import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import styles from "./mainPage.module.scss";
import { LeftMenu } from "../components/leftMenu/leftMenu";
import { PlanAndLimits } from "./planAndLimits/planAndLimits";
import { Profile, Security, Notifications, BusinessProfile,
    EInvoicing, Team } from "./empty/empty";


export const MainPage = () => {
    return (
        <main className={styles["main"]}>
            <BrowserRouter basename={"/riverstart"}>

                <div className={styles["mainLeftMenu"]}>
                    <LeftMenu />
                </div>

                <section className={styles["centerSection"]}>
                    <Routes>
                        <Route path="/" element={<Navigate to="/plan_and_limits" />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/security" element={<Security />} />
                        <Route path="/notifications" element={<Notifications />} />
                        <Route path="/business_profile" element={<BusinessProfile />} />
                        <Route path="/e-invoicing" element={<EInvoicing />} />
                        <Route path="/plan_and_limits" element={<PlanAndLimits />} />
                        <Route path="/team" element={<Team />} />

                    </Routes>

                </section>
            </BrowserRouter>
        </main>
    );
};
