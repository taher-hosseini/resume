import React from 'react';
import styles from '../../styles/Resume.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

const sampleProjects = [
    {
        title: 'رزومه',
        description: 'طراحی سایت رزومه شخصی با نکست دارای دو تم لایت و دارک و رسپانسیو',
        imgSrc: '/images/sample4.png',
        githubLink: 'https://github.com/taher-hosseini/resume',
    },
    {
        title: 'فروشگاه آنلاین',
        description: 'طراحی فروشگاه اینترنتی با ریکت بصورت فول استک، رسپانسیو، دارای قابلیت ثبت نام کاربر و سبد خرید',
        imgSrc: '/images/sample3.png',
        githubLink: 'https://github.com/taher-hosseini/online-shop-fullstack',
    },
    {
        title: 'باکس محصول',
        description: 'طراحی باکس محصول با بوت استرپ کاملا رسپانسیو برای دسکتاپ و موبایل',
        imgSrc: '/images/sample2.png',
        githubLink: 'https://github.com/taher-hosseini/Gabrielle-Essence-Eau-De-Parfum',
    },
    {
        title: 'فرم چند مرحله‌ای',
        description: 'طراحی فرم چند مرحله‌ای با جاوا اسکریپت و بوت استرپ برای دسکتاپ و موبایل',
        imgSrc: '/images/sample1.png',
        githubLink: 'https://github.com/taher-hosseini/Multi-step-form',
    },
];
export default function Samples() {
    return (
        <>
            {sampleProjects.map((project, index) => (
                <div key={index} className={`col-12 col-md-6`}>
                    <div className={`${styles.resume_content__item_samples}`}>
                        <div className={styles.resume_content__img_wrapper_samples}>
                            <img src={project.imgSrc} alt="" className={styles.resume_content__img_samples} />
                        </div>
                        <div className={styles.resume_content__head_samples}>
                            <h5 className={styles.resume_content__title_samples}>{project.title}</h5>
                        </div>
                        <p className={styles.resume_content__description_samples}>{project.description}</p>
                        <a
                            href={project.githubLink}
                            className={`${styles.app_btn} app_btn_g w-full`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            لینک
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </div>
            ))}

        </>

    );
}