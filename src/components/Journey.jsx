import styles from './Journey.module.css';
import useReveal from '../hooks/useReveal';
import journeySteps from '../data/journey.js';

function Journey() {
    const [ref, isVisible] = useReveal();

    return (
        <section ref={ref} id="percorso" className={`${styles.journeySection} reveal ${isVisible ? 'is-visible' : ''}`}>
            <h2 className={styles.heading}>Il mio percorso</h2>
            <p className={styles.intro}>
                Tre tappe, la stessa attitudine: cura, precisione e voglia di imparare, applicate a mestieri diversi.
            </p>

            <ol className={styles.timeline}>
                {journeySteps.map((step, index) => {
                    const number = String(index + 1).padStart(2, '0');
                    const isLast = index === journeySteps.length - 1;

                    return (
                        <li
                            key={step.title}
                            className={`${styles.step} ${isLast ? styles.stepCurrent : ''} reveal ${isVisible ? 'is-visible' : ''}`}
                            style={{ transitionDelay: `${index * 0.12}s` }}>
                            <span className={styles.node}>{number}</span>
                            <div className={styles.stepContent}>
                                <span className={styles.eyebrow}>{step.eyebrow}</span>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDescription}>{step.description}</p>
                            </div>
                        </li>
                    );
                })}
            </ol>
        </section>
    );
}
export default Journey;
