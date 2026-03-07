// Globe.jsx
import createGlobe from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

const MOVEMENT_DAMPING = 1400;

const GLOBE_CONFIG = {
    width: 800,
    height: 800,
    onRender: () => { },
    devicePixelRatio: 2,
    phi: 0,
    theta: 0.3,
    dark: 1,
    diffuse: 0.4,
    mapSamples: 16000,
    mapBrightness: 1.2,

    
    baseColor: [1, 1, 1],
    glowColor: [1, 1, 1],
    markerColor: [251 / 255, 100 / 255, 21 / 255],

    markers: [
        // Singapore
        { location: [1.3521, 103.8198], size: 0.08 },
        // Berlin
        { location: [52.52, 13.405], size: 0.07 },
        // New York
        { location: [40.7128, -74.006], size: 0.08 },
        // Rosario
        { location: [-32.9442, -60.6505], size: 0.07 },
        // Istanbul
        { location: [41.0082, 28.9784], size: 0.07 },
        // Sydney
        { location: [-33.8688, 151.2093], size: 0.07 },
        // Tokyo
        { location: [35.6762, 139.6503], size: 0.08 },
    ],
};

export function Globe({ className, config = GLOBE_CONFIG }) {
    const canvasRef = useRef(null);
    const pointerInteracting = useRef(null);

    const phiRef = useRef(0);
    const widthRef = useRef(0);

    const r = useMotionValue(0);
    const rs = useSpring(r, { mass: 1, damping: 30, stiffness: 100 });

    const updatePointerInteraction = (value) => {
        pointerInteracting.current = value;
        if (canvasRef.current) {
            canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
        }
    };

    const updateMovement = (clientX) => {
        if (pointerInteracting.current !== null) {
            const delta = clientX - pointerInteracting.current;
            r.set(r.get() + delta / MOVEMENT_DAMPING);
        }
    };

    useEffect(() => {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;

        const ro = new ResizeObserver(() => {
            widthRef.current = canvas.offsetWidth;
        });
        ro.observe(canvas);
        widthRef.current = canvas.offsetWidth;

        const globe = createGlobe(canvas, {
            ...config,
            width: widthRef.current * 2,
            height: widthRef.current * 2,
            onRender: (state) => {
                const w = widthRef.current;

                if (!pointerInteracting.current) phiRef.current += 0.002;

                state.phi = phiRef.current + rs.get();
                state.width = w * 2;
                state.height = w * 2;
            },
        });

        requestAnimationFrame(() => (canvas.style.opacity = "1"));

        return () => {
            ro.disconnect();
            globe.destroy();
        };
    }, [rs, config]);

    return (
        <div className={twMerge("mx-auto w-full h-full aspect-square", className)}>
            <canvas
                ref={canvasRef}
                className="w-full h-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size] touch-none"
                onPointerDown={(e) => updatePointerInteraction(e.clientX)}
                onPointerUp={() => updatePointerInteraction(null)}
                onPointerCancel={() => updatePointerInteraction(null)}
                onPointerOut={() => updatePointerInteraction(null)}
                onPointerMove={(e) => updateMovement(e.clientX)}
            />
        </div>
    );
}