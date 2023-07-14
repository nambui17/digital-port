import {
    Card,
    CardBody,
    Text,
    SimpleGrid,
    CardHeader,
    Heading,
    Button,
    CardFooter,
    Box,
} from '@chakra-ui/react';
import SingleProject from '../components/SingleProject';
import allProjects from '../assets/projectData';

function Projects() {
    return (
        <Box display={'flex'} justifyContent={'center'}>
            <SimpleGrid spacing={4} minChildWidth={'120px'} maxHeight='500px'>
                {allProjects.map(pData => 
                pData.link ? 
                <SingleProject
                    projectTitle={pData.projectTitle}
                    projectText={pData.projectText}
                    link={pData.link}
                    image={pData.image}
                    projectSummary={pData.projectSummary}
                /> :
                <SingleProject
                projectTitle={pData.projectTitle}
                projectText={pData.projectText}
                image={pData.image}
                projectSummary={pData.projectSummary}
            />
                )}
            </SimpleGrid>
        </Box>
    )
}

export default Projects;