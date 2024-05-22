
import { useState,useEffect } from "react"


function ProgressBar({ skill }) {
    const [progressRange, setProgressRange] = useState(skill.range)
    useEffect(() => {
        setProgressRange(skill.range);
    }, [skill.range]);
    return (
        <div className=" radial-progress text-primary text-2xl  " style={{ "--value": progressRange, "--size": "16rem", "--thickness": "1.5rem" }} role="progressbar" >
            <p className="items-center flex justify-center align-middle">
                {skill.title} 
            </p>
             </div >
)
}

function Skill() {
    const [skills, setSkills] = useState([
        {
            title: "Html",
            range:95
        },
        {
            title: "CSS",
            range: 90
        },
        {
            title: "Tailwind Bootstrap",
            range: 90
        },
        {
            title: "Javascript",
            range: 80 
        },
        {
            title: "Gsap",
            range: 70
        },
        {
            title: "Framer Motion",
            range: 70
        },
        {
            title: "React",
            range: 80
        },
        {
            title: "Redux",
            range: 80
        },
        {
            title: "Three.js",
            range: 60
        },
        {
            title: "Git",
            range: 85
        },
    ])
    const [selectedSkill, setSelectedSkill] = useState(skills[0])
    return (
        <div className="  bg-[url(https://images.unsplash.com/photo-1599936962590-47270e4dbdf9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] ">
            <div className="w-full h-40 " >
                <img src="https://svgshare.com/i/16LE.svg" alt=""  />
            </div>
            <div className="flex flex-col justify-center items-center  pt-28" id="skills">
                <p className="text-white text-7xl font-bold pb-8">Skills</p>
                <div className="w-full lg:w-2/3 h-screen lg:h-96  grid  lg:flex  backdrop-blur-md">
                    <div className="w-full lg:w-1/2  justify-center items-center lg:border-r-2">
                        <div className="w-full  h-full grid grid-cols-2 gap-x-4 gap-y-3  justify-items-center place-content-center">
                            {skills.map((skill, index) => (
                                <button key={index} onClick={() => setSelectedSkill(skill)}
                                    className=" w-32 h-14 bg-gradient-to-r from-[#3F2B96]  to-[#A8C0FF]  hover:bg-gradient-to-r hover:from-[#6342f6] hover:to-[#7fa1f6] border-transparent hover:border-[2px] hover:border-sky-500 rounded ">
                                    {skill.title}
                                </button>
                            )
                            )}
                        </div>
                    </div>
                    
                    <div className=" w-full lg:w-1/2 flex justify-center items-center">
                        <ProgressBar  skill={selectedSkill}  />
                    </div>
                    
                </div>
                <div className="w-full  " >
                    <img src="https://svgshare.com/i/16Kc.svg" alt="" id='technology' />
                </div>
            </div>
           
        </div>
    )
}

export default Skill