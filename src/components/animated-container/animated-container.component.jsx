import React, {useState, useEffect} from 'react';
import {animated, config, useSpring} from 'react-spring';

const Animated = ({children, delay = 0}) => {
    const props = useSpring({
        from: {
            opacity: 0,
            transform: `translateY(80px)`
        },
        to: {
            opacity: 1,
            transform: `translateY(0px)`
        },
        delay: delay,
        duration: 1000,
        config: {
            mass: 5,
            tension: 200,
            friction: 40
          }
    })

    return (
        <animated.div delay = {delay} style= {props}>
            {children}
        </animated.div>
    )
}

export default Animated;