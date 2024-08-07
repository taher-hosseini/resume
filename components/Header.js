// components/Header.js
import styles from '../styles/Header.module.css';
import {useEffect, useRef, useState} from "react";
import {MdDarkMode} from "react-icons/md";
import {CiLight} from "react-icons/ci";

const getInitialTheme = () => {
    if (typeof window !== 'undefined') {
        const savedTheme = localStorage.getItem('isDarkTheme');
        return savedTheme ? JSON.parse(savedTheme) : false;
    }
    return false; // مقدار پیش‌فرض در صورت عدم وجود localStorage
};

export default function Header({ sectionIds, onScrollToSection, activeSection }) {
    const [isDarkTheme, setIsDarkTheme] = useState(getInitialTheme);

    const menuItems = {
        home: "خانه",
        aboutus: "درباره من",
        resume: "رزومه",
        portfolio: "تصاویر"
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const root = document.documentElement;

            if (isDarkTheme) {
                root.classList.add('dark-theme');
            } else {
                root.classList.remove('dark-theme');
            }

            // ذخیره تم در localStorage
            localStorage.setItem('isDarkTheme', JSON.stringify(isDarkTheme));
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
                        {sectionIds.map((sectionId) => (
                            <li
                                key={sectionId}
                                className={`${styles.menu__item} ${activeSection === sectionId ? styles.menu__item_active : ''}`}
                            >
                                <a href="#" className={styles.menu__link} onClick={(e) => { e.preventDefault(); onScrollToSection(sectionId); }}>
                                    {menuItems[sectionId]}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.change_theme} onClick={toggleTheme}>
                        {isDarkTheme?<CiLight />:<MdDarkMode />}
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
