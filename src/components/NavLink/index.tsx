import { Text } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { useSpring, animated as an } from '@react-spring/web'
import './style.css'

interface linkData {
    text: string,
    to: string,
    bg: string,
    hover: string,
    newHover: string,
    updateColors: (bg: string, h: string) => void
}

function NavLink({ text, to, hover, newHover, bg, updateColors }: linkData) {
    const [spring, setSpring] = useSpring(
        () => ({
            from: { opacity: 0.4, y:0},
        }),
        []
    )
    const onHover = (isHovered:boolean) => {
        setSpring(() => ({
            opacity: isHovered ? 1 : 0.4,
            y: isHovered ? -5 : 0,
        }))
    }
    const AnLink = an(Link);
    // maybe remove the changing colors Issue occurs when navigating directly to the link
    return (
        <AnLink
            to={to}
            className='navLink'
            onClick={() => {
                updateColors(bg, newHover)
            }}
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
            style={spring}
        >
            <Text
                _hover={{ color: hover }}
            >
                {text}
            </Text>
        </AnLink>
    )
}

export default NavLink