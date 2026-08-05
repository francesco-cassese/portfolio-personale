import styles from './Navbar.module.css';

function Navbar() {
    return (
        <header className={styles.navbar}>
            <div className={styles.inner}>
                <a href="#top" className={styles.logo}>FC</a>
                <nav>
                    <ul className={styles.links}>
                        <li><a href="#percorso">Percorso</a></li>
                        <li><a href="#competenze">Competenze</a></li>
                        <li><a href="#progetti">Progetti</a></li>
                        <li><a href="#contatti">Contatti</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Navbar
