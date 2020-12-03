import React from 'react'

import {SocialLinksContainer} from './social-links.styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faTwitter, faGithub, faCodepen, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import {CustomButton} from '../custom-button/custom-button.component'

const SocialLinks = () => (
    <SocialLinksContainer>
      {
        SOCIAL_LINKS.map((link, index) => (
          <CustomButton 
            as = "a"
            withmargin = "true" 
            target = "_blank"
            href = {link.href} 
            rel="noreferrer"
            key = {index}>
            <FontAwesomeIcon icon={link.icon} width="0"/>
            <span style= {{paddingLeft: `10px`}}>{link.name}</span>
          </CustomButton>
        ))
      }
    </SocialLinksContainer>
)

const SOCIAL_LINKS = [
  {
    name: 'Github',
    href: 'https://github.com/Cassandrapaige',
    icon: faGithub
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/CassandraPaigee',
    icon: faTwitter
  },
  {
    name: 'Codepen',
    href: 'https://codepen.io/cassandraPaige',
    icon: faCodepen
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/cassandra-rossall-084a90b4/',
    icon: faLinkedin
  },
]

export default SocialLinks;