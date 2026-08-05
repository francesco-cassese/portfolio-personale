import styles from './Hero.module.css';
import useReveal from '../hooks/useReveal';
import heroChef from '../assets/hero-chef.jpg';
import heroDev from '../assets/hero-dev.jpg';

function Hero() {
    const [ref, isVisible] = useReveal();

    return (
        <section ref={ref} className={`${styles.hero} reveal ${isVisible ? 'is-visible' : ''}`}>
            <div className={styles.content}>
                <p className={styles.name}>Francesco Cassese</p>

                <div className={styles.tagRow}>
                    <span className={styles.tag}>Ex pasticcere</span>
                    <span className={styles.arrow}>&rarr;</span>
                    <span className={`${styles.tag} ${styles.tagAccent}`}>Full-Stack Developer</span>
                </div>

                <h1 className={styles.title}>
                    Dalla precisione della pasticceria <span className={styles.titleAccent}>alla logica del codice.</span>
                </h1>

                <p className={styles.description}>
                    Ciao, sono Francesco. Il mio percorso nasce tra ristorazione e pasticceria, dove ho imparato
                    il valore dell'attenzione ai dettagli e della pazienza. Oggi porto quella stessa dedizione nello
                    sviluppo Full-Stack. Scrivo codice pulito con React e Node.js, e sto ampliando i miei
                    strumenti studiando PHP.
                </p>

                <a href="#progetti" className={styles.cta}>
                    Vai ai progetti
                    <span className={styles.ctaArrow}>&rarr;</span>
                </a>
            </div>

            <div className={styles.imageWrap}>
                <img
                    src={heroChef}
                    alt="Francesco in versione pasticcere"
                    className={`${styles.heroImg} ${styles.imgChef}`}
                    fetchPriority="high"
                    decoding="async"
                />
                <img
                    src={heroDev}
                    alt="Francesco in versione full-stack developer"
                    className={`${styles.heroImg} ${styles.imgDev}`}
                    decoding="async"
                />
            </div>
        </section>
    )
}
export default Hero
