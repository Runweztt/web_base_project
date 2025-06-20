import React, { useEffect, useState } from 'react'
import workspace1 from '../../assets/workspace1.jpg'
import workspace2 from '../../assets/workspace2.jpg'
import workspace3 from '../../assets/workspace3.jpg'
import workspace4 from '../../assets/workspace4.jpg'

import './Home.css'

function Home() {
    const workspaces = [
  {
    name: "Marketing Hub",
    description: "Collaborate on creative strategies and campaigns in a vibrant environment.",
    availability: "Available"
  },
  {
    name: "Design Studio",
    description: "Perfect for visual thinkers. Equipped with creative tools and whiteboards.",
    availability: "Fully Booked"
  },
  {
    name: "Developer Den",
    description: "Ideal for coding sprints, system architecture, and product building.",
    availability: "Available"
  },
  {
    name: "Startup Bay",
    description: "Flexible space for small teams launching their next big thing.",
    availability: "Limited"
  },
  {
    name: "Executive Suite",
    description: "Premium setup for executives and client meetings.",
    availability: "Available"
  },
  {
    name: "Quiet Pods",
    description: "Noise-free workspaces for deep focus and uninterrupted productivity.",
    availability: "Available"
  },
  {
    name: "Co-Lab Area",
    description: "Shared space for open collaboration between teams and individuals.",
    availability: "Fully Booked"
  },
  {
    name: "Content Corner",
    description: "Tailored for creators: record, edit, and publish in one space.",
    availability: "Limited"
  },
  {
    name: "Client Lounge",
    description: "Designed for client onboarding, demos, and presentations.",
    availability: "Available"
  },
  {
    name: "Remote Room",
    description: "Plug-and-play cabins for remote workers needing privacy and quiet.",
    availability: "Available"
  }
]

 const [searchinput, setSearchinput] = useState("")
 const [searclist, setSearchlist] = useState([])

 const handleChange =(e)=>{
    setSearchinput(e.target.value)
 }

 const submitChange = ()=>{
    const filterd = workspaces.filter(items => 
        items.case.toLowerCase() === searchinput.toLowerCase());
        setSearchlist(filterd)
 }

 const handleRemove = (index) => {
    setSearchlist(remov => remov.filter((_, i)=> i !== index))

 }

    const [color, setColor] = useState('linear-gradient(to bottom, #ff7e5f, rgb(158, 106, 66))')

    useEffect(() => {
        const handleColor = () => {
            if (window.scrollY >= 100) {
                setColor('#ff7e5f')
            } else {
                setColor('linear-gradient(to bottom, #ff7e5f, rgb(158, 106, 66))')
            }
        };

        window.addEventListener('scroll', handleColor)
        handleColor()

        return () => {
            window.removeEventListener('scroll', handleColor)
        }
    }, [])

    return (
        <>
            {/* Section One - Hero */}
            <div className="section1" style={{ background: color }}>
                <div className='hero1'>
                    <h1>Discover The True WorkSpace</h1>
                    <p>Join a vibrant community of innovators, creators, and teams. Work, collaborate, and grow in a workspace built for productivity and progress.</p>
                    <button className='btn2'>Get Started</button>
                    <button className='btn2'>Book a Tour</button>
                </div>
            </div>

            {/* Section Two - Workspaces */}
            <div className="section2">
                <h1>Our Workspaces</h1>

                <div className='gridwork'>
                    <div className='workspace-card'>
                        <img src={workspace1} alt="workspace 1" />
                        <div>
                            <h2>Marketing Hub</h2>
                            <p>Collaborate on creative projects with your design team in real time.</p>
                        </div>
                    </div>

                    <div className='workspace-card'>
                        <img src={workspace2} alt="workspace 2" />
                        <div>
                            <h2>Development Desk</h2>
                            <p>Organise sprints, track issues, and ship faster with your dev team.</p>
                        </div>
                    </div>

                    <div className='workspace-card'>
                        <img src={workspace3} alt="workspace 3" />
                        <div>
                            <h2>Executive Suite</h2>
                            <p>Private offices designed for focus, leadership, and high-level strategy.</p>
                        </div>
                    </div>

                    <div className='workspace-card'>
                        <img src={workspace4} alt="workspace 4" />
                        <div>
                            <h2>Collab Lounge</h2>
                            <p>Meet, brainstorm, and share ideas in a relaxed and open lounge area.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='workspace'>
                
                <div>
                    <label> enter search input</label>
                    <input type="text" value={searchinput} onChange={handleChange} placeholder='search items..............' />
                    <button onClick={submitChange}>search</button>
                </div>

            </div>
        </>
    )
}

export default Home
