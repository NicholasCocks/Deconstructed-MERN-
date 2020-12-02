import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { softShadows, MeshWobbleMaterial, OrbitControls, Html } from "drei";
import { useSpring, a } from "react-spring/three";
import * as THREE from 'three';
import Segoe from '../../assets/fonts json/Segoe UI_Regular.json';

// soft Shadows
softShadows();

const SpinningMesh = ({ position, color, speed, args, name }) => {
    //ref to target the mesh
    const mesh = useRef();
    const font = new THREE.FontLoader().parse(Segoe);
    const textOptions = { font, size: 1, height: 0.1 };
    //useFrame allows us to re-render/update rotation on each frame
    
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  
    //Basic expand state
    const [expand, setExpand] = useState(false);
    // React spring expand animation
    const props = useSpring({
      scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
    });

    return (<>
      <a.mesh
        position={position}
        ref={mesh}
        onClick={() => setExpand(!expand)}
        scale={props.scale}
        castShadow>
        <boxBufferGeometry attach='geometry' args={args} />
        <MeshWobbleMaterial
          color={color}
          speed={speed}
          attach='material'
          factor={0.6}
        />
      </a.mesh>
      <mesh position={position}>
         <Html >
            <p>{`${name}`}</p>
         </Html>
      </mesh>

        
      {/* <mesh position={position}>
        <textGeometry attach='geometry' args={[`${name}`, textOptions]} />
        <meshStandardMaterial attach='material' />
      </mesh> */}
        </>
    );
  };

class CanvasComponent extends React.Component {


    render() {
        const points = this.props.answers.map((answer, index) => {
            debugger;
            return (
                <SpinningMesh key={index} position={[-2, index * 2, -5]} color='pink' speed={6} name={answer.class}/>
            )
            
        }, this)


        return (
            <div>
                Canvas Component
                <>
                <Canvas
                    colorManagement
                    shadowMap
                    camera={{ position: [-5, 2, 10], fov: 60 }}>
                    {/* This light makes things look pretty */}
                    <ambientLight intensity={0.3} />
                    {/* Our main source of light, also casting our shadow */}
                    
                    {/* A light to help illumnate the spinning boxes */}
                    <pointLight position={[-10, 0, -20]} intensity={0.5} />
                    <pointLight position={[0, -10, 0]} intensity={1.5} />
                    <group>
                   
                        {points}
                    
                    </group>
                    {/* Allows us to move the canvas around for different prespectives */}
                    <OrbitControls />
                </Canvas>
                </>
            </div>
        )
    }
}

export default CanvasComponent;