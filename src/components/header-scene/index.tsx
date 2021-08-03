import { Canvas, useThree } from "@react-three/fiber";
import { CubeTextureLoader } from 'three';
import { Suspense, useEffect, useState } from "react";
import { SpaceSkyBox } from "./SkyBoxes";
import React from "react";
import Camera from "./Camera";
import Planet from "./Planet";
import { isMobile } from "react-device-detect";

interface HeaderSceneProps {
}

const HeaderScene = (props: HeaderSceneProps) => {

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth - 1);
  const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight - 1);
  const [loadingScene, setLoadingScene] = useState<boolean>(true);

  useEffect(() => {
    if(!isMobile) {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
  
      window.dispatchEvent(new Event('resize'));
  
      const timer = setInterval(() => setLoadingScene(false), 500);
  
      // clear on component unmount
      return () => {
        clearInterval(timer);
      };
    }
  }, []);

  return (
    <div className="canvas-3d-container" style={{ width: windowWidth, height: windowHeight, margin: 0, visibility: loadingScene ? "hidden" : "visible" }}>      
      <Canvas>
        <Camera setWindowWidth={setWindowWidth} setWindowHeight={setWindowHeight} />
        <directionalLight intensity={1} />
        <ambientLight intensity={0.3} />
        <Suspense fallback={"loading"}>
          <Planet />
        </Suspense>
        <SkyBox />
      </Canvas>
    </div>
  );
}

function SkyBox() {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  const texture = loader.load(SpaceSkyBox);
  scene.background = texture;
  return null;
}

export const degreesToRadians = (degrees: number) => {
  return degrees * Math.PI / 180.0;
}

export const scale3D = 1;

export default HeaderScene;