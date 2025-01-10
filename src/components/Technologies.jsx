import { FaJava, FaLinux, FaPython } from "react-icons/fa"
import { FaFlutter } from "react-icons/fa6"
import { FcLinux } from "react-icons/fc"
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5"
import { RiFirebaseFill } from "react-icons/ri"
import { animate, motion } from "framer-motion"

const iconVariations = (duration) => ({
    initial: {y:-10},
    animate: {
        y:[10,-10],
        transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse"
        }
    }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl">
            Technologies
        </motion.h1>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        variants={iconVariations(2.5)}
        initial= "initial"
        animate= "animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaPython className="text-7xl" style={{ color: "#306998" }} />
        </motion.div>
        <motion.div 
        variants={iconVariations(3)}
        initial= "initial"
        animate= "animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaFlutter className="text-7xl" style={{ color: "#02569B" }} />
        </motion.div>
        <motion.div 
        variants={iconVariations(7)}
        initial= "initial"
        animate= "animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiFirebaseFill className="text-7xl" style={{ color: "#FFCA28" }} /> 
        </motion.div>
        <motion.div 
        variants={iconVariations(5)}
        initial= "initial"
        animate= "animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FcLinux className="text-7xl" style={{ color: "#FCC624" }} /> 
        </motion.div>
        <motion.div 
        variants={iconVariations(4)}
        initial= "initial"
        animate= "animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaJava className="text-7xl" style={{ color: "#007396" }} /> 
        </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies