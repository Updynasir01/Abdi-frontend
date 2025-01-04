import { FaWhatsapp } from "react-icons/fa";
import Lottie from "lottie-react"
import cong from "../assets/cong.json"

function Cong (){
    return <div>
        <div>

        
        <div className=" text-center pt-60">
        <h1 className="text-2xl font-semibold">"We'll be in touch with you soon."</h1>
        <h1>Thank you for visiting my portfolio! Feel free to explore my work, and don't hesitate to reach out</h1>
        <button className=" text-center bg-[#5e3bee]  text-white w-[130px]  mt-6 rounded-md h-[40px]">GO back</button>
        </div>
        <div className="mt-2 text-[#5e3bee] flex justify-center bottom-3 absolute left-[35%] gap-1 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Abdinasir. All rights reserved.</p>
                  <a href="/privacy" className="text-sm ml-1 hover:underline">Privacy Policy</a>
                  <span className="mx-2">|</span>
                  <a href="/terms" className="text-sm hover:underline">Terms of Service</a>
                </div>
                </div>
                <Lottie className="w-[600px] absolute bottom-20 right-[30%]" animationData={cong} />
    </div>
}

export default Cong