import { Image, Box } from '@chakra-ui/react'
import AboutTransition from '../transitions/AboutTransition';


function About() {
    return (
        <AboutTransition>
            <Box>
                <Image src='assets/Me.jpg' boxSize={'150px'} objectFit={'cover'} alt='Nam Bui'/>
            </Box>
        </AboutTransition>
    )
}

export default About;