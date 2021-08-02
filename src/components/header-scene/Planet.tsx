import React, { useEffect, useRef, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame, useLoader } from '@react-three/fiber';
import { Mesh } from "three";
import useWindowDimensions from "utils/WindowDimensions";

const Planet = () => {
  const largeScale = 0.3;
  const smallScale = 0.3;
  const rotVelY = 0.002;

  const planet: any = useRef();
  const { nodes } = useLoader(GLTFLoader, "models/mars.glb");
  const [scale, setScale] = useState<number>(largeScale);

  const isMobileCss = useWindowDimensions().width <= 900;

  useEffect(() => {
    setScale(isMobileCss ? smallScale : largeScale);
  }, []);

  useFrame(() => (planet.current.rotation.y += rotVelY));

  if (nodes.Cube008 instanceof Mesh) {
    return (
      <mesh
        ref={planet}
        visible
        position={[0, 0, 0]}
        // Adding data from mars.glb to the geometry and material of the sphere
        geometry={nodes.Cube008.geometry}
        material={nodes.Cube008.material}
        scale={[scale, scale, scale]}
      />
    );
  }

  return <></>;
};

export default Planet;