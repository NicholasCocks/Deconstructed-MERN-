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
  
    //Basic expand state
    const [expand, setExpand] = useState(false);
    // React spring expand animation
    const props = useSpring({
      scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
      color: expand ? 'pink' : 'blue'
    });

    const handleClick = () => {
      setExpand(!expand)
    } 

    const text = 'text1';

    return (<>
      <a.mesh
        position={position}
        ref={mesh}
        onClick={() => handleClick()}
        scale={props.scale}
        castShadow
        >
        <sphereGeometry attach='geometry' args={args} />
        <MeshWobbleMaterial
          color={expand ? 'pink' : 'white'}
          speed={speed}
          attach='material'
          factor={0.6}
        />
      </a.mesh>
      <mesh position={position}>
         <Html >
           <div className="data_point">
            <p >{`${name}`}</p>
            {expand ? text : ''}
            </div>
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
        const classes = [];
        const points = this.props.answers.map((answer, index) => {
            
            if (!classes.includes(answer.class)) {
                classes.push(answer.class);
                return (
                    <SpinningMesh key={index} position={[-2, index * 2, -5]} color='pink' speed={6} name={answer.class}/>
                )
            };
        }, this)


        return (
            <div className="page-container">
                <Canvas
                    colorManagement
                    shadowMap
                    // style={{height:100,width:100}}
                    camera={{ position: [-5, 2, 10], fov: 60 }}>
                    <ambientLight intensity={0.3} />
                    <pointLight position={[-10, 0, -20]} intensity={0.5} />
                    <pointLight position={[0, -10, 0]} intensity={1.5} />
                    <group>
                
                        {points}
                    
                    </group>
                    <OrbitControls />
                </Canvas>
            </div>
        )
    }
}

export default CanvasComponent;