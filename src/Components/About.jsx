import { useState } from "react"
import { motion } from "framer-motion"
import { Tilt } from "react-tilt";
import { fadeIn, textVariant } from "../Components/index"
import { useInView } from 'react-intersection-observer';
import Skill from "./Skill";

const ServiceCard = ({index,title,icon,inView}) => {
    return (
        <Tilt className="z-1" >
            <motion.div className="w-40 lg:w-10/12 h-56 lg:h-64 pb-12 bg-slate-900  flex flex-col justify-center items-center ring ring-blue-800 hover:ring-blue-400 "
                variants={fadeIn("right", "spring", 0.6 * index, 2)}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
            >
                    <img className="w-3/5 h-full" src={icon} alt="card" />
                    <p className="text-white text-xl lg:text-2xl flex justify-center  items-center">{title}</p>
            </motion.div>
        </Tilt>
)
}


function About() {
    const [ref, inView] = useInView({
        triggerOnce: false, // Change this to false if you want the animation to trigger again whenever it comes into view
    });
    
    const [cards, setcards] = useState([
        {
            title: 'HTML & CSS',
            icon:'../public/assets/cards/html.svg'
        },
        {
            title: 'JavaScript ',
            icon:'../public/assets/cards/javascript.svg'
        },
        {
            title: 'React & Redux',
            icon:'../public/assets/cards/react.svg'
        },
        {
            title: 'Animation',
            icon:'../public/assets/cards/framer-motion.svg'
        },
        {
            title: '3D visuals',
            icon:'../public/assets/cards/threejs.svg'
        },
    ])
    return (
        
        <div className="  h-full bg-gradient-to-r from-[#131a5c]  to-[#010e23] pt-20 lg:pt-32   px-4 overflow-hidden" id="about" ref={ref}>
            <span  ></span>
            <div className=" flex flex-col items-start sm:mx-36 lg:mx-72  gap-y-2">
                <motion.div variants={textVariant(0.7)} initial="hidden" animate={inView ? "show" : "hidden"}>
                    <p className="text-slate-100 text-sm"> INTRODUCTION</p>
                    <p className="text-5xl font-bold text-white">ABOUT</p>           
                </motion.div>
                
                <motion.p variants={fadeIn("left", "", "0.1", "1")} initial="hidden" animate={inView ? "show" : "hidden"}>
                    <p className="text-cyan-200">Husnain Ali, a dedicated Frontend Developer, masters React while pursuing Software Engineering at
                        COMSATS University Lahore.  My expertise lies in creating captivating user interfaces and optimizing
                        performance. Active in the tech community, I lead roles in ACM and GDSC CUI Lahore, fostering
                        collaboration and knowledge sharing. With a growth mindset, I stays updated on emerging trends,
                        inviting others to explore my portfolio and join my journey of digital innovation.</p>           
                </motion.p>
            </div>
            <div className=" h-screen flex gap-5 gap-y-5 lg:gap-3 justify-center items-center mt-20  lg:mx-72  flex-wrap">
                {
                    cards.map((cards, index) => (
                        <ServiceCard key={cards.title} index={index} icon={cards.icon} title={cards.title} inView={inView} />
                    ))
                }
            </div>
        </div>
    )
}

export default About