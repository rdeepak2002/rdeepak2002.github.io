import React, { useRef, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame, useLoader } from '@react-three/fiber';
import { Mesh } from "three";
import { TextureLoader } from 'three/src/loaders/TextureLoader.js';
import { isMobile } from "react-device-detect";

import mars_texture_jpg from "resources/textures/2k_mars.jpg";

const Planet = () => {
  const rotVelY = 0.002;

  const planet: any = useRef();
  const [scale] = useState<number>(0.3);
  // const { nodes } = useLoader(GLTFLoader, "models/mars.glb");

  const mars_texture = useLoader(TextureLoader, mars_texture_jpg);
  const quality = isMobile ? 16 : 32;
  const radius = 7;

  useFrame(() => (planet.current.rotation.y += rotVelY));

  // if (nodes.Cube008 instanceof Mesh) {
    return (
      <mesh
        ref={planet}
        visible
        position={[0, 0, 0]}
        scale={[scale, scale, scale]}
      >
        <sphereGeometry attach="geometry" args={[radius, quality, quality]} />
        <meshStandardMaterial color={"rgb(255, 255, 255)"} map={mars_texture} attach='material' />
      </mesh>
    );
  // }

  // return <></>;
};

export default Planet;