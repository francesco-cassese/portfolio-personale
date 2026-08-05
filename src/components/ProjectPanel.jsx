import styles from './ProjectPanel.module.css';
import useReveal from '../hooks/useReveal';

function ProjectPanel({ project, label, panelRef }) {
    const { title, description, category, demoUrl, repoUrl, repoBackendUrl, imageUrl } = project;

    const [revealRef, isVisible] = useReveal();

    function setRefs(node) {
        revealRef.current = node;
        panelRef(node);
    }

    return (
        <section
            ref={setRefs}
            data-project-id={project.id}
            className={`${styles.panel} reveal ${isVisible ? 'is-visible' : ''}`}>

            <div className={styles.content}>
                <div className={styles.text}>
                    <span className={styles.watermark} aria-hidden="true">{label}</span>
                    {category && <span className={styles.category}>{category}</span>}
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.description}>{description}</p>

                    {(demoUrl || repoUrl || repoBackendUrl) && (
                        <div className={styles.links}>
                            {demoUrl && (
                                <a href={demoUrl} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
                                    Demo live
                                </a>
                            )}
                            {repoUrl && (
                                <a href={repoUrl} target="_blank" rel="noopener noreferrer" className={styles.linkBtnGhost}>
                                    {repoBackendUrl ? 'Codice frontend' : 'Codice'}
                                </a>
                            )}
                            {repoBackendUrl && (
                                <a href={repoBackendUrl} target="_blank" rel="noopener noreferrer" className={styles.linkBtnGhost}>
                                    Codice backend
                                </a>
                            )}
                        </div>
                    )}
                </div>

                <div className={styles.imageFrame}>
                    <div
                        className={styles.backdrop}
                        style={{ '--bg-image': `url(${imageUrl})` }}
                        aria-hidden="true"
                    />
                    <img
                        src={imageUrl}
                        alt={`Anteprima di ${title}`}
                        loading="lazy"
                        decoding="async"
                        className={styles.sharpImage}
                    />
                </div>
            </div>
        </section>
    );
}

export default ProjectPanel;
