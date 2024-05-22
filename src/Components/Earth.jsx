import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Components/Loader";



const Earth = () => {
    const earth = useGLTF("../public/spaceship/scene.gltf");
    const meshRef = React.useRef();

    return (
        <>
            <hemisphereLight intensity={15} groundColor={0x000000} />
            <pointLight intensity={10} />
            <spotLight
                intensity={20}
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                castShadow
                shadow-mapSize={1024}
            />
            <primitive ref={meshRef} object={earth.scene} scale={2.9} position={[1, 0, 0]} rotation={[12.3, 0.32, 12.6]} />
            
        </>
    );
};

export const EarthCanvas = () => {
    return (
        <Canvas
            shadows
            frameLoop="demand"
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.4,
                far: 200,
                position: [4, 40, 10],
            }}
        >
           
           
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    
                    enableZoom={false}
                    maxPolarAngle={Math.PI }
                    minPolarAngle={0}
                />
                <Earth />
                <Preload all />
            </Suspense>
        </Canvas>
    );
};

export default EarthCanvas;