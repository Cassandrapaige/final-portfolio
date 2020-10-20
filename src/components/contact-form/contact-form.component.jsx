import React, {useState, createRef, useEffect} from 'react';
import { navigate } from 'gatsby';

import {FormContainer, Form, FormGroup} from './contact-form.styles';

import Title from '../title/title.component';
import Text from '../text/text.component';
import SocialLinks from '../social-links/social-links.component';
import {ButtonWithArrow} from '../custom-button/custom-button.component';
import Checkbox from '../checkbox/checkbox.component';

const ContactForm = ({history}) => {
    const [isChecked, setIsChecked] = useState(false);
    const [name, setName] = useState("");
    const textInput = createRef();

    const handleChange = () => {
        if(!isChecked) {
            return setIsChecked(!isChecked);
        }
        return navigate(`/`);
    }

    useEffect(() => {
        textInput.current.focus();
    }, [textInput])

    return (
    <FormContainer>
        <Title isLarge text = "Get in touch!" />
        <Text>Hi! I'm currently looking for job opportunities in Canada or abroad. If you'd like to know more about me or get a copy of my resume, send me a message! Otherwise, say hi on Twitter. I promise I'm nice!</Text>
        <Form 
            name= "contact"
            method="post"
            data-netlify="true" 
            netlify-honeypot="bot-field" >
            <input type="hidden" name ="bot-field"/>

            <FormGroup>
                <label htmlFor="name">Full name</label>
                <input 
                    type = "text" 
                    name = "name" 
                    value = {name}
                    ref = {textInput}
                    onChange = {(event) => setName(event.target.value)}
                    required
                /> 
            </FormGroup>

            <FormGroup>
                <label htmlFor="email">Email</label>
                <input 
                    type = "email" 
                    name = "email" 
                    required
                /> 
            </FormGroup>

            <FormGroup>
                <label htmlFor="message">How can I help you?</label>
                <textarea 
                    name = "message" 
                    required
                />
            </FormGroup>
            <Checkbox 
                id= "isKind"
                isChecked = {isChecked}
                handleChange = {handleChange}
                label = {`I${name && `, ${name},`} promise to only send nice messages.`}
            />
            <div data-netlify-captcha></div>
            <ButtonWithArrow 
                as = "button" 
                iscta = "true"
                type = "submit" 
                text ="Send message!" 
            />
        </Form>
        <SocialLinks />
    </FormContainer>
    )
}

export default ContactForm;
