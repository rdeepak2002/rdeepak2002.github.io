import {useEffect, useState} from "react";

export default function useScrollState(height: number) {
    const [scrollState, setScrollState] = useState("topSection");

    useEffect(() => {
        let listener: any = undefined;
        listener = document.addEventListener("scroll", _ => {
            if (document.scrollingElement) {
                let scrolled = document.scrollingElement.scrollTop;
                if (scrolled >= height) {
                    setScrollState(scrolled.toString());
                } else if (scrollState !== "topSection") {
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