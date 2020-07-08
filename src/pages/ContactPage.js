import React from 'react';
import Contact from '../components/Contact/Contact';
import { Container } from 'react-bootstrap';
import PageTitle from '../components/PageTitle';

const contactPageStyle = {
    background: 'linear-gradient(to left, #e6dace 40%, #fff 40%, #fff 100%)',
}

const ContactPage = () => {
    return (
        <Container fluid style = {contactPageStyle} className="responsive-bg-gradient">
            <PageTitle title = "İletişim" />
            <Contact />
        </Container>
    )
}

export default ContactPage;
