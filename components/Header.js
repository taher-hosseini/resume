// components/Header.js
import styles from '../styles/Header.module.css';
import {useEffect, useState} from "react";

export default function Header() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        const root = document.documentElement;

        if (isDarkTheme) {
            root.classList.add('dark-theme');
        } else {
            root.classList.remove('dark-theme');
        }
    }, [isDarkTheme]);

    const toggleTheme = () => {
        setIsDarkTheme(prevTheme => !prevTheme);
    };

    return (
        <header className={`${styles.header} header_g`}>
            <div className="container">
                <nav className={styles.nav}>
                    <ul className={styles.menu}>
                        <li data-section="home" className={`${styles.menu__item} ${styles.menu__item_active}`}>
                            <a href="#" className={styles.menu__link}>Home</a>
                        </li>
                        <li data-section="aboutus" className={styles.menu__item}>
                            <a href="#" className={styles.menu__link}>About us</a>
                        </li>
                        <li data-section="resume" className={styles.menu__item}>
                            <a href="#" className={styles.menu__link}>Resume</a>
                        </li>
                        <li data-section="services" className={styles.menu__item}>
                            <a href="#" className={styles.menu__link}>Services</a>
                        </li>
                        <li data-section="portfolio" className={styles.menu__item}>
                            <a href="#" className={styles.menu__link}>Portfolio</a>
                        </li>
                        <li data-section="price" className={styles.menu__item}>
                            <a href="#" className={styles.menu__link}>Pricing</a>
                        </li>
                        <li data-section="contactus" className={styles.menu__item}>
                            <a href="#" className={styles.menu__link}>Contact</a>
                        </li>
                    </ul>
                    <div className={styles.change_theme} onClick={toggleTheme}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M12.3,4.9c0.4-0.2,0.6-0.7,0.5-1.1S12.2,3,11.7,3C6.8,3.1,3,7.1,3,12c0,5,4,9,9,9c3.8,0,7.1-2.4,8.4-5.9c0.2-0.4,0-0.9-0.4-1.2c-0.4-0.3-0.9-0.2-1.2,0.1c-1,0.9-2.3,1.4-3.7,1.4c-3.1,0-5.7-2.5-5.7-5.7C9.4,7.8,10.5,5.9,12.3,4.9zM15.1,17.4c0.5,0,1,0,1.4-0.1C15.3,18.4,13.7,19,12,19c-3.9,0-7-3.1-7-7c0-2.5,1.4-4.8,3.5-6c-0.7,1.1-1,2.4-1,3.8C7.4,14,10.9,17.4,15.1,17.4z"/>
                        </svg>
                    </div>
                    {/*<h1 className={styles.nav__logo}>WA</h1>*/}
                    <div className={styles.nav__toggle_icon}>
                        <div className={styles.nav__toggle_line}></div>
                    </div>
                </nav>
            </div>
        </header>
    )
        ;
}
