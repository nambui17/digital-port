import { motion } from 'framer-motion'

const animationConfig = {
    initial: { x: 100, y: 100, opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: 100, y: 100, opacity: 0 }
}

type Props = {
    children: JSX.Element | JSX.Element[]
}

function AboutTransition({ children }: Props) {
    return (
        <motion.div
            variants={animationConfig}
            initial='initial'
            animate='animate'
            exit='exit'
            transition={{ duration: 0.75}}
        >
            {children}
        </motion.div>
    )
}

export default AboutTransition