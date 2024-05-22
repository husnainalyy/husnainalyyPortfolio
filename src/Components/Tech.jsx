import React from 'react'
import { useState } from 'react'
import BallCanvas from './Ball'
function Tech() {
    const [technology, settechnology] = useState([
        {
            tech: 'HTML',
            icon:'https://i.ibb.co/5RyVzHG/html.png'
        },
        {
            tech: 'CSS',
            icon: 'https://i.ibb.co/9Gtf4Vj/css.jpg'

        },
        {
            tech: 'BOOTSTRAP',
            icon: 'https://i.ibb.co/p6q0yYf/bootstrap.png'
        },
        {
            tech: 'TAILWIND',
            icon: 'https://i.ibb.co/mbcddhc/tailwind.png'
        },
        {
            tech: 'MATERIALIZE ',
            icon: 'https://i.ibb.co/r5CHvnb/materialize.png'
        },
        {
            tech: 'JAVA SCRIPT',
            icon: 'https://i.ibb.co/WpjGsYN/js.jpg'
        },
        {
            tech: 'GSAP',
            icon: 'https://i.ibb.co/ggKDSV4/gsap.png'
        },
        {
            tech: 'FRAMER MOTION',
            icon: 'https://i.ibb.co/5TFzNbD/framerr.png'
        },
        {
            tech: 'THREE JS',
            icon: 'https://i.ibb.co/9wVLyvV/three.png'
        },
        {
            tech: 'REACT',
            icon: 'https://i.ibb.co/mHMZJTy/react.png'
        },
        {
            tech: 'GIT',
            icon: 'https://i.ibb.co/1mPdY4T/git.png'
        },
        {
            tech: 'FIGMA',
            icon: 'https://i.ibb.co/bs4NjR4/figma.png'
        },
        {
            tech: 'REDUX',
            icon: 'https://i.ibb.co/4KnrQ6X/redux.png'
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