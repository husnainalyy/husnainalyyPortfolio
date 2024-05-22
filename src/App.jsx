import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Skill from './Components/Skill'
import Tech from './Components/Tech'
import MiniContact from './Components/MiniContact'
import Projects from './Components/Projects'
import Reviews from './Components/Reviews'
import Contact from './Components/Contact'
function App() {

    return (

        <BrowserRouter>
            <>
                <Navbar />
                <Hero />
                <About />
                <Skill />
                <Tech />
                <MiniContact />
                <Projects />
                <Reviews />
                <Contact/>
            </>
        </BrowserRouter>

    )
}

export default App
