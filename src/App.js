// import { Canvas } from '@react-three/fiber'
// import { Loader, PositionalAudio } from '@react-three/drei'
// import { useState, Suspense, useRef, useEffect } from 'react'
// import PostProcessingEffects from './PostProcessingEffects'
// import SnowGlobeModel from './SnowGlobeModel'
// import Overlay from './Overlay'
// import SceneSetup from './Scene'

// export default function App() {
//   const audioRef = useRef()
//   const [inside, setInside] = useState(false)
//   const isMobile = window.innerWidth < 768
//   const canvasConfig = { antialias: false, depth: false, stencil: false, alpha: false }
//   const [ready, setReady] = useState(false)
//   const [name, setName] = useState(localStorage.getItem('name') || '')

//   useEffect(() => {
//     localStorage.setItem('name', name)
//   }, [name])

//   return (
//     <>
//       {
//         !name && <div> <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> </div>
//       }
//       {name && <>
//         <Canvas
//         onClick={() => setReady(true)}
//         gl={canvasConfig}
//         camera={{ position: [0, 0, 5], fov: 35, far: 20000 }}
//         dpr={1}
//       >
//         <Suspense fallback={null}>
//           <SceneSetup isMobile={isMobile} />
//           <SnowGlobeModel
//             isMobile={isMobile}
//             position={[0, -1.1, 0]}
//             scale={0.09}
//             inside={inside}
//           />

//           <PositionalAudio
//             ref={audioRef}
//             loop
//             url='/music.mp3'
//             distance={0.05}
//             autoplay={ready}
//             key={ready}
//           />

//           <PostProcessingEffects />
//         </Suspense>
//       </Canvas>
//       <Overlay
//         inside={inside}
//         setInside={setInside}
//       />
//       <Loader /></>}
//     </>
//   )
// }


import { Canvas } from '@react-three/fiber'
import { Loader, PositionalAudio } from '@react-three/drei'
import { useState, Suspense, useRef } from 'react'
import PostProcessingEffects from './PostProcessingEffects'
import SnowGlobeModel from './SnowGlobeModel'
import Overlay from './Overlay'
import SceneSetup from './Scene'

export default function App() {
  const audioRef = useRef()
  const [inside, setInside] = useState(false)
  const isMobile = window.innerWidth < 768
  const canvasConfig = { antialias: false, depth: false, stencil: false, alpha: false }
  const [ready, setReady] = useState(false)
  const [name, setName] = useState(localStorage.getItem('name') || '')
  const [inputValue, setInputValue] = useState('') // Store current input value

  const handleNameSubmit = () => {
    if (inputValue) {
      setName(inputValue) // Set the name to state
      localStorage.setItem('name', inputValue) // Save to localStorage
    }
  }

  return (
    <>
       {
        !name && 
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <input 
            type="text" 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
            placeholder="Enter your name" 
            style={{
              padding: '0.5rem',
              borderRadius: '0.375rem',
              border: '2px solid #d1d5db', // Light gray
              outline: 'none',
              focus: 'border-blue-500',
            }}
          />
          <button 
            onClick={handleNameSubmit} 
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#3b82f6', // Blue
              color: '#fff',
              borderRadius: '0.375rem',
              border: 'none',
              cursor: 'pointer',
              outline: 'none',
            }}
          >
            Submit
          </button>
        </div>
      }
      {name && (
        <>
          <Canvas
            onClick={() => setReady(true)}
            gl={canvasConfig}
            camera={{ position: [0, 0, 5], fov: 35, far: 20000 }}
            dpr={1}
          >
            <Suspense fallback={null}>
              <SceneSetup isMobile={isMobile} />
              <SnowGlobeModel
                isMobile={isMobile}
                position={[0, -1.1, 0]}
                scale={0.09}
                inside={inside}
              />

              <PositionalAudio
                ref={audioRef}
                loop
                url='/music.mp3'
                distance={0.05}
                autoplay={ready}
                key={ready}
              />

              <PostProcessingEffects />
            </Suspense>
          </Canvas>
          <Overlay
            inside={inside}
            setInside={setInside}
          />
          <Loader />
        </>
      )}
    </>
  )
}
