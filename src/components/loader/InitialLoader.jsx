import { useEffect, useState } from "react";
import Image from "next/image";

export default function InitialLoader() {
    const [scaleUp, setScaleUp] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setScaleUp(true);
        }, 100);

        const hideTimer = setTimeout(() => {
            // Optionally hide loader after animation
            setScaleUp(false);
        }, 2400);

        return () => {
            clearTimeout(timer);
            clearTimeout(hideTimer);
        };
    }, []);

    return (
        <div className="fixed inset-0 bg-[#050505] flex items-center justify-center z-[9999999] transition-opacity duration-300">
        <Image
            src="/assets/images/logo1.png"
            alt="Logo"
            width={200}
            height={200}
            className={`transform transition-transform duration-1000 rounded-full ease-in-out ${
            scaleUp ? "scale-125 opacity-100" : "scale-50 opacity-0"
            }`}
        />
        </div>
    );
}
