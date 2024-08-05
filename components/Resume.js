// components/Resume.js
import styles from '../styles/Resume.module.css';
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBootstrap, faCss3Alt, faGitAlt, faHtml5, faJs, faReact} from "@fortawesome/free-brands-svg-icons";
import {RiNextjsFill, RiTailwindCssFill} from "react-icons/ri";
import {FaHistory, FaLaptopCode, FaSass, FaUserGraduate} from "react-icons/fa";
import {SiWebstorm} from "react-icons/si";
import {VscVscode} from "react-icons/vsc";
import Skills from "@/components/resume/Skills";
import Education from "@/components/resume/Education";
import Work from "@/components/resume/Work";
import {GrGallery} from "react-icons/gr";
import Samples from "@/components/resume/Samples";

export default function Resume() {
    const [activeContent, setActiveContent] = useState('#education');

    const handleContentChange = (contentId) => {
        setActiveContent(contentId);
    };
    return (
        <section className={`${styles.resume} resume_g`}>
            <div className="container skew-reset">
                <div className="section-head">
                    <h3 className="section-head__title">رزومه</h3>
                    <p className="section-head__caption"></p>
                    <span className="section-head__line"></span>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <ul className={`${styles.resume_list} resume_list_g h-full`}>
                            <li className={`${styles.resume_list__item} ${activeContent === '#education' ? styles.resume_list__item_active : ''}`}
                                onClick={() => handleContentChange('#education')} data-content-id="#education">
                                <FaUserGraduate className={styles.resume_list__icon} />
                                <span className={styles.resume_list__text}>سوابق تحصیلی</span>
                            </li>
                            <li className={`${styles.resume_list__item} ${activeContent === '#work-history' ? styles.resume_list__item_active : ''}`}
                                onClick={() => handleContentChange('#work-history')} data-content-id="#work-history">
                                <FaHistory className={styles.resume_list__icon} />
                                <span className={styles.resume_list__text}>سوابق شغلی</span>
                            </li>
                            <li className={`${styles.resume_list__item} ${activeContent === '#Programming-skill' ? styles.resume_list__item_active : ''}`}
                                onClick={() => handleContentChange('#Programming-skill')} data-content-id="#Programming-skill">
                                <FaLaptopCode className={styles.resume_list__icon} />
                                <span className={styles.resume_list__text}>مهارت ها</span>
                            </li>
                            <li className={`${styles.resume_list__item} ${activeContent === '#Samples' ? styles.resume_list__item_active : ''}`}
                                onClick={() => handleContentChange('#Samples')} data-content-id="#Samples">
                                <GrGallery className={styles.resume_list__icon} />
                                <span className={styles.resume_list__text}>نمونه کارها</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-lg-8 ">
                        <div className={`${styles.resume_content} ${activeContent === '#education' ? styles.resume_content_show : ''}`} id="education">
                            <Education />
                        </div>
                        <div
                            className={`${styles.resume_content} ${activeContent === '#work-history' ? styles.resume_content_show : ''}`}
                            id="work-history">
                            <Work />
                        </div>
                        <div
                            className={`${styles.resume_content_skill} ${activeContent === '#Programming-skill' ? styles.resume_content_skill_show : ''}`}
                            id="Programming-skill">
                            <Skills  />
                        </div>
                        <div
                            className={`row ${styles.resume_content_samples} ${activeContent === '#Samples' ? styles.resume_content_samples_show : ''}`} id="Samples">
                            <Samples />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
