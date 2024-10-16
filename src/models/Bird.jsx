import { useRef, useEffect } from 'react';
import birdScene from '../assets/3d/bird.glb';
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';

const Bird = () => {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    console.log(animations); 
    if (actions['Take 001']) {
      actions['Take 001'].play();
    } else {
      console.error('Animation "Take 001" not found');
    }
  }, [actions]);

  useFrame(({ clock, camera }) => {
    if (birdRef.current) {
      birdRef.current.rotation.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

      if (birdRef.current.position.x > camera.position.x + 10) {
        birdRef.current.rotation.y = Math.PI;
      } else if (birdRef.current.position.x < camera.position.x - 10) {
        birdRef.current.rotation.y = 0;
      }

      birdRef.current.rotation.x += 0.01;
      birdRef.current.rotation.z -= 0.01;
    }
  });

  return (
    <mesh ref={birdRef} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene} />
    </mesh>
  );
}

export default Bird;
