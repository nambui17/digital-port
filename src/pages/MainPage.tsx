import { Box, Image } from '@chakra-ui/react'
import NameAnim from '../components/NameAnim'
import Transitions from '../transitions/AboutTransition'

function MainPage() {
    return (
        <Transitions>
            <Box display={'flex'} justifyContent={'center'}>
                <Box display='flex' justifyContent={'center'} alignItems={'center'}>
                    <NameAnim />
                </Box>
                <Image
                    boxSize='150px'
                    objectFit={'cover'}
                    src='/assets/Me.jpg'
                    alt='Nam Bui'
                    borderRadius={'full'}
                />
            </Box>
        </Transitions>
    )
}

export default MainPage