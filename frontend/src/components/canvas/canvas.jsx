import React, { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import { softShadows, MeshWobbleMaterial, OrbitControls, Html } from "drei";
import { useSpring, a } from "react-spring/three";
import * as THREE from 'three';
import { CubeTextureLoader, CubeCamera, WebGLCubeRenderTarget, RGBFormat, LinearMipmapLinearFilter } from 'three';
import Segoe from '../../assets/fonts json/Segoe UI_Regular.json';
import { urlencoded } from "body-parser";

// soft Shadows
softShadows();

const SkyBox = () => {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
  const texture = loader.load([
    '/spiral.png',
    '/spiral.png',
    '/spiral.png',
    '/spiral.png',
    '/spiral.png',
    '/spiral.png',
  ]);
  
  // Set the scene background property to the resulting texture.
  scene.background = texture;
  return null;
}

const SpinningMesh = ({ position, color, speed, name }) => {
    const { scene, gl } = useThree();
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
        {/* <directionalLight intensity={0.5} /> */}
        <sphereGeometry attach='geometry' args={[0.8, 10, 10]} />
        <MeshWobbleMaterial
          color={(expand ? 'cyan' : 'pink')}
          speed={expand ? speed * 2 : speed}
          attach='material'
          factor={0.6}
          roughness={0.1}
          metalness={0.8}
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
        <Canvas
            colorManagement
            shadowMap
            // style={{height:100,width:100}}
            camera={{ position: [-5, 2, 10], fov: 60 }}>
            <ambientLight intensity={0.3} />
            <pointLight position={[-10, 0, -20]} intensity={0.5} />
            <pointLight position={[0, -10, 0]} intensity={0.5} />
            <group>
        
                {points}
            
            </group>
            <SkyBox />
            <OrbitControls />
        </Canvas>
        )
    }
}

export default CanvasComponent;