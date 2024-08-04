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
                <div className={`${styles.about} row about_g`}>
                    <div className={`col-12 col-lg-6 ${styles.about__cover}`}>
                        <img className={styles.about__img} src="/images/taher2.JPG" alt="about"/>
                    </div>
                    <div className={`col-12 col-lg-6 ${styles.about__content}`}>
                        <h4 className={styles.about__title}>معرفی:</h4>
                        <p className={styles.about__description}>
                            سلام! من طاهر حسینی نسب، فارغ التحصیل کارشناسی ارشد مهندسی نرم افزار از دانشگاه مدنی آذربایجان هستم. به عنوان توسعه دهنده فرانت وب با تخصص در React فعالیت می کنم. هدف من ایجاد رابط های کاربری دینامیک و بهینه سازی عملکرد وب سایت ها است. به دنبال فرصت های همکاری در پروژه های جدید هستم تا بهترین تجربه های کاربری را ارائه دهم.


                        </p>
                        <h5 className={styles.about__listTitle}>برخی از ویژگی‌ها:</h5>
                        <ul className={styles.aboutList}>
                            <li className={styles.aboutList__item}>توسعه ماژولار و قابل نگهداری</li>
                            <li className={styles.aboutList__item}>مدیریت وضعیت با Redux و Context API</li>
                            <li className={styles.aboutList__item}>توسعه رابط‌های کاربری واکنش‌گرا</li>
                            <li className={styles.aboutList__item}>مدیریت پروژه و نسخه‌گذاری با Git و GitHub</li>
                            <li className={styles.aboutList__item}>علاقه‌مند به یادگیری فناوری‌های جدید و به‌روز نگه‌داشتن مهارت‌ها</li>
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
