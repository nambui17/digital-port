import {
    SimpleGrid,
    Box,
} from '@chakra-ui/react';
import SingleProject from '../components/SingleProject';
import allProjects from '../assets/projectData';

function Projects() {
    return (
        <Box display={'flex'} justifyContent={'center'} mb={'50px'}>
            <SimpleGrid spacing={4}>
                {allProjects.map(pData => 
                pData.link ? 
                <SingleProject
                    projectTitle={pData.projectTitle}
                    projectText={pData.projectText}
                    link={pData.link}
                    image={pData.image}
                    projectSummary={pData.projectSummary}
                    projectDate={pData.projectDate}
                /> :
                <SingleProject
                projectTitle={pData.projectTitle}
                projectText={pData.projectText}
                image={pData.image}
                projectSummary={pData.projectSummary}
                projectDate={pData.projectDate}
            />
                )}
            </SimpleGrid>
        </Box>
    )
}

export default Projects;