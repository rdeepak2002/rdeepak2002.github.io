import {useFrame, useThree} from '@react-three/fiber';
import {useEffect, useRef, useState} from 'react';
import {isMobile} from 'react-device-detect';

interface CameraProps {
    setWindowWidth: Function;
    setWindowHeight: Function;
}

export default function Camera(props: CameraProps) {
    const ref: any = useRef();
    const set = useThree(({set}) => set);

    const [cameraPos, setCameraPos] = useState<number[]>([10, 0, 10]);

    const resizeHandler = () => {
        props.setWindowWidth(window.innerWidth);
        props.setWindowHeight(window.innerHeight);
    }

    useEffect(() => {
        set({camera: ref.current});

        if (!isMobile) {
            window.addEventListener("resize", resizeHandler);

            return () => {
                window.removeEventListener("resize", resizeHandler);
            };
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useFrame(() => {
        ref.current.updateMatrixWorld();

        ref.current.position.x = cameraPos[0];
        ref.current.position.y = cameraPos[1];
        ref.current.position.z = cameraPos[2];

        ref.current.lookAt(0, 0, 0);

        setCameraPos([cameraPos[0], cameraPos[1], cameraPos[2]]);
    });

    return <perspectiveCamera ref={ref} {...props} />
}