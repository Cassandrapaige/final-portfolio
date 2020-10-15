import React from 'react'

import {SocialLinksContainer} from './social-links.styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faTwitter, faGithub, faCodepen, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import {CustomButton} from '../custom-button/custom-button.component'

const SOCIAL_LINKS = [
    {
      name: 'Twitter',
      href: '/blog',
      icon: faTwitter
    },
    {
      name: 'Github',
      href: '/blog',
      icon: faGithub
    },
    {
      name: 'Codepen',
      href: '/blog',
      icon: faCodepen
    },
    {
      name: 'LinkedIn',
      href: '/blog',
      icon: faLinkedin
    },
  ]

const SocialLinks = () => (
    <SocialLinksContainer>
      {
        SOCIAL_LINKS.map((link, index) => (
          <CustomButton withmargin = "true" href = {link.href} key = {index}>
            <FontAwesomeIcon icon={link.icon} width="0"/>
            <span style= {{paddingLeft: `10px`}}>{link.name}</span>
          </CustomButton>
        ))
      }
    </SocialLinksContainer>
)


export default SocialLinks;