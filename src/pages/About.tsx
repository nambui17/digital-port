import { Image, Grid, GridItem, Text, Divider, Wrap, WrapItem, SimpleGrid } from '@chakra-ui/react'
import AboutTransition from '../transitions/AboutTransition';


function About() {
    return (
        <AboutTransition>
            <Wrap spacing={'30px'} align={'center'}>
                <Grid templateAreas={'profile text'} gridTemplateColumns={'0.5fr 2.5fr'}>
                    <GridItem area={'profile'} colSpan={1} display={'flex'} justifyContent={'center'}>
                        <WrapItem>
                            <Image src='assets/Me.jpg' boxSize={'150px'} objectFit={'cover'} alt='Nam Bui' borderRadius={'md'} border={'2px'}/>
                        </WrapItem>
                    </GridItem>
                    <GridItem area={'text'} colSpan={2}>
                        <WrapItem>
                            <Text textAlign={'left'} color={'brand.600'}>My name is Nam and I am a chemical engineer with experience in software engineering and full-stack web development. After graduating from the University of Minnesota: Twin Cities with a Bachelors of Science in Chemical Engineering, I obtained a position as a Research and Development Chemist at Cantel Medical (now Steris Corp.), where I had interned for three summers both in Operations Engineering and Research and Development. Throughout my tenure at Cantel/Steris I have worked on everything from chemical titrations and reactor design, to software automation and robotic arm programming. Through my knowledge of chemistry, software, and reactors, I have designed reactors that produces the final product of a chemical process that takes minutes rather than days and eliminated a portion of guesswork for batch building.
                            </Text>
                        </WrapItem>
                    </GridItem>
                </Grid>
                <Divider />
                <Grid templateAreas={'text milo'} gridTemplateColumns={'2.5fr 0.5fr'}>
                    <GridItem area={'text'} colSpan={2} display={'flex'} justifyContent={'center'}>
                        <WrapItem>
                            <Text textAlign={'left'} color={'brand.600'}>
                                When not working, I like to go hiking and being outdoors playing with my dog, Milo. I enjoy exercising my creativity through baking and cooking, whether it is thinking of new flavor combinations for baking cakes or decorating pastries. When I have time, traveling to new locations seeing the sights and eating interesting foods provides me inspiration for any new ideas that I might have for products and applications that I could make.
                            </Text>
                        </WrapItem>
                    </GridItem>
                    <GridItem area={'milo'} colSpan={1} display={'flex'} justifyContent={'center'}>
                        <WrapItem>
                            <Image src='assets/Milo.png' boxSize={'150px'} objectFit={'cover'} alt='Milo Shiba Inu' borderRadius={'md'} border={'2px'}/>
                        </WrapItem>
                    </GridItem>
                </Grid>
            </Wrap>
        </AboutTransition>
    )
}

export default About;