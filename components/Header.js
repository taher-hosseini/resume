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

export default function Header() {
    const [isDarkTheme, setIsDarkTheme] = useState(getInitialTheme);
    const [activeSection, setActiveSection] = useState('home');
    const sectionRefs = useRef([]);

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


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sectionRefs.current.forEach(section => observer.observe(section));

        return () => {
            sectionRefs.current.forEach(section => observer.unobserve(section));
        };
    }, []);

    const scrollToSection = (sectionId) => {
        const section = sectionRefs.current.find(ref => ref.id === sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={`${styles.header} header_g`}>
            <div className="container">
                <nav className={styles.nav}>
                    <ul className={styles.menu}>
                        <li data-section="home" className={`${styles.menu__item} ${styles.menu__item_active}`}>
                            <a href="#" className={styles.menu__link}>خانه</a>
                        </li>
                        <li data-section="aboutus" className={styles.menu__item}>
                            <a href="#" className={styles.menu__link}>درباره من</a>
                        </li>
                        <li data-section="resume" className={styles.menu__item}>
                            <a href="#" className={styles.menu__link}>رزومه</a>
                        </li>
                        <li data-section="portfolio" className={styles.menu__item}>
                            <a href="#" className={styles.menu__link}>تصاویر</a>
                        </li>
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
