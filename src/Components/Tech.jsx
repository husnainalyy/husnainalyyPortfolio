import React from 'react'
import { useState } from 'react'
import BallCanvas from './Ball'
function Tech() {
    const [technology, settechnology] = useState([
        {
            tech: 'HTML',
            icon:'../src/assets/tech/html.png'
        },
        {
            tech: 'CSS',
            icon: '../src/assets/tech/css.jpeg'

        },
        {
            tech: 'BOOTSTRAP',
            icon: '../src/assets/tech/bootstrap.png'
        },
        {
            tech: 'TAILWIND',
            icon: '../src/assets/tech/tailwind.png'
        },
        {
            tech: 'MATERIALIZE ',
            icon: '../src/assets/tech/materialize.png'
        },
        {
            tech: 'JAVA SCRIPT',
            icon: '../src/assets/tech/js.jpeg'
        },
        {
            tech: 'GSAP',
            icon: '../src/assets/tech/gsap.png'
        },
        {
            tech: 'FRAMER MOTION',
            icon: '../src/assets/tech/framerr.png'
        },
        {
            tech: 'THREE JS',
            icon: '../src/assets/tech/three.png'
        },
        {
            tech: 'REACT',
            icon: '../src/assets/tech/react.png'
        },
        {
            tech: 'GIT',
            icon: '../src/assets/tech/git.png'
        },
        {
            tech: 'FIGMA',
            icon: '../src/assets/tech/figma.png'
        },
        {
            tech: 'REDUX',
            icon: '../src/assets/tech/redux.png'
        }
        
    ])
  return (
      <div className='min-h-min flex flex-col justify-center align-middle items-center bg-gradient-to-r from-[#131a5c]  to-[#010e23]' >
          
          <p className='text-white text-5xl lg:text-6xl font-bold'>Technologies</p>
          <div className='flex flex-wrap gap-4 mt-8 justify-center'>
              {technology.map((technology,index) => (
                  <div className='w-28 h-28 ' key={index}>
                      <BallCanvas icon={technology.icon} />
                  </div>
                ))}
          </div>
      </div>
  )
}

export default Tech