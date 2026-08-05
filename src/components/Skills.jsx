import styles from './Skills.module.css';
import useReveal from '../hooks/useReveal';

function Skills() {

    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MySQL', 'PHP', 'Laravel'];
    const [ref, isVisible] = useReveal();

    return (
        <section ref={ref} id="competenze" className={`${styles.skillsSection} reveal ${isVisible ? 'is-visible' : ''}`}>
            <h2 className={styles.heading}>Le mie competenze</h2>
            <ul className={styles.skillsList}>
                {skills.map((item) => {
                    return (
                        <li key={item} className={styles.skillBadge}>
                            {item}
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}
export default Skills
