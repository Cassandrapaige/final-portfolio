import React from 'react';

import {AnimatedContainer} from './animated-container.styles';

const Animated = ({children, delay = "0"}) => (
    <AnimatedContainer delay = {delay}>{children}</AnimatedContainer>
)

export default Animated;