// components/Footer.js
import styles from '../styles/Footer.module.css';
import {useEffect, useState} from "react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <footer className={styles.footer}>
                    <p className={styles.footer__copy_right}>© {currentYear} تمامی حقوق محفوظ است.</p>
                </footer>
            </div>
        </footer>
    );
}
