import { useState, useEffect } from "react";

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        // Calls once at load time
        handleResize();

        window.addEventListener("resize", handleResize);
        // Cleanup prevents memory leak
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
};
export default useWindowSize;
