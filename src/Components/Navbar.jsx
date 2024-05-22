    import { useState } from 'react'
    import { Link } from 'react-router-dom'
    function Navbar() {
        const [active, setActive] = useState("");
        const [toggle, setToggle] = useState(false)
        const [navLinks, setLinks] = useState([
            {
                id: "about",
                title: "About",
            },
            {
                id: "skills",
                title: "Skills",
            },
            {
                id: "technology",
                title: "Technologies",
            },
            {
                id: "projects",
                title: "Projects",
            },           
            {
                id: "contact",
                title: "Contact",
            },
        ])
        return (
            <nav className='navbar w-full h-16  flex justify-between bg-[#010536]  sticky top-0 '>
                <div className=' w-1/2 ps-12 overflow-hidden'>
                    <Link
                        to='/'
                        onClick={() => {
                            setActive('');
                            setToggle(false)
                            window.scrollTo(0, 0);
                            console.log(active);
                        }}

                    >
                        <img className='w-24 h-full object-cover scale-[2.1] lg:scale-[2.5] ' src="../src/assets/husnainfolio-logo.svg" alt="husnainfolio" />
                    </Link>
                </div>
                <ul className=" list-none hidden  sm:flex  justify-end items-center  gap-6 pe-5">
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`${active === link.title ? "text-white" : "text-slate-500"}   `}
                            onClick={() => {
                                setToggle(!toggle);
                                setActive(link.title)
                            }}
                        >
                            <a className='hover:font-medium hover:text-white' href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))
                    }
                </ul>
                <div className=' sm:hidden flex flex-1 justify-end items-center'>
                    <img src={toggle ? "../src/assets/cross.svg" : "../src/assets/hammenu.svg"}
                        alt="menu"
                        className=' w-10 h-1/2 object-cover  '
                        onClick={() => {
                            setToggle(!toggle)
                        }} />

                    <div className={`${!toggle ? "hidden" : "flex"}   p-5 bg-[#010536] fixed top-16 right-0 mx-4 my-1 min-w-[100px]  z-1000 rounded-xl`}>
                        <ul className=" list-none flex  justify-end items-start flex-1 flex-col gap-4 ">
                            {navLinks.map((link) => (
                                <li
                                    key={link.id}
                                    className={`${active === link.title ? "text-white" : "text-slate-500"}   `}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(link.title)
                                    }}
                                >
                                    <a className='hover:font-medium hover:text-white' href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))
                            }
                        </ul>
                    </div>
                </div>

            </nav>
        )
    }

    export default Navbar