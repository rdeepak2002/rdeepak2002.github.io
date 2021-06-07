import { useState, useEffect } from "react";

export default function useScrollState(height: any) {
    const [scrollState, setScrollState] = useState("topSection");

    useEffect(() => {
        let listener: any = null;
        listener = document.addEventListener("scroll", e => {
            if (document.scrollingElement) {
                var scrolled = document.scrollingElement.scrollTop;
                if (scrolled >= height) {
                    setScrollState(scrolled.toString());
                }
                else if (scrollState !== "topSection") {
                    setScrollState("topSection");
                }
            }
        });
        return () => {
            document.removeEventListener("scroll", listener);
        }
    });

    return scrollState;
}