import {Canvas} from "@react-three/fiber";
// import { useThree } from "@react-three/fiber";
// import { CubeTextureLoader } from 'three';
// import { SpaceSkyBox } from "./SkyBoxes";
import React, {Suspense, useEffect, useState} from "react";
import Camera from "./Camera";
import Planet from "./Planet";

const HeaderScene = () => {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth - 1);
    const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight - 1);
    const [loaded, setLoaded] = useState<boolean>(false);

    useEffect(() => {
        const resizeTimer = setTimeout(() => {
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.innerHeight);
        }, 500);

        const doneLoadingTimer = setTimeout(() => {
            setLoaded(true);
        }, 1000);

        // clear on component unmount
        return () => {
            clearTimeout(resizeTimer);
            clearTimeout(doneLoadingTimer);
        };
    }, []);

    return (
        <Canvas className="canvas-3d"
                style={{width: windowWidth, height: windowHeight, visibility: loaded ? "visible" : "hidden"}}>
            <Camera setWindowWidth={setWindowWidth} setWindowHeight={setWindowHeight}/>
            <directionalLight intensity={0.5}/>
            <ambientLight intensity={0.24}/>
            <Suspense fallback={"loading"}>
                <Planet/>
            </Suspense>
            {/* { !isMobile &&
        <SkyBox />
      } */}
        </Canvas>
    );
}

// function SkyBox() {
//   const { scene } = useThree();
//   const loader = new CubeTextureLoader();
//   const texture = loader.load(SpaceSkyBox);
//   scene.background = texture;
//   return null;
// }

export const degreesToRadians = (degrees: number) => {
    return degrees * Math.PI / 180.0;
}

export const scale3D = 1;

export default HeaderScene;