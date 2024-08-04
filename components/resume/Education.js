// Education.js
import React from 'react';
import styles from '../../styles/Resume.module.css';

const educationData = [
    {
        title: 'دانشگاه شهید مدنی آذربایجان',
        date: '1398-1401',
        subtitle: 'کارشناسی ارشد رشته مهندسی نرم افزار',
        description: 'آذربایجان شرقی ، تبریز',
    },
    {
        title: 'دانشگاه فنی و حرفه ای تبریز',
        date: '1394-1396',
        subtitle: 'کارشناسی رشته مهندسی نرم افزار',
        description: 'آذربایجان شرقی ، تبریز',
    },
    {
        title: 'دانشکده فنی شماره دو تبریز',
        date: '1392-1394',
        subtitle: 'کاردانی رشته مهندسی نرم افزار',
        description: 'آذربایجان شرقی ، تبریز',
    },
];

const Education = () => {
    return (
        <div>
            {educationData.map((item, index) => (
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

export default Education;
