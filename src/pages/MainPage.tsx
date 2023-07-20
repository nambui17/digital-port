import { Box, VStack, Image } from '@chakra-ui/react'
import NameAnim from '../components/NameAnim'
import HomeTransition from '../transitions/HomeTransition'
import ImageCarousel from '../components/ImageCarousel'

function MainPage() {
    return (
        <HomeTransition>
            <Box display={'flex'} justifyContent={'center'}>
                <Box display='flex' justifyContent={'center'} alignItems={'center'}>
                    <VStack>
                        <NameAnim />
                        <ImageCarousel/>
                    </VStack>
                </Box>
            </Box>
        </HomeTransition>
    )
}

export default MainPage