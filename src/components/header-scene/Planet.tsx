import React, {useRef, useState} from "react";
import {useFrame, useLoader} from '@react-three/fiber';
import {TextureLoader} from 'three/src/loaders/TextureLoader.js';
import {isMobile} from "react-device-detect";

import mars_texture_jpg from "resources/textures/2k_mars.jpg";

const Planet = () => {
    const rotVelY = 0.002;

    const planet: any = useRef();
    const [scale] = useState<number>(0.3);

    const mars_texture = useLoader(TextureLoader, mars_texture_jpg);
    const quality = isMobile ? 16 : 23;
    const radius = 7;

    useFrame(() => (planet.current.rotation.y += rotVelY));

    return (
        <mesh
            ref={planet}
            visible
            position={[0, 0, 0]}
            scale={[scale, scale, scale]}
        >
            <sphereGeometry attach="geometry" args={[radius, quality, quality]}/>
            <meshStandardMaterial color={"rgb(255, 255, 255)"} map={mars_texture} attach='material'/>
        </mesh>
    );
};

export default Planet;