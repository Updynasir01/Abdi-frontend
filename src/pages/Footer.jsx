import { TbHexagonLetterA } from "react-icons/tb";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer (){
    return <div >
     <div className=" h-[250px] mt-12 bg-[#f5fcff]">
     <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 text-[#5e3bee] mt-6 md:mb-0">
            <h3 className="text-lg font-bold">ABDINASIR</h3>
            <p className="text-sm"> Welcome to my portfolio</p>
          </div>
          <div  className="flex space-x-4 mb-4 md:mb-0 mt-12 text-[#5e3bee]">
          <a href="#" className="hover:text-blue-400">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaLinkedin size={20} />
            </a>

          </div>
          
        </div>
        <div className="mt-4 border-t text-[#5e3bee] border-gray-500 pt-4 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Abdinasir. All rights reserved.</p>
        </div>
        <div className="mt-2 text-[#5e3bee] text-center">
          <a href="/privacy" className="text-sm hover:underline">Privacy Policy</a>
          <span className="mx-2">|</span>
          <a href="/terms" className="text-sm hover:underline">Terms of Service</a>
        </div>
      </div>
     </div>
    </div>
}
export default Footer