import './App.scss';
import  { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import { Model } from './models/Scene';
import { Universe } from './components/universe';
import { Moon } from './components/moon';
import { Head } from './components/head';
import { Landing } from './components/landing';
import { Token } from './components/token_bsc';
import { Footer } from './components/footer';
import { Roadmap } from './components/roadmap';

const Loading = () => {
  return(
        <Html center>
          <p className="bottom-space-md" />
          <div className='loader'>
            <h3 style={{'fontSize':'14px'}}>Loading...🤖
            </h3>
            <div className="planet"></div>
          </div>
      </Html>
  );
};


function App() {

  return (
    <div className="screen">
      <div className='main'>
          <Head />
          <Landing />
          <Token />
          <Roadmap />
          <Footer />
      </div>
      <div className='canvas dark'>
          <Canvas camera={{position: [0, 40, 70], zoom: 1, fov:50}}>
            <OrbitControls />
            <Universe />
            <ambientLight intensity={0.75} />
            <directionalLight intensity={0.5} position={[10, 20, 50]} angle={0.75} />
            <directionalLight intensity={0.5} position={[-10, 20, 30]} angle={0.75} />
            <spotLight position={[10, 20, 30]} angle={0.75} penumbra={1} intensity={2} castShadow />
            <Physics>
              <Suspense fallback={<Loading />}>
                <Moon />
                <mesh position={[0, -40, 0]} scale={0.25}>
                  <Model />
                </mesh>                
              </Suspense>
            </Physics>
          </Canvas>
      </div>
    </div>
  );
}
export default App;