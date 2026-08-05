import { useState, useRef, useCallback, useMemo, useEffect } from "react";
import styles from './Projects.module.css';
import ProjectsIndex from './ProjectsIndex.jsx';
import ProjectPanel from './ProjectPanel.jsx';
import projects from '../data/projects.js';

function filterProjects(category) {
    return category === 'Tutti' ? projects : projects.filter(p => p.category === category);
}

function Projects() {

    const [filter, setFilter] = useState('Tutti');
    const [activeId, setActiveId] = useState(projects[0]?.id ?? null);
    const [filterBarHeight, setFilterBarHeight] = useState(64);
    const panelsRef = useRef(new Map());
    const filterBarRef = useRef(null);

    const categories = useMemo(() => ['Tutti', ...new Set(projects.map(p => p.category))], []);
    const filteredProjects = useMemo(() => filterProjects(filter), [filter]);

    const registerPanel = useCallback((id) => (node) => {
        if (node) {
            panelsRef.current.set(id, node);
        } else {
            panelsRef.current.delete(id);
        }
    }, []);

    function scrollToPanel(id) {
        panelsRef.current.get(id)?.scrollIntoView({ block: 'start' });
    }

    function handleFilter(category) {
        const filtered = filterProjects(category);
        const activeStillPresent = filtered.some(p => p.id === activeId);
        setFilter(category);

        if (!activeStillPresent && filtered.length > 0) {
            const firstId = filtered[0].id;
            requestAnimationFrame(() => {
                panelsRef.current.get(firstId)?.scrollIntoView({ block: 'start' });
            });
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveId(Number(entry.target.dataset.projectId));
                    }
                });
            },
            { threshold: 0, rootMargin: '-45% 0px -45% 0px' }
        );

        panelsRef.current.forEach(node => observer.observe(node));

        return () => observer.disconnect();
    }, [filter]);

    useEffect(() => {
        const node = filterBarRef.current;
        if (!node) return;

        const observer = new ResizeObserver(entries => {
            setFilterBarHeight(entries[0].contentRect.height);
        });
        observer.observe(node);

        return () => observer.disconnect();
    }, []);

    const indexItems = filteredProjects.map((project, i) => ({
        id: project.id,
        label: String(i + 1).padStart(2, '0')
    }));

    return (
        <section
            id="progetti"
            className={styles.projectsSection}
            style={{ '--filter-bar-height': `${filterBarHeight}px` }}>

            <div ref={filterBarRef} className={styles.filterBar}>
                <h2 className={styles.heading}>I miei progetti</h2>
                <div className={styles.filterContainer}>
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`${styles.filterBtn} ${filter === category ? styles.activeBtn : ''}`}
                            onClick={() => handleFilter(category)}>
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.layout}>
                <ProjectsIndex items={indexItems} activeId={activeId} onSelect={scrollToPanel} />

                <div className={styles.panels}>
                    {filteredProjects.map((project, i) => (
                        <ProjectPanel
                            key={project.id}
                            project={project}
                            label={String(i + 1).padStart(2, '0')}
                            panelRef={registerPanel(project.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Projects
