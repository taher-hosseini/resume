// components/HomeSection.js
import styles from '../styles/HomeSection.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {Fragment} from "react";

export default function HomeSection() {
    return (
        <section className={`${styles.home} home_g`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className={`col-12 col-lg-7 ${styles.home_wrapper}`}>
                        <div className={styles.home__content}>
                            <h3 className={styles.home__name }>
                                طاهر حسینی نسب<span></span>
                            </h3>
                            <h2 className={styles.home__title}>توسعه دهنده فرانت اند</h2>
                            <p className={styles.home__caption}>
                                توسعه دهنده فرانت اند با React و Next-JS
                            </p>
                            <div className={styles.home__links_wrapper}>
                                <a href="https://github.com/taher-hosseini" className={`${styles.app_btn} app_btn_g`} target="_blank">
                                    گیت هاب من
                                    <FontAwesomeIcon icon={faGithub}  />
                                </a>
                                <a href="https://www.linkedin.com/in/taher-hosseini-nasab/" className={`${styles.app_btn} ${styles.app_btn_orange} app_btn_g`} target="_blank">
                                    آدرس لینکدین
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={`col-12 col-lg-5 ${styles.home_wrapper}`}>
                        <div className={`${styles.home__photo} home__photo_g`}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
