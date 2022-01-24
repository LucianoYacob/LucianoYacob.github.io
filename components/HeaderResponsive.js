import React, { useState, useEffect } from 'react';
import Link from "next/link";
import styles from "./headerResponsive.module.css";
import useWindowSize from "../hooks/useWindowSize"

const HeaderResponsive = ({theme, setTheme}) => {
    const [isDeployed, setIsDeployed] = useState(false);
    const width = useWindowSize();

    const checkTheme = () => {
        if(theme === "light") {
            setTheme("dark");
        }
        else if(theme === "dark") {
            setTheme("light");
        }
    }

    useEffect(() => {
        if(width > 1000) setIsDeployed(false);
    }, [width]);

    useEffect(() => {
        const $body = document.querySelector("body");
    
        isDeployed 
        ? $body.style.overflowY = "hidden" : $body.style.overflowY = "scroll"; 
    }, [isDeployed]);


    return(
    <header className={ `${theme === "light" ? styles.stylesHLight : styles.stylesHDark} ${styles.stylesH} header`}>
    <nav className={styles.navWrapp}>
        <div>
            <h2 className={styles.h2}>
                <Link href="/">
                    <a className={styles.iconWrapp}>
                        <div className={styles.icon}>
                            <img src="/favicon.png" alt="icon" height="45" width="45"/>
                        </div>
                        <b>LucianoYacob</b>
                    </a>
                </Link>
            </h2>
        </div>

        <div className={styles.listCont}>
            <ul className={`${styles.menu} ${isDeployed && styles.menuDeploy} ${theme === "light" ? styles.menuLight : styles.menuDark }` }>
                <li className={styles.listItem} onClick={() => setIsDeployed(!isDeployed)}>
                    <Link href="/">
                        <a>Inicio</a>
                    </Link>
                </li>
                <li className={styles.listItem} onClick={() => setIsDeployed(!isDeployed)}>
                    <Link href="/proyects">
                        <a>Proyectos</a>
                    </Link>
                </li>
                <li className={styles.listItem} onClick={() => setIsDeployed(!isDeployed)}> 
                    <Link href="/cv">
                        <a>CV</a>
                    </Link>
                </li>
                <li className={styles.listItem} onClick={() => setIsDeployed(!isDeployed)}>
                    <Link href="/contact">
                        <a>Contacto</a>
                    </Link>
                </li>
            </ul>

            <div className={styles.btnContent}>
                <div onClick={(e) => setIsDeployed(!isDeployed)} className={styles.menuIcon}>
                    <span>
                        <input type="checkbox" />

                        {theme === "light" 
                        ? <img src="/icons/bars-solid-dark.svg" width="30" height="30" alt="expand_icon"/>
                        :<img src="/icons/bars-solid-light.svg" width="30" height="30" alt="expand_icon"/>
                    }
                    </span>
                </div>

                <div className={styles.menuIconBtn} >
                    <button className={styles.toggleBtn} onClick={checkTheme} >
                        {
                         theme === "light" 
                         ? <img src="/icons/moon-dark.svg" width="30" height="30" alt="toggle_icon_moon"/>
                         : <img src="/icons/sun-regular.svg" width="30" height="30" alt="toggle_icon_sun"/>
                        }
                    </button>
                </div>
            </div>   
        </div>
    </nav>
    </header>
)};

export default HeaderResponsive;