import { motion } from "framer-motion"
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { WalleCanvas } from "./Walle";
import { slideIn } from "../Components/index";



function Hero() {
    const [typeEffect] = useTypewriter({
        words: ['3D visuals, user interfaces and  web applications.'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 60
    })
    const splitText = typeEffect.split(',');
    return (
        <div className='bg-[#010536dd] relative h-screen overflow-hidden   bg-[url(https://images.unsplash.com/photo-1606778303039-9fc1488b1d8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-no-repeat'>

            <div className='h-66 flex justify-center gap-4  items-start pt-12 mx-3 mb-3  '>
                <div className='flex flex-col justify-center items-center '>
                    <div className='w-5 h-5  bg-violet-500 rounded-full'></div>
                    <div className='w-1 h-40 bg-gradient-to-b from-violet-500 to-transparent'></div>
                </div>
                <div className='flex justify-center flex-col  items-center'>
                    <div className=''>
                        <p className='text-white text-5xl lg:text-6xl font-bold whitespace-normal'>Hi, I am <span className='text-purple-500'>Husnain Ali</span></p>
                        <p className='text-slate-200 text-2xl lg:text-3xl  '>I develop <span></span>
                            <span>{splitText[0]}</span><br />
                            <span>{splitText[1]}</span>
                            <Cursor />
                        </p>
                    </div>
                </div>
            </div>
            

            <motion.div
                className=' h-96  sm:pb-0 lg:pb-6 '
                initial="hidden"
                animate="show"
                variants={slideIn("down", "tween", 1.5, 1.5)}
            >
                <WalleCanvas />
            </motion.div>

            <div className='absolute sm:bottom-8 lg:bottom-1 w-full flex justify-center items-center '>
                <a href="#about" className="bottom-1">
                    <div className='w-[35px] h-[60px] rounded-3xl border-4 border-white flex justify-center items-center '>
                        <motion.div className="w-3 h-3 rounded-full bg-white"
                            animate={{ y: [0, 20, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: 'loop'
                            }}
                        />
                    </div>
                </a>
            </div>
           
        </div>
    )
}

export default Hero