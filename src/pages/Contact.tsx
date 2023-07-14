import {
    Box,
    Card,
    CardBody,
    CardHeader,
    Heading,
    SimpleGrid,
    HStack,
    Icon,
    Link,
    VStack,
    Text,
} from '@chakra-ui/react'
import { AtSignIcon, PhoneIcon } from '@chakra-ui/icons'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { ContactTransition } from '../transitions'

function Contact() {

    return (
        <ContactTransition>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <SimpleGrid columns={2} spacing={4}>
                    <Card align='center' size='lg' bg={'brand.600'}>
                        <CardHeader>
                            <Heading as='h1' size='md'>
                                Get In Touch!
                            </Heading>
                        </CardHeader>
                        <CardBody display={'flex'}>
                            <VStack>
                                <Text><PhoneIcon /> +1 (612)860-5784</Text>
                                <Link href='mailto:nam.bui17@icloud.com'> <AtSignIcon /> nam.bui17@icloud.com</Link>
                            </VStack>
                        </CardBody>
                    </Card>
                    <Card align='center' bg={'brand.600'}>
                        <CardHeader>
                            <Heading as='h1' size='md'>
                                Find Me On Social Media!
                            </Heading>
                        </CardHeader>
                        <CardBody>
                            <HStack>
                                <Link href='https://github.com/nambui17' target='_blank'>
                                    <Icon as={FaGithub} boxSize={'2em'} color={'brand.800'} />
                                </Link>
                                <Link href='https://www.linkedin.com/in/nam-bui-8887b8131/' target='_blank'>
                                    <Icon as={FaLinkedin} boxSize={'2em'} color={'brand.800'} />
                                </Link>
                            </HStack>
                        </CardBody>
                    </Card>
                </SimpleGrid>
            </Box>
        </ContactTransition>
    )
}

export default Contact;