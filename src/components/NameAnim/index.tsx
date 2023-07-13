import { useTrail, animated as anim } from '@react-spring/web'
import { Box, Image } from '@chakra-ui/react';
import './style.css'

const items = ['Bùi', 'Phương', 'Nam'];
const config = {
    mass: 5,
    tension: 2000,
    friction: 150
};

function NameAnim() {
    const trail = useTrail(items.length,
        {
            config,
            from: { x: 20, y: 20, opacity: 0 },
            to: { x: 0, y: 0, opacity: 1 },
            delay: 300,
        }
    );
    return (
        <span id='trailBox'>
            {trail.map(({ ...props }, i) => (
                <anim.div
                    key={items[i]}
                    style={{
                        ...props,
                    }}
                >
                    <div className='trailsText'>
                        {items[i]}
                    </div>
                </anim.div>
            ))}
        </span>
    )
}

export default NameAnim;