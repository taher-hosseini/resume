import React from 'react';
import {RiJavascriptFill, RiNextjsFill, RiTailwindCssFill} from 'react-icons/ri';
import {FaBootstrap, FaCss3Alt, FaGitAlt, FaHtml5, FaReact, FaSass} from 'react-icons/fa';
import { SiWebstorm } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import styles from '../../styles/Resume.module.css';

const skills = [
    { icon: <FaReact style={{ color: "#74C0FC" }} />, name: "React", level: "متوسط" },
    { icon: <RiNextjsFill />, name: "Next Js", level: "متوسط" },
    { icon: <FaHtml5 style={{ color: "#ff8040" }} />, name: "HTML", level: "پیشرفته" },
    { icon: <FaCss3Alt style={{ color: "#74C0FC" }} />, name: "CSS", level: "پیشرفته" },
    { icon: <RiJavascriptFill style={{ color: "#FFD43B" }} />, name: "Javascript", level: "پیشرفته" },
    { icon: <FaBootstrap style={{ color: "#B197FC" }} />, name: "Bootstrap", level: "پیشرفته" },
    { icon: <FaGitAlt style={{ color: "#ff6666" }} />, name: "Git", level: "متوسط" },
    { icon: <FaSass style={{ color: "#df0070" }} />, name: "SASS", level: "متوسط" },
    { icon: <RiTailwindCssFill style={{ color: "#2ea4af" }} />, name: "Tailwind", level: "متوسط" },
    { icon: <SiWebstorm />, name: "Webstorm", level: "پیشرفته" },
    { icon: <VscVscode style={{ color: "#33c1f5" }} />, name: "Vscode", level: "پیشرفته" }
];

const Skills = () => {
    return (
            <>
                {skills.map((skill, index) => (
                    <div className={`${styles.resume_content__item_skill} col-12`} key={index}>
                        <div className={styles.resume_content__head}>
                            <div className={styles.resume_content__title_skill}>
                                {skill.icon}
                                {skill.name}
                            </div>
                            <span className={styles.resume_content__date}>{skill.level}</span>
                        </div>
                    </div>
                ))}
            </>
    );
};

export default Skills;
