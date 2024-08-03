// components/ContactUs.js
import styles from '../styles/ContactUs.module.css';

export default function ContactUs() {
    return (
        <section className={styles.contactus}>
            <div className="section-head">
                <h3 className="section-head__title">Contact us</h3>
                <p className="section-head__caption">Let's Keep In Touch</p>
                <span className="section-head__line"></span>
            </div>
            <div className={styles.contactus__wrapper}>
                <div className="container h-full">
                    <div className={styles.contactus__map}>
                        <svg className={styles.contactus__icon} width="26" height="35.999" viewBox="0 0 26 35.999">
                            <path id="map_pin" data-name="map pin" d="M634,7348a13.034,13.034,0,0,0-13,13.038c0,8.921,11.634,22.019,12.129,22.572a1.168,1.168,0,0,0,1.742,0c.5-.553,12.129-13.65,12.129-22.572A13.034,13.034,0,0,0,634,7348Zm0,19.6a6.559,6.559,0,1,1,6.541-6.559A6.557,6.557,0,0,1,634,7367.6Z" transform="translate(-621 -7348)" fill="#0abead"/>
                        </svg>
                    </div>
                    <div className={styles.contact}>
                        <h4 className={styles.contact__title}>Get in Touch</h4>
                        <form action="#" className={styles.contact__form}>
                            <input className={styles.contact__input} type="text" placeholder="Your Name"/>
                            <input className={styles.contact__input} type="text" placeholder="Your Email Address"/>
                            <input className={styles.contact__input} type="text" placeholder="Subject"/>
                            <input className={styles.contact__input} type="text" placeholder="Estimated Budget"/>
                            <textarea className={`${styles.contact__input} ${styles.contact__input_textarea}`} rows="7" placeholder="Enter your Message"></textarea>
                            <button className={styles.contact__submit} type="submit">submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
