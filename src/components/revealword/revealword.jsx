import { motion } from "motion/react";
import './revealword.scss'

export default function RevealWord({ text }){
    const splitText = text.split(" ");
    
    return(
        <span className="reveal-word">
            {splitText.map((word, index) => (
                <span 
                    style={{ display: "inline-block", overflow: "hidden"}}
                    key={word + index}
                >
                    <motion.span
                        initial={{ y: "100%"}}
                        whileInView={{ y: "0%"}}
                        transition={{ duration: 0.5, delay: index / 10}}
                        viewport={{ once: true }}
                        style={{ display: "inline-block"}}
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </span>
    )
}