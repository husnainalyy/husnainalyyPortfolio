import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useProgress } from "@react-three/drei";
import CanvasLoader from "../Components/Loader";

function Walle() {
    const walle = useGLTF("/walle/scene.gltf");
    const meshRef = React.useRef();

    return (
        <>
            <hemisphereLight intensity={15} groundColor={0x000000} />
            <pointLight intensity={10} />
            <spotLight
                intensity={10}
                position={[-20, 0, 0]}
                angle={0.12}
                penumbra={1}
                castShadow
                shadow-mapSize={1024}
            />
            <primitive ref={meshRef} object={walle.scene} scale={3.9} position={[0, -1, 0]} rotation={[0, 4.8, 0]} />
        </>
    );
}

export const WalleCanvas = () => {
    return (
        <Canvas
            onTouchMove={(e) => e.preventDefault()}
            shadows
            frameLoop="demand"
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.4,
                far: 200,
                position: [-20, 0, 0],
            }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    auto
                    enableZoom={false}
                    enablePan={false}
                    maxPolarAngle={Math.PI}
                    minPolarAngle={0}
                />
                <Walle />
                <Preload all />
            </Suspense>
        </Canvas>
    );
}

export default WalleCanvas;
