import Waji from "../assets/images/Waji.png"
import AboutMe from "../assets/images/AboutMe.png"
import { FaCode } from "react-icons/fa6";
import { RiQuillPenLine } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import { GrPlan } from "react-icons/gr";
import { FaHtml5 } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import Image from "../assets/images/Image.png"
import { GoArrowUpRight } from "react-icons/go";
import Xal from "../assets/images/Xal.png"
import Moc from "../assets/images/Moc.png"
import { TbHexagonLetterA } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import Abdi from "../assets/images/Abdi.jpg"
import Contact from "../pages/Contact";
import Footer from "../pages/Footer";

import SYD from "../assets/images/SYD.jpg"
import SYd from "../assets/images/SYd.png"
import D from "../assets/images/D.jpg"
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import abdin from "../assets/Documents/abdin.pdf"
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";

function Home (){

    const [Open ,setOpen ]=useState(false)
    const handleOpen =()=>{
        setOpen(true)
    }
    const handleClose =()=>{
        setOpen(false)
    }

    return <div>
         <div>
        

      
        
<section id="home">
      
        <div className="sm:flex gap-7 justify-between py-4 bg-white backdrop-blur-3xl opacity-75 px-6  sm:px-32 sm:fixed top-0 sm:left-0 sm:right-0 items-center ">
            <h1 className="font-bold text-[#1c1e53] flex text-1xl"><TbHexagonLetterA className="text-[#5e3bee] text-2xl" /> BDINASIR</h1>
            <ul style={{display :Open ==true? "block" :""  }} className="sm:flex gap-6 hidden mt-3  text-[#1c1e53] font-medium ">
                <li className=" hover:text-[#5e3bee]"> <a href="#home">HOME</a> </li>
                <NavLink to="/Contact"> <li className=" hover:text-[#5e3bee]"> CONTACT </li></NavLink>
                <li className=" hover:text-[#5e3bee]"> <a href="#three">ABOUT ME</a></li>
                <li className=" hover:text-[#5e3bee]"> <a href="#four">CASES</a></li>
                <li className=" hover:text-[#5e3bee]"> <a href="#two">SKILLS</a></li>
            </ul>
            <FaBars onClick={handleOpen}   style={{display : Open == true? "none" :""  }}  className="absolute top-5 sm:hidden right-7" />
            <IoMdClose onClick={handleClose}  style={{display : Open == true? "block" :""  }} className="absolute hidden top-5 sm:hidden right-7"  />
            <NavLink to="/Contact"> <button className=" hidden sm:block w-[135px] h-[50px] border hover:bg-[#5e3bee] hover:text-white border-[#5e3bee] text-[#5e3bee] rounded-md">Contact me</button></NavLink>
        </div>
        </section>



        <section id="one">
        <div className="bg-[#f4fbfe]  h-screen sm:flex justify-between items-center px-6 sm:px-32 pt-14">
            <div className="sm:w-[600px] w-[360px] ">
                <div className="flex gap-2">

                <h1 className="font-semibold  ">Hey, I am Abdinasir</h1>
                <i class="fa-solid fa-hand text-center text-yellow-400 mt-1 text-1xl" ></i>
                </div>
                <h1 className="sm:text-5xl text-3xl    font-bold mt-4 text-[#282938]">I develope <span className="text-[#5e3bee]">website design </span> and brand experience</h1>
                <p className="sm:mt-5 pb-3 mt-4   ">Welcome to my portfolio! Explore my work as a web developer, where creativity meets functionality to bring your ideas to life.</p>

               <button className=" absolute top-[560px] left-32 w-[135px] mt-10 h-[50px] border bg-[#5e3bee] hover:bg-white text-white border-[#5e3bee] hover:text-[#5e3bee] rounded-md"> <a href={abdin} download="abdin" >Download CV</a>  </button>
            </div>
            <div>
                <img className="w-[650px] rounded-2xl" src={SYD} alt="" />
            </div>
            <FaHtml5 className="sm:text-6xl text-3xl lg:right-40 lg:top-80 text-orange-500 top-[450px] right-14  absolute  sm:hiden  sm:absolute sm:right-48 xl:top-[350px] " />
            <FaCss3 className="sm:text-6xl text-3xl lg:right-40 lg:top-[390px] top-[450px] right-24   text-blue-500  absolute  sm:hidn sm:absolute sm:right-52 xl:top-[420px]" />
            <RiTailwindCssFill className="sm:text-6xl text-3xl  lg:left-[650px] left-20  text-cyan-500 absolute   top-[450px]     sm:absolute xl:left-[760px] xl:top-[390px]" />
            <IoLogoJavascript className="sm:text-6xl text-3xl lg:left-[700px] top-[480px] left-20  text-yellow-500   absolute  sm:absolute xl:left-[800px] xl:top-[340px]" />
            <FaReact className="sm:text-6xl text-3xl  lg:left-[740px] lg:top-[380px] top-[450px] left-12  text-blue-500  sm:absolute absolute  xl:left-[845px] xl:top-[390px]" />
            <FaNodeJs  className="sm:text-6xl text-3xl lg:right-56 lg:top-96  text-green-500 top-[480px] right-20  absolute sm: sm:absolute sm:right-64 sm:top-80" />
            <SiMongodb className="sm:text-6xl text-3xl  lg:left-[700px] top-[490px] left-14   text-green-500  absolute sm: sm:absolute xl:left-[800px] xl:top-[420px] " />
            

        </div>
        </section>





        <section id="two">

        

        <div className=" h-screen px-7  sm:px-32 sm:pt-28 bg ">
            {/* <h1 className="font-bold">My Skills</h1> */}
            <h1 className="font-bold text-3xl ">My Expertise</h1>

            <div className=" mt-9 grid-cols-1  sm:flex sm:gap-7 ">
                <div className="w-[300px]  h-[270px] mt-6 p-4 rounded-md hover:border-b-4 hover:shadow-lg border-[#5e3bee] bg-[#f5fcff]">
                    
                    <div className="w-[60px] shadow-md p-3 shadwo rounded-md  h-[60px] bg-white ">

                    <GrPlan className="text-4xl text-[#006b6a] "/>
                    
                    </div>
                    <h1 className="text-2xl text-[#282938] font-bold mt-7 ">Strategy & Planing</h1>
                     <p className=" mt-2">strategy and planning involve defining goals, </p>
                </div>
                <div className="w-[300px] h-[270px] mt-6 p-4 rounded-md hover:border-b-4 hover:shadow-lg border-[#5e3bee] bg-[#f5fcff]">
                    
                    <div className="w-[60px] shadow-md p-3 shadwo rounded-md  h-[60px] bg-white ">

                 
                    <CiSettings className="text-4xl text-[#006b6a] " />
                    </div>
                    <h1 className="text-2xl  text-[#282938] font-bold mt-7 ">Redesignin</h1>
                     <p className="mt-2 "> enhancing functionality, and refreshing aesthetics to meet evolving needs!</p>
                </div>
                <div className="w-[300px] h-[270px] mt-6 p-4 rounded-md hover:border-b-4 hover:shadow-lg border-[#5e3bee] bg-[#f5fcff]">
                    
                    <div className="w-[60px] shadow-md p-3 shadwo rounded-md  h-[60px] bg-white ">

                 
                    <RiQuillPenLine className="text-4xl text-[#006b6a] " />
                    </div>
                    <h1 className="text-2xl font-bold text-[#282938] mt-7 ">UI & UX Design</h1>
                     <p className="mt-2 "> Skilled in UI/UX design, I create intuitive interfaces and engaging experiences that prioritize user satisfaction.</p>
                </div>
                <div className="w-[300px] h-[270px] mt-6 p-4 rounded-md hover:border-b-4 hover:shadow-lg border-[#5e3bee] bg-[#f5fcff]">
                    
                    <div className="w-[60px] shadow-md p-3 shadwo rounded-md  h-[60px] bg-white ">

                    <FaCode className="text-4xl text-[#006b6a] " />
                    </div>
                    <h1 className="text-2xl text-[#282938] font-bold mt-7 ">Web Development</h1>
                     <p className="mt-2 ">Proficient in web development, I build responsive. </p>
                </div>
                
            </div>


        </div>
        </section>





        <section id="three">

        
            <div className="sm:mt-24  mt-[550px] sm:h-screen grid grid-cols-1   sm:flex sm:px-32  p-7 sm:pt-28  ">
                <div>
                    

                <img className="w-[2300px] rounded-md" src={D} alt="" />
                </div>
                <div className="sm:ml-64 lg:mt-10  mt-28">
                    <h1 className="text-4xl font-bold text-[#282938] ">About</h1>
                    <p className="  text-[#282938] text-justify ">
             Hi, I’m Abdinasir, a passionate Full Stack Developer with a knack for creating dynamic and user-friendly web applications. With a strong foundation in both front-end and back-end technologies, I enjoy crafting seamless experiences that bridge the gap between design and functionality.
             My Approach
            I believe in writing clean, maintainable code and staying updated with the latest industry trends. I enjoy tackling complex problems and turning ideas into reality, whether through agile development or leveraging modern frameworks.
             When I’m not coding, you can find me exploring new technologies or contributing to open-source projects. Let’s connect and bring your ideas to life!
                </p>
                </div>
                
          
            </div>
            </section>





            <section id="four">

            

        <div className="sm:px-32 px-4  sm:pt- sm:h-scree ">
            <div className="mt-36 flex justify-between h-[50px]">
                <h1 className="font-bold text-3xl">Recent Projects</h1>
                <button className="w-[181px] h-60px rounded-md border-2 hover:bg-[#e62872] hover:text-white border-[#e62872] text-[#e62872] "> <i class="fa-brands fa-github mr-2"></i> <a href="https://github.com/Updynasir01">Visit My GitHub</a>  </button>
            </div>
            <div className=" h-[560px] lg:gap-7 pt-3  sm:flex grid grid-cols-1 sm:justify-around">
                <div className="h-[490px]  mt-7  sm:w-[400px] w-[350px]  shadow-md rounded-md">
                    <img src={Image} alt="" />
                    <h1 className="text-2xl px-3 mt-3 font-bold text-[#282938] ">Voting System</h1>
                    <p className="px-3">Developed a secure voting system with user authentication, real-time results, and an intuitive interface for participants </p>
                    <button className="border-b-2  pt-0 p-2 hover:scale-105 ml-3 font-semibold flex border-[#5e3bee] mt-7">View In GitHub <GoArrowUpRight className="ml-2 mt-1 font-semibold" /></button>

                    
                </div>
                <div className="h-[490px]   sm:w-[400px] mt-7 w-[350px] shadow-md rounded-md">
                    <img src={Xal} alt="" />
                    <h1 className="text-2xl px-3 mt-3 font-bold text-[#282938] ">App Dashboard</h1>
                    <p className="px-3">Created an interactive app dashboard, featuring data visualization and user-friendly navigation for enhanced decision-making. </p>
                    <button className="border-b-2 p-2 hover:scale-105 ml-3 font-semibold flex border-[#5e3bee] mt-7">View In GitHub <GoArrowUpRight className="ml-2 mt-1 font-semibold" /></button>

                    
                </div>
                <div className="h-[490px]  sm:w-[400px] mt-7 w-[350px] shadow-md rounded-md">
                    <img src={Moc} alt="" />
                    <h1 className="text-2xl px-3 mt-3 font-semibold text-[#282938] ">Home Renting</h1>
                    <p className="px-3">Designed a home renting platform that simplifies listings, facilitates communication, and streamlines the rental process for users. </p>
                    <button className="border-b-2 p-2 hover:scale-105 ml-3 font-semibold flex border-[#5e3bee] mt-7">View In GitHub <GoArrowUpRight className="ml-2 mt-1 font-semibold" /></button>

                    
                </div>
            </div>


           
             
            

       
        
        
        </div>
        </section>



        
           
           
            
       
        
          
   

    </div>
    
    <Footer />
  
    </div>
}
export default Home
