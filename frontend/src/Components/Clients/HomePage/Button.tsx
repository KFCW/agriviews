import '../styles/Components/NavBar/SectionHome/style.css'
import { motion } from 'framer-motion';

interface ButtonProps {
    title: string
}

const Button:React.FC<ButtonProps> = ({title}) => {
    return (
        <motion.div initial={{ y: 30 }}
            animate={{ y: -5 }}
            transition={{ ease: "easeOut", duration: 2 }}
            className="box__categorie">
            <h3>{title}</h3>
        </motion.div>
    )
}

export default Button
