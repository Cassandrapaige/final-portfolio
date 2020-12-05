import React from 'react'

import {SocialLinksContainer} from './social-links.styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faTwitter, faGithub, faCodepen, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import {CustomButton} from '../custom-button/custom-button.component'

import sound1 from '../../sounds/piano-c_C_major.wav'
import sound2 from '../../sounds/piano-d_D_major.wav'
import sound3 from '../../sounds/piano-e_E_major.wav'
import sound4 from '../../sounds/piano-g_G_major.wav'

const SocialLinks = () => {

  const playAudio = (soundfile) => {
    let audio = typeof Audio !== "undefined" && new Audio(soundfile);
    audio.play();
  };

  return (
    <SocialLinksContainer>
      {
        SOCIAL_LINKS.map((link, index) => (
            <CustomButton 
            as = "a"
            onMouseEnter = {() => playAudio(link.sound)}
            color = {link.color}
            withmargin = "true" 
            target = "_blank"
            href = {link.href} 
            rel="noreferrer"
            key = {index}>
            <FontAwesomeIcon icon={link.icon} width="0"/>
            <span style= {{paddingLeft: `10px`}}>{link.name}</span>
          </CustomButton>
          )
        )
      }
    </SocialLinksContainer>
)}

const SOCIAL_LINKS = [
  {
    name: 'Github',
    href: 'https://github.com/Cassandrapaige',
    icon: faGithub,
    color: '#b4eaea',
    sound: sound1
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/CassandraPaigee',
    icon: faTwitter,
    color: '#ffdd5c',
    sound: sound2
  },
  {
    name: 'Codepen',
    href: 'https://codepen.io/cassandraPaige',
    icon: faCodepen,
    color: '#c1b7e8',
    sound: sound3
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/cassandra-rossall-084a90b4/',
    icon: faLinkedin,
    color: '#fff',
    sound: sound4
  },
]

export default SocialLinks;