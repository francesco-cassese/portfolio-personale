import styles from './Contacts.module.css';
import useReveal from '../hooks/useReveal';

function Contacts() {

    const contacts = [
        { name: 'GitHub', link: 'https://github.com/francesco-cassese' },
        { name: 'LinkedIn', link: 'https://www.linkedin.com/in/francesco-cassese/' },
        { name: 'Email', link: 'mailto:francescocassese9@gmail.com' }
    ];

    const [ref, isVisible] = useReveal();

    return (
        <section
            ref={ref}
            id="contatti"
            className={`${styles.contactsSection} reveal ${isVisible ? 'is-visible' : ''}`}
        >
            <h2 className={styles.heading}>Mettiamoci in contatto</h2>
            <p className={styles.subheading}>
                Sempre disponibile per una chiacchierata su nuove opportunit&agrave; o progetti.
            </p>

            <ul className={styles.contactsList}>
                {contacts.map(({ name, link }) => (
                    <li key={name}>
                        <a
                            href={link}
                            target={link.startsWith('mailto:') ? '_self' : '_blank'}
                            rel="noopener noreferrer"
                            className={styles.contactLink}
                        >
                            {name}
                            <span className={styles.linkArrow}>&rarr;</span>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    )
}
export default Contacts
