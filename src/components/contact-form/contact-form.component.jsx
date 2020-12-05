import React, {useState, createRef, useEffect} from 'react';

import {FormContainer, Form, FormGroup} from './contact-form.styles';

import Title from '../title/title.component';
import Text from '../text/text.component';
import SocialLinks from '../social-links/social-links.component';
import {ButtonWithArrow} from '../custom-button/custom-button.component';
import Checkbox from '../checkbox/checkbox.component';
import useForm from '../../hooks/useForm';
import Animated from '../animated-container/animated-container.component';

const ContactForm = () => {
    const [isChecked, setIsChecked] = useState(false);
    const textInput = createRef();
    const [errorMessage, setErrorMessage] = useState(null);
    const [name, setName] = useForm("");
    const [email, setEmail] = useForm("");
    const [message, setMessage] = useForm("");

    const handleCheckbox = () => setIsChecked(!isChecked);

    useEffect(() => {
        if(textInput.current.value === "") textInput.current.focus();
    }, [textInput])

    const [success, setSuccess] = useState(false);

    useEffect(() => {
      if(window.location.search.includes('success=true') ) {
        setSuccess(true);
      }
    }, []);

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const handleSubmit = event => {
        if(name === "") {
            event.preventDefault();
            setErrorMessage("You forgot to enter a name")
        }

        if(email === "") {
            event.preventDefault();
            setErrorMessage("You forgot to enter an email")
        }

        if(message === "") {
            event.preventDefault();
            setErrorMessage("You haven't written a message yet")
        }

        else {
            setErrorMessage(null);
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({
                  "form-name": "contact", 
                  "name": name,
                  "email": email,
                  "message": message
              })
            })
            .catch(error => alert(error)); 
        }
    };

    return (
    <FormContainer onSubmit = {handleSubmit}>
        <Animated>
            <Title isLarge>Get in touch<span>!</span></Title>
        </Animated>
        {success && (
          <p style={{ color: "green" }}>Thanks for your message! </p>
        )}
        <Animated delay = "100">
            <Text>Hi! I'm currently looking for job opportunities in Canada or abroad. If you'd like to know more about me or get a copy of my resume, send me a message! Otherwise, say hi on Twitter. I promise I'm nice!</Text>
        </Animated>
        <Animated delay = "200">
        <Form 
            name= "contact"
            method="post"
            action="/contact/?success=true"
            data-netlify="true" 
            data-netlify-honeypot="bot-field" >
            <input type="hidden" name ="contact" value ="contact"/>

            <FormGroup>
                <label htmlFor="name">Full name</label>
                <input 
                    type = "text" 
                    name = "name" 
                    value = {name}
                    ref = {textInput}
                    onChange = {setName}
                /> 
            </FormGroup>

            <FormGroup>
                <label htmlFor="email">Email</label>
                <input 
                    type = "email" 
                    name = "email" 
                    value = {email}
                    onChange = {setEmail}
                /> 
            </FormGroup>

            <FormGroup>
                <label htmlFor="message">How can I help you?</label>
                <textarea 
                    name = "message" 
                    value = {message}
                    onChange = {setMessage}
                />
            </FormGroup>
            <Checkbox 
                id= "isKind"
                isChecked = {isChecked}
                handleChange = {handleCheckbox}
                label = {`I${name && `, ${name},`} promise to only send nice messages.`}
            />
            <div className="error-message" style= {{color: 'red'}}>{errorMessage}</div>
            <div data-netlify-captcha></div>
            <ButtonWithArrow 
                as = "button" 
                iscta = "true"
                type = "submit" 
                text ="Send message!" 
            />
        </Form>
        </Animated>
        <SocialLinks />
    </FormContainer>
    )
}

export default ContactForm;
