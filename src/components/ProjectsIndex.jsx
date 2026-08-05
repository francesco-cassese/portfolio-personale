import styles from './ProjectsIndex.module.css';

function ProjectsIndex({ items, activeId, onSelect }) {
    return (
        <nav className={styles.index} aria-label="Indice progetti">
            <ol className={styles.list}>
                {items.map(({ id, label }) => {
                    const isActive = id === activeId;
                    return (
                        <li key={id} className={styles.item}>
                            <button
                                type="button"
                                className={`${styles.numberBtn} ${isActive ? styles.active : ''}`}
                                aria-current={isActive ? 'true' : undefined}
                                onClick={() => onSelect(id)}>
                                {label}
                            </button>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}

export default ProjectsIndex;
