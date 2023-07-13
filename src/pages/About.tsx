import { Image, Box } from '@chakra-ui/react'
import Transitions from '../transitions/AboutTransition';


function About() {
    return (
        <Transitions>
            <Box>
                <Image src='assets/Me.jpg' />
            </Box>
        </Transitions>
    )
}

export default About;