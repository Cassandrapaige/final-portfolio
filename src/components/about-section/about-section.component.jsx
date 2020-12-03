import React from 'react'

import {AboutContainer} from './about-section.styles'

import Title from '../title/title.component'
import Text from '../text/text.component'

const AboutSection = () => {
    return (
        <AboutContainer> 
            <Title>About Me</Title>
                <Text>
                    I’m a naturally curious person. I experimented with a variety of different courses at George Brown College before learning how to code — acting, cooking, baking, photography, wine.. you name it, I probably took a course in it.
                </Text>
                <Text>
                    It wasn't until I discovered the world of tech that I found something I genuinely love. I'll never forget how excited I was the first time I wrote '99 bottles of beer on the wall' with only 3 lines of code. Like magic.
                </Text>
                <Text>
                    I spend most of my waking hours in front of the computer, tinkering away at my latest side project or picking up a new skill. I hope to use this passion to contrubute to something truly meaningful one day!
                </Text>
                <Text>
                    Other than coding, I love being outside in nature. I'm always up for an adventure or doing something that terrifies me (like bungee jumping). I've travelled independently to 29 countries and I'm slightly addicted to butter chicken.
                </Text>
        </AboutContainer>
    )
}

export default AboutSection
