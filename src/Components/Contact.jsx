import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { EarthCanvas } from "../Components/Earth";
import { slideIn } from "../Components/index";
import { fromHalfFloat } from "three/src/extras/DataUtils.js";
import { useInView } from 'react-intersection-observer';



const Tost = ({show, message, type }) => {
    return show &&(     
            <div className={`toast toast-top toast-end alert alert-${type}`}>
                <span>{message}</span>
            </div>
    )
}

const Contact = () => {
    const [toast, setToast] = useState({ show: false, message: '', type: '' });
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) {
            setToast({ show: true, message: 'All fields are required.', type: 'error' });
            return;
        }
        setLoading(true);
        
        emailjs.send(
            'service_5yxwggf',
            'template_6gps8oe',
            {
                from_name: form.name,
                to_name: 'Husnain',
                from_email: form.email,
                to_email: 'alyhusnaiin@gmail.com',
                message:form.message,
            },
            'W4jejOrPQsQiWy9tm'
        ).then(() => {
            setLoading(false);
            alert('ThankYou, I will get back to you soon as possible.');
            setForm({
                name: "",
                email: "",
                message: "",
            })
        }, (error) => {
            setLoading(false)
            console.log(error)
            alert('Something went wrong.')
        })
    };

    const [ref, inView] = useInView({
        triggerOnce: false, // Change this to false if you want the animation to trigger again whenever it comes into view
    });
    return (
        <div className="flex flex-col justify-center items-center overflow-hidden bg-gradient-to-r to-[#131a5c]  from-[#010e23]">
            <div>
                <p className="text-white font-bold text-6xl py-5">Contact Us</p>
            </div>
            
            
            <div className="hidden lg:block w-full  justify-center items-center">
                <div className=" flex flex-col lg:flex-row justify-center items-center mt-5 " ref={ref}>
                    <Tost show={toast.show} message={toast.message} type={toast.type} />
                    
                    <motion.div
                        initial="hidden"
                        animate={ "show"  }
                        variants={slideIn("left", "tween", 0.5, 1)}
                        className=' w-full lg:w-1/2 flex flex-col m-4 ml-4 bg-[#060925] p-5 rounded-2xl  '
                    >
                        <p className="">Get in touch</p>
                        <h3 className="text-white font-bold text-6xl">Contact.</h3>

                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className='mt-6 flex flex-col gap-4'
                        >
                            <label className='flex flex-col'>
                                <span className='text-white font-medium mb-4'>Your Name</span>
                                <input
                                    type='text'
                                    name='name'
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="What's your good name?"
                                    className='bg-gray-800 py-4 px-6 placeholder:text-gray-600 text-white rounded-lg outline-none border-none font-medium'
                                />
                            </label>
                            <label className='flex flex-col'>
                                <span className='text-white font-medium mb-4'>Your email</span>
                                <input
                                    type='email'
                                    name='email'
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="What's your web address?"
                                    className='bg-gray-800 py-4 px-6 placeholder:text-gray-600 text-white rounded-lg outline-none border-none font-medium'
                                />
                            </label>
                            <label className='flex flex-col'>
                                <span className='text-white font-medium mb-4'>Your Message</span>
                                <textarea
                                    rows={7}
                                    name='message'
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder='What you want to say?'
                                    className='bg-gray-800 py-4 px-6 placeholder:text-gray-600 text-white rounded-lg outline-none border-none font-medium'
                                />
                            </label>

                            <button
                                type='submit'
                                className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
                                
                            >
                                {loading ? "Sending..." : "Send"}
                            </button>
                        </form>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate={ "show"}
                        variants={slideIn("right", "tween", 2, 1)}
                        className='w-1/3 lg:h-screen '
                    >
                        <EarthCanvas />
                    </motion.div>
                </div>            
            </div>
            
            
            
            
            <div className="block lg:hidden">
                <div className="w-full flex flex-col lg:flex-row justify-center items-center  p-0 lg:p-20  " ref={ref}>
                    <Tost show={toast.show} message={toast.message} type={toast.type} />

                    <motion.div
                        initial="hidden"
                        animate={inView ? "show" : "hidden"}
                        variants={slideIn("right", "tween", 2, 1)}
                        className='w-full lg:w-1/2 h-96 '
                    >
                        <EarthCanvas />
                    </motion.div>
                    
                    <motion.div
                        initial="hidden"
                        animate={inView ? "show" : "hidden"}
                        variants={slideIn("left", "tween", 0.5, 1)}
                        className='w-full lg:w-1/2 flex flex-col m-4  bg-[#060925] p-5 rounded-2xl  '
                    >
                        <p className="">Get in touch</p>
                        <h3 className="text-white font-bold text-6xl">Contact.</h3>

                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className='mt-6 flex flex-col gap-4'
                        >
                            <label className='flex flex-col'>
                                <span className='text-white font-medium mb-4'>Your Name</span>
                                <input
                                    type='text'
                                    name='name'
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="What's your good name?"
                                    className='bg-gray-800 py-4 px-6 placeholder:text-gray-600 text-white rounded-lg outline-none border-none font-medium'
                                />
                            </label>
                            <label className='flex flex-col'>
                                <span className='text-white font-medium mb-4'>Your email</span>
                                <input
                                    type='email'
                                    name='email'
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="What's your web address?"
                                    className='bg-gray-800 py-4 px-6 placeholder:text-gray-600 text-white rounded-lg outline-none border-none font-medium'
                                />
                            </label>
                            <label className='flex flex-col'>
                                <span className='text-white font-medium mb-4'>Your Message</span>
                                <textarea
                                    rows={7}
                                    name='message'
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder='What you want to say?'
                                    className='bg-gray-800 py-4 px-6 placeholder:text-gray-600 text-white rounded-lg outline-none border-none font-medium'
                                />
                            </label>

                            <button
                                type='submit'
                                className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'

                            >
                                {loading ? "Sending..." : "Send"}
                            </button>
                        </form>
                    </motion.div>

                   
                </div>
            </div>
        </div>
    );
};

export default Contact;