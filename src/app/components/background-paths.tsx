"use client"

import { motion } from "framer-motion"

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position
            } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position
            } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position
            } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(15,23,42,${0.1 + i * 0.03})`,
        width: 0.5 + i * 0.03,
    }))

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 696 316" fill="none" style={{ color: "var(--foreground)" }}>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.03}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: [0.3, 0.8, 0.8, 0.3],
                            opacity: [0.4, 0.8, 0.8, 0.1],
                        }}
                        transition={{
                            duration: 18 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                            times: [0, 0.3, 0.7, 1],
                        }}
                    />
                ))}
            </svg>
        </div>
    )
}

export default function BackgroundPaths() {
    return (
        <div className="fixed left-0 top-0 w-screen h-screen overflow-hidden z-[-999999999] blur-xs" style={{ backgroundColor: "var(--background)" }}>
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>
        </div>
    )
}
