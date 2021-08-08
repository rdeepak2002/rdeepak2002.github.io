import React, {useRef} from "react";
import {useFrame, useLoader} from '@react-three/fiber';
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

const Planet = () => {
    const rotVelY = 0.002;

    const glb = useLoader(GLTFLoader, "models/scene.gltf");
    const planet: any = useRef();

    useFrame(() => {
        planet.current.rotation.y += rotVelY;
    });

    return (
        <primitive ref={planet} object={glb.scene} dispose={null}/>
    );
};

export default Planet;