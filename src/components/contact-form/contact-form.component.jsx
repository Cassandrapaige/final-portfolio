import React, { useState, createRef, useEffect, useCallback } from "react"

import { FormContainer, Form, FormGroup } from "./contact-form.styles"

import Title from "../title/title.component"
import Text from "../text/text.component"
import SocialLinks from "../social-links/social-links.component"
import { ButtonWithArrow } from "../custom-button/custom-button.component"
import Checkbox from "../checkbox/checkbox.component"
import useForm from "../../hooks/useForm"
import Animated from "../animated-container/animated-container.component"

const ContactForm = () => {
  const [isChecked, setIsChecked] = useState(false)
  const textInput = createRef()
  const [error, setError] = useState(null)
  const [name, setName] = useForm("")
  const [email, setEmail] = useForm("")
  const [message, setMessage] = useForm("")
  const [submitting, setSubmitting] = useState(false)

  const handleCheckbox = () => setIsChecked(!isChecked)

  useEffect(() => {
    if (textInput.current.value === "") textInput.current.focus()
    window.scrollTo(0, 0)
  }, [])

  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true)
      setSubmitting(false)
      window.scrollTo(0, 0)
    }
  }, [])

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = event => {
    if (name === "" || email === "" || message === "") {
      event.preventDefault()
      setSubmitting(true)
    } else {
      setError(null)
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          name: name,
          email: email,
          message: message,
        }),
      }).catch(error => alert(error))
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Animated>
        <Title isLarge>
          Send Me a Message<span>!</span>
        </Title>
      </Animated>
      {success && (
        <Animated delay="100">
          <p style={{ fontWeight: 600, fontSize: `1.1em` }}>
            Thanks for your message! 👋{" "}
          </p>
        </Animated>
      )}
      <Animated delay="100">
        <Text>
          Hi! I'm currently looking for job opportunities in Canada or abroad.
          If you'd like to know more about me or get a copy of my resume, send
          me a message! Otherwise, say hi on Twitter. I promise I'm nice!
        </Text>
      </Animated>
      <Animated delay="200">
        <Form
          name="contact"
          method="post"
          action="/contact/?success=true"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="contact" value="contact" />

          <FormGroup error={submitting && name === ""}>
            <label htmlFor="name">Full name</label>
            <input
              type="text"
              name="name"
              value={name}
              ref={textInput}
              onChange={setName}
            />
          </FormGroup>

          <FormGroup error={submitting && email === ""}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={setEmail}
            />
          </FormGroup>

          <FormGroup error={submitting && message === ""}>
            <label htmlFor="message">How can I help you?</label>
            <textarea
              error="true"
              name="message"
              value={message}
              onChange={setMessage}
            />
          </FormGroup>
          <Checkbox
            id="isKind"
            isChecked={isChecked}
            handleChange={handleCheckbox}
            label={`I${
              name && `, ${name},`
            } promise to only send nice messages.`}
          />
          <div data-netlify-captcha></div>
          <ButtonWithArrow
            as="button"
            iscta="true"
            type="submit"
            text="Send message!"
          />
        </Form>
      </Animated>
      <SocialLinks />
    </FormContainer>
  )
}

export default ContactForm
