import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalOverlay,
    useDisclosure,
    Card,
    CardHeader,
    Heading,
    CardBody,
    Text,
    CardFooter,
    Button,
    ModalFooter,
    Link,
    Image,
    HStack,
    Icon,
    VStack,
} from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa6'

interface ProjectInfo {
    projectTitle: string,
    projectText: string,
    link?: string,
    image: string,
    projectSummary: string,
    gitHubLink?: string,
    projectDate: string
}

function SingleProject({ projectTitle, projectText, link, image, projectSummary, gitHubLink, projectDate }: ProjectInfo) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Card mb='20px' pb='20px'>
                <CardHeader>
                    <Heading size='md'>{projectTitle}</Heading>
                </CardHeader>
                <CardBody display={'flex'} flexWrap={'wrap'} justifyContent={'center'}>
                    <Image src={image} maxH={'300px'} objectFit={'contain'} mb={'40px'}/>
                    <Text textAlign={'left'}>
                        {projectSummary}
                    </Text>
                </CardBody>
                <CardFooter>
                    <Button onClick={onOpen}>Read More Here</Button>
                </CardFooter>
            </Card>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                closeOnOverlayClick={true}
                isCentered={true}
                motionPreset={'slideInBottom'}
            >
                <ModalOverlay
                    bg='none'
                    backdropFilter='auto'
                    backdropInvert={'40%'}
                    backdropBlur={'2px'}
                />
                <ModalContent>
                    <ModalHeader>{projectTitle}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={4}>
                        <VStack>
                            <Text>{projectText}</Text>
                            <Text fontSize={'sm'} fontStyle={'italic'}>{projectDate}</Text>
                        </VStack>
                    </ModalBody>
                    <HStack>
                        {link ?
                            <ModalFooter>
                                <HStack>
                                    <Button>
                                        <Link href={link} target='_blank'>View Project</Link>
                                    </Button>
                                    <Button>
                                        <Link href={gitHubLink} target='_blank'><Icon as={FaGithub} boxSize={'2em'} /></Link>
                                    </Button>
                                </HStack>
                            </ModalFooter> :
                            <></>}
                    </HStack>
                </ModalContent>
            </Modal>
        </>
    )
}

export default SingleProject