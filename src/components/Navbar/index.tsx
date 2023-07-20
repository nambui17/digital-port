import { useState } from 'react';
import { SimpleGrid, HStack } from '@chakra-ui/react';
import NavLink from '../NavLink';
import './style.css'

function Navbar() {
    const [bgColor, setBg] = useState('#055958');
    const [hoverColor, setHover] = useState('#B3A001');
    document.body.style.backgroundColor = bgColor;
    const updateColors = (bg: string, hover: string): void => {
        setBg(bg);
        setHover(hover);
    }
    const links = [
        {
            text: 'Home',
            to: '/',
            bg: '#055958',
            hover: '#B3A001'
        },
        {
            text: 'About Me',
            to: '/about',
            bg: '#21978C',
            hover: '#B3A001'
        },
        {
            text: 'My Projects',
            to: '/projects',
            bg: '#21978C',
            hover: '#0A5C78'
        },
        {
            text: 'Contact Me',
            to: '/contact',
            bg: '#B3A001',
            hover: '#0A5C78'
        }
    ]
    return (
        <nav className='navBar'>
            <HStack>
                {links.map(link =>
                    <NavLink
                        text={link.text}
                        to={link.to}
                        hover={hoverColor}
                        key={link.text}
                        bg={link.bg}
                        newHover={link.hover}
                        updateColors={updateColors}
                    />
                )}
            </HStack>
        </nav>
    )
}

export default Navbar;