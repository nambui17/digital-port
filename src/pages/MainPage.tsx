import { Box, Image } from '@chakra-ui/react'
import NameAnim from '../components/NameAnim'
import HomeTransition from '../transitions/HomeTransition'

function MainPage() {
    return (
        <HomeTransition>
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
        </HomeTransition>
    )
}

export default MainPage