import React, { useRef, useState } from "react";
import { Canvas, useThree } from "react-three-fiber";
import { Stars, softShadows, MeshWobbleMaterial, MeshDistortMaterial, OrbitControls, Html } from "drei";
import { useSpring, a } from "react-spring/three";
import * as THREE from 'three';
import { CubeTextureLoader } from 'three';
import Segoe from '../../assets/fonts json/Segoe UI_Regular.json';


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

const SpinningMesh = ({ position, speed, answer, questions }) => {
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

    //have button here to turn data point into task.
    const companiesCollecting = answer.companiesCollecting.map((questionId, i) => {
      // debugger;
      return (
        <li key={i} > {questions[questionId].question} </li>
      )
    });
    
    return (<>
      <a.mesh
        position={position}
        ref={mesh}
        onClick={() => handleClick()}
        scale={props.scale}
        castShadow
        >
        {/* <directionalLight intensity={0.5} /> */}
        <sphereGeometry attach='geometry' args={[0.8, 7, 7]} />
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
            <p className="answer_class">{`${answer.class}`}</p>
            
            <ul className="companies_collecting"> {expand ? companiesCollecting : ''} </ul>
            {/* {expand ? <button>Generate Task</button> : ''} */}
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
        const points = this.props.answers.filter(answer => !!answer).map((answer, index) => {
            // debugger;
            if (!classes.includes(answer.class)) {
                classes.push(answer.class);
                // debugger;
                return (
                    <SpinningMesh key={index} position={[(2 / index), index, (2 * index)]} speed={6} answer={answer} questions={this.props.questions}/>
                )
            };
        }, this)


        return ( 
          <>    
            <Canvas
                colorManagement
                shadowMap
                color='black'
                // style={{height:100,width:100}}
                camera={{ position: [-30, 2, 10], fov: 60 }}>
                <ambientLight intensity={0.3} />
                
                <ambientLight position={[-10, 0, -20]} intensity={0.5} />
                <ambientLight position={[0, -10, 0]} intensity={0.5} />
                <group>
            
                    {points}
                
                </group>
                <SkyBox />
                <Stars />
                <OrbitControls />
                
            </Canvas>
          </>
        )
    }
}

export default CanvasComponent;