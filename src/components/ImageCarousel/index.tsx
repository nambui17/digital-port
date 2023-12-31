import { useState, useLayoutEffect } from 'react'
import { Image } from '@chakra-ui/react'
import { useSpringRef, animated as anim, useTransition, useSpring } from '@react-spring/web'

const images = {
    source: [
        './images/MeCacti.jpeg',
        './images/Sunflower.png',
        './images/Cacti.jpeg',
        './images/Bookcase.jpeg',
        './images/Building.jpeg',
        './images/Flowers.jpeg'
    ],
    alt: [
        'Nam Bui in front of cacti',
        'Sunflower overlooking Los Angeles',
        'Succulent cacti',
        'Wall of bookcases with circular cutout',
        'Bradbury building interior',
        'Huntington garden flowers'
    ]
}

function ImageCarousel() {
    const [activeIndex, setIndex] = useState(0);
    const springApi = useSpringRef()
    const transitions = useTransition(activeIndex, {
        from: {
            clipPath: 'polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)'
        },
        enter: {
            clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)'
        },
        leave: {
            clipPath: 'polygon(100% 0%, 100% 100%, 100% 100%, 100% 0%)'
        },
        onRest: (_springs, _ctrl, item) => {
            if (activeIndex == item) {
                setIndex(activeIndex === images.source.length - 1 ? 0 : activeIndex + 1)
            }
        },
        exitBeforeEnter: true,
        config: {
            duration: 2000,
        },
        delay: 1000,
        ref: springApi
    })
    useSpring({
        from: {
            strokeDashoffset: 120,
        },
        to: {
            strokeDashoffset: 0,
        },
        config: {
            duration: 11000,
        },
        loop: true,
        ref: springApi,
    })

    useLayoutEffect(() => {
        springApi.start()
    }, [activeIndex])
    return (
        <>
        {transitions((springs, item) => (
          <anim.div style={springs}>
            <Image src={images.source[item]} objectFit={'cover'} boxSize={'500px'} borderRadius={'full'} border={"4px"}/>
          </anim.div>
        ))}
        </>
    )
}

export default ImageCarousel