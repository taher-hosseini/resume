import React, { useState } from 'react';
import styles from '../styles/Portfolio.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Controller } from 'swiper/modules';

// ترکیب آرایه‌ها برای allWork
const project = [
    "/images/sample44.png",
    "/images/sample33.png",
];
const practice = [
    "/images/sample22.png",
    "/images/sample11.png",
];

const portfolioContent = {
    allWork: [
        ...project,
        ...practice,
    ],
    project,
    practice,
    // Add other categories here
};

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState('allWork');
    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);

    return (
        <section className={styles.portfolio}>
            <div className="container">
                <div className="section-head">
                    <h3 className="section-head__title">Portfolio</h3>
                    <p className="section-head__caption">Check in Our Latest Works</p>
                    <span className="section-head__line"></span>
                </div>
                <ul className={styles.portfolio_list}>
                    <li
                        className={`${styles.portfolio_list__item} ${activeCategory === 'allWork' ? styles.portfolio_list__item_active : ''}`}
                        onClick={() => setActiveCategory('allWork')}
                    >
                        همه
                    </li>
                    <li
                        className={`${styles.portfolio_list__item} ${activeCategory === 'project' ? styles.portfolio_list__item_active : ''}`}
                        onClick={() => setActiveCategory('project')}
                    >
                        پروژه
                    </li>
                    <li
                        className={`${styles.portfolio_list__item} ${activeCategory === 'practice' ? styles.portfolio_list__item_active : ''}`}
                        onClick={() => setActiveCategory('practice')}
                    >
                        تمرین
                    </li>
                    {/* Add other categories here */}
                </ul>

                <div className={styles.portfolio_content}>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        pagination={{clickable: true}}
                        modules={[Pagination, Controller]}
                        onSwiper={setFirstSwiper}
                        controller={{ control: secondSwiper }}
                    >
                        {portfolioContent[activeCategory].map((image, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={image}
                                    className={styles.portfolio_content__img}
                                    alt={`portfolio-${index}`}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
