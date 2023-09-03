import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
//helpers to allow to draw on the canvas
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = ({isMobile}) => {
  const computer =  useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      {/* creating the glare on the computer*/}
      <pointLight intensity={1} />
      <primitive
      object={computer.scene}/>
    </mesh>
  )
}

const ComputersCanvas = () => {
  return(
    <Canvas
      frameloop='demand'
      shadows
      // Where are looking at the model from ___:[x,y,z]
      camera={{ position:[20, 3, 5], fov: 25 }}
      // To perfectly render the model
      gl={{ preserveDrawingBuffer: true}}
      >
        {/* Adding the suspense from React to have a loader while the  model is loading */}
        <Suspense fallback={<CanvasLoader />}>
            {/* This will allow us to move the model from left to right and from a specific access */}
            <OrbitControls 
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            />
          <Computers />
        </Suspense>

        <Preload all />
      </Canvas>
  )
}
export default Computers