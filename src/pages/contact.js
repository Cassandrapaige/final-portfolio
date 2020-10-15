import React from "react"

import Layout from "../components/layout/layout.component"
import SEO from "../components/seo"
import ContactForm from "../components/contact-form/contact-form.component"

const ContactPage = () => (
  <Layout isActive = "true">
    <SEO title="Hire me!🥳"/>
    <ContactForm />
  </Layout>
)

export default ContactPage
