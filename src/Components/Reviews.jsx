import React from 'react'
import { useState } from 'react'



function Reviews() {
    const [reviews, setreviews] = useState([
        {
            review: 'I think it was impossible to made the cool website which I thought but Husnain proved me wrong with his dedication and hard work.',
            name: 'Ahmad Basit',
            company: 'CEO of P2P clouds'
        },
        {
            review: 'I never met web developer like Husnain, who truly cares about their client success and happiness like Husnain does.',
            name: 'Wang Brown',
            company: 'CFO of Labs.io'
        },
        {
            review: 'Husnain made our Boring website to amazing and creative website with his skills in 3d visuals and animations.',
            name: 'Sara Cris',
            company: 'CTO of dotCode'
        }
    ])

    return (
        <div className=' bg-gradient-to-r from-[#131a5c]  to-[#010e23] '>

            <div className='backdrop-blur-3xl mx-0 lg:mx-56  p-5 '>
                <p className='text-gray-200'>What others says </p>
                <p className='text-white text-4xl lg:text-5xl font-bold pb-6 lg:pb-0'>TESTIMONIALS.</p>
                <div className='w-full flex flex-col lg:flex-row justify-center items-center gap-6  lg:h-96   '>
                    {reviews.map((testimonial,index) => (
                        <div key={index} className='w-full lg:w-1/3 p-5  h-80  flex-col pt-16  gap-2 bg-[#060e2a] backdrop-blur-lg border rounded-xl'>
                            <p className=''>{testimonial.review }</p>
                            <p className='pt-6'>{testimonial.name }</p>
                            <p>{testimonial.company }</p>
                        </div>
                    ))
                    }
                </div>
            </div>
            <span id='contact'></span>
        </div>
    )
}

export default Reviews