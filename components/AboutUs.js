// components/AboutUs.js
import styles from '../styles/AboutUs.module.css';

export default function AboutUs() {
    return (
        <section className={styles.aboutUs}>
            <div className="container">
                <div className="section-head">
                    <h3 className="section-head__title">درباره من</h3>
                    <p className="section-head__caption"></p>
                    <span className="section-head__line"></span>
                </div>
                <div className={`${styles.about} about_g`}>
                    <div className={styles.about__cover}>
                        <img className={styles.about__img} src="/images/taher2.jpg" alt="about"/>
                    </div>
                    <div className={styles.about__content}>
                        <h4 className={styles.about__title}>معرفی:</h4>
                        <p className={styles.about__description}>
                            سلام! من طاهر حسینی نسب، فارغ التحصیل کارشناسی ارشد مهندسی نرم افزار از دانشگاه مدنی آذربایجان هستم. به عنوان توسعه دهنده فرانت وب با تخصص در React فعالیت می کنم. هدف من ایجاد رابط های کاربری دینامیک و بهینه سازی عملکرد وب سایت ها است. به دنبال فرصت های همکاری در پروژه های جدید هستم تا بهترین تجربه های کاربری را ارائه دهم.


                        </p>
                        <h5 className={styles.about__listTitle}>Here is Few Features: </h5>
                        <ul className={styles.aboutList}>
                            <li className={styles.aboutList__item}>User Interface Design</li>
                            <li className={styles.aboutList__item}>User Experience Design</li>
                            <li className={styles.aboutList__item}>Visual Commination Design</li>
                            <li className={styles.aboutList__item}>Interaction Design</li>
                            <li className={styles.aboutList__item}>Supper Support</li>
                        </ul>
                        <div className={styles.about__linksWrapper}>
                            <a href="#" className={`${styles.appBtn} ${styles.about__link}`}>Hire Me</a>
                            <a href="#" className={`${styles.appBtn} ${styles.appBtnOrange} ${styles.about__link}`}>Get
                                Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
