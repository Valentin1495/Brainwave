import React from "react";
import { motion } from "framer-motion";

const Modal = ({ selected, setSelected }) => {
    const onClick = (e) => {
        if(e.target.classList.contains('backdrop')) {
            setSelected(null)
        }
    }
    
    return (
        <motion.div 
            className="backdrop" 
            onClick={onClick}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
        > 
            <motion.img
                src={selected} 
                alt="enlarged" 
                initial={{y: "-100vh"}}
                animate={{y: "0"}}
            />
        </motion.div>
    )
}

export default Modal;