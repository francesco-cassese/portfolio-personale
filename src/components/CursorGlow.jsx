import { useEffect, useRef } from "react";

function CursorGlow() {
    const glowRef = useRef(null);

    useEffect(() => {
        const canHover = window.matchMedia("(pointer: fine)").matches;
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (!canHover || reducedMotion) return;

        const node = glowRef.current;

        function handleMove(e) {
            node.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
        }

        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, []);

    return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />;
}

export default CursorGlow;
