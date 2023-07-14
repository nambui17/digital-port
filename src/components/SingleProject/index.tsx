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
    Button
} from '@chakra-ui/react'

interface ProjectInfo {
    projectTitle: string,
    projectText: string,
    link?: string,
    image: string,
    projectSummary: string
}

function SingleProject({ projectTitle, projectText, link, image, projectSummary }: ProjectInfo) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Card>
                <CardHeader>
                    <Heading size='md'>{projectTitle}</Heading>
                </CardHeader>
                <CardBody>
                    <Text>
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
                        <Text>{projectText}</Text>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default SingleProject