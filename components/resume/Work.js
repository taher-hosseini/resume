// Work.js
import React from 'react';
import styles from '../../styles/Resume.module.css';

const workData = [
    {
        title: 'برنامه نویس فرانت',
        date: '1403/05 - 1403/01',
        subtitle: 'فریلنسر',
        description: 'انجام کارهای فریلنسری',
    },
    {
        title: 'برنامه نویس فرانت',
        date: '1396/12 - 1396/07',
        subtitle: 'دانشگاه فنی تبریز',
        description: 'همکاری در سایت ثبت نام دانشجویان دانشگاه فنی تبریز',
    },
];

const Work = () => {
    return (
        <div>
            {workData.map((item, index) => (
                <div key={index} className={styles.resume_content__item}>
                    <div className={styles.resume_content__head}>
                        <h5 className={styles.resume_content__title}>{item.title}</h5>
                        <span className={styles.resume_content__date}>{item.date}</span>
                    </div>
                    <h6 className={styles.resume_content__subtitle}>{item.subtitle}</h6>
                    <p className={styles.resume_content__description}>{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Work;
