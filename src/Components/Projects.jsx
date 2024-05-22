import React, { useState } from 'react'


function Projects() {
    const [Projects, setProjects] = useState([
        {
            title: 'Website for Marketing Agency ',
            description: 'Welcome to Mad Men Marketing Agency, where innovation meets strategy. Our creative expertise and data-driven approach are designed to elevate your brands presence.Partner with us to transform your vision into reality.Lets drive your success together.',
            link: 'https://mad-mar.netlify.app/',
            img:'https://i.ibb.co/CQVS2hg/Screenshot-2024-05-22-101035.png'
        },
        {
            title: 'Ecommerce Store Design for Brand ',
            description: 'Shop Hub is a stylish ecommerce storefront featuring HTML, CSS, Bootstrap, and JavaScript. Designed purely for frontend interaction, it offers an engaging shopping experience with sleek  design, responsive layout, and interactive elements',
            link: 'https://splendorous-rolypoly-c94250.netlify.app/',
            img: 'https://i.ibb.co/5nwXbLc/Screenshot-2024-05-02-234825.png'
        },
        {
            title: 'Website for Fertilizer Agency ',
            description: 'Step into the world of Rammay Zarai Services, your trusted partner in agricultural success. Explore our portfolio showcasing premium fertilizers tailored to empower farmers. Join us in cultivating sustainable growth and prosperity for every harvest.',
            link: 'https://ramayseeds.com/',
            img: 'https://i.ibb.co/PFrvpHM/Screenshot-2024-05-10-195904.png'
        },
        {
            title: 'web application for the Environmental Conservation Foundation',
            description: 'With only 5 hours to complete the task, I managed to create a basic web app, which may not have been perfect, but was a great learning experience 💻',
            img: 'https://i.ibb.co/g49psyv/Screenshot-2024-05-22-100732.png',
            link: 'https://rechnoverse.vercel.app/',
        },
        {
            title: 'Barber hub for barber shop',
            description: 'Barber Hub: Your one-stop destination for barber services and products. Barbers register, showcase services, and sell products effortlessly. Elevate your grooming experience with us.',
            img: 'https://i.ibb.co/SVD8csq/Screenshot-2024-05-02-234053.png',
            link: 'https://www.figma.com/design/64X70esjvETDp4CuB5YjwO/Barber-project?node-id=0%3A1&t=Bc69ccvXDYkHKrZY-1',
        }
    ])
    
    return (
        <div className='w-full  flex flex-col gap-y-6 justify-items-center items-center' id='projects'>
            <div>
                <p className='mt-10 lg:mt-20 font-bold text-4xl lg:text-5xl text-white'>Latest Projects</p>
            </div>
            <div className=' ' >             
                {
                    Projects.map((project, index) => (
                        <div key={project.id}>
                        <div key={index} className='  hidden lg:block p-4 w-full  h-full '>                          
                                {index % 2 ?
                                    <div key={index} className='flex p-2 w-full  h-full '>
                                        <div className='w-1/2'>
                                            <img className='w-full h-96 relative hover:border-[#FFF7ED] border-transparent border-b-8 border-r-8 transition-all duration-1000' src={project.img} alt={project.title} />
                                        </div>
                                        <div className='w-1/2 m-12 flex flex-col gap-y-4 justify-items-start  text-slate-900'>
                                            <p className=' bg-orange-100 text-gray-500 text-lg w-32 rounded-xl flex justify-center items-center'>Web dev</p>
                                            <h1 className='text-white text-3xl font-semibold'>{project.title}</h1>
                                            <p className='text-orange-100 '>{project.description}</p>
                                            <a className="btn w-32" target="_blank" href={project.link}>View Project</a>
                                        </div>
                                    </div>
                                    :
                                    <div key={index} className='flex p-2 w-full  h-full '>
                                        <div className='w-1/2 m-12 flex flex-col gap-y-4 justify-items-start  text-slate-900'>
                                            <p className=' bg-orange-100 text-gray-500 text-lg w-32 rounded-xl flex justify-center items-center'>Web dev</p>
                                            <h1 className='text-white text-3xl font-semibold'>{project.title}</h1>
                                            <p className='text-orange-100 '>{project.description}</p>
                                            <a className="btn w-32" target="_blank" href={project.link}>View Project</a>
                                        </div>
                                        <div className='w-1/2'>
                                            <img className='w-full h-96 relative hover:border-[#FFF7ED] border-transparent border-b-8 border-r-8 transition-all duration-1000' src={project.img} alt={project.title} />
                                        </div>
                                    </div>
                                }                   
                        </div> 


                        <div key={project.id} className='  block lg:hidden  w-full  h-full p-4'>                          
                            {
                                <div key={project.id} className='flex-col w-full h-full '>
                                    <div className='w-full'>
                                        <img className='w-full h-96 relative hover:border-[#FFF7ED]  hover:border-b-8 hover:border-r-8 transition-all duration-1000' src={project.img} alt={project.title} />
                                    </div>
                                    <div className='w-full my-4 px-4 flex flex-col gap-y-4 justify-items-start  text-slate-900'>
                                        <p className=' bg-orange-100 text-gray-500 text-lg w-32 rounded-xl flex justify-center items-center'>Web dev</p>
                                        <h1 className='text-white text-3xl font-semibold'>{project.title}</h1>
                                        <p className='text-orange-100 '>{project.description}</p>
                                            <a className="btn w-32" target="_blank" href={project.link}>View Project</a>
                                    </div>
                                    <div className='border-y-2 my-4 mx-16'>
                                    </div>   
                                </div>

                            }                            
                        </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects