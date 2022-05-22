import React from "react";
import { SubMenu } from "../submenu/subMenu";
import styles from './leftMenu.module.scss'

export const LeftMenu = () => {


    const menus = [{
        title: "Personal",
        items:
            [{
                title: "Profile",
                link: "/profile"
            },
            {
                title: "Security",
                link: "/security"
            },
            { title: "Notifications",
            link: "/notifications" },
            ]
    },
    {
        title: "Tesla s.r.L.",
        items:
            [{ title: "Business profile",
            link: "/business_profile"  },
            { title: "E-invoicing",
            link: "/e-invoicing"  },
            { title: "Plan and limits",
            link: "/plan_and_limits"  },
            { title: "Team",
            link: "/team"  },]
    }]

    return (
        <aside className={styles["main"]}>
            <SubMenu menus={menus} />
        </aside>
    )
}