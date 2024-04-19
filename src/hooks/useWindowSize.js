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

        // Prevent memory leak
        const cleanUp = () => {
            console.log("runs if a useEffect dependency changes");
            window.removeEventListener("resize", handleResize);
        };

        // Execute on dependency change rather than immediately
        return cleanUp;
    }, []);

    return windowSize;
};
export default useWindowSize;
