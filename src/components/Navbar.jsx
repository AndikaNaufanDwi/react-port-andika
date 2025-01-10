import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import logo from "../assets/andikanaufan-min.png"
import { FaSquareXTwitter } from "react-icons/fa6"

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src={logo} alt="logo" style={{ width: '60px', height: '40px' }} />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/andikanaufan/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/AndikaNaufanDwi" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/andikanaufand/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://x.com/NaufanAndika" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter />
        </a>
        </div>
    </nav>
  )
}

export default Navbar