
import { Box, Typography } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "slick-carousel/slick/slick.css";
import Helmet from "views/component/UI/Helmet"

const ContactUs = () => {
    const initialValues = {
        name: '',
        email: '',
        company: '',
        message: '',
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        company: Yup.string().required('Company is required'),
        message: Yup.string().required('Message is required'),
    });

    const handleSubmit = (values, { setSubmitting }) => {
        // Here, you can implement the logic to handle form submission (e.g., sending data to a server, processing the form, etc.)
        console.log('Form data:', values);
        setSubmitting(false);
    };
    return (
        <>
            <Helmet title='Contact Us - Blackpool' description='blackpool' />
            <Box className='contact-main'>
                <Box className="contact-banner">
                    <Typography variant='h2'>Contact Us</Typography>
                </Box>
            </Box>
            <div style={formContainerStyle}>
                {/* <h2 style={formHeaderStyle}>Contact Us</h2> */}
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    {({ isSubmitting }) => (
                        <Form style={{
                            width: '50%',
                            margin: '0 auto'
                        }} >
                            <div style={formGroupStyle}>
                                <label style={labelStyle} htmlFor="name">Full Name*</label>
                                <Field type="text" id="name" name="name" style={inputStyle} />
                                <ErrorMessage name="name" component="div" style={errorMessageStyle} />
                            </div>
                            <div style={formGroupStyle}>
                                <label style={labelStyle} htmlFor="email">Email ID*</label>
                                <Field type="text" id="email" name="email" style={inputStyle} />
                                <ErrorMessage name="email" component="div" style={errorMessageStyle} />
                            </div>
                            <div style={formGroupStyle}>
                                <label style={labelStyle} htmlFor="company">Company Name*</label>
                                <Field type="text" id="company" name="company" style={inputStyle} />
                                <ErrorMessage name="company" component="div" style={errorMessageStyle} />
                            </div>
                            <div style={formGroupStyle}>
                                <label style={labelStyle} htmlFor="message">Message*</label>
                                <Field as="textarea" id="message" name="message" style={inputStyle} />
                                <ErrorMessage name="message" component="div" style={errorMessageStyle} />
                            </div>
                            <button type="submit" style={submitButtonStyle} disabled={isSubmitting}>
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
};
const formContainerStyle = {
    margin: '0px auto',
    padding: '80px',
    borderRadius: '4px',
    background: 'black',
    color: 'white'
};

const formHeaderStyle = {
    textAlign: 'center',
    marginBottom: '20px',
};

const formGroupStyle = {
    marginBottom: '16px',
};

const labelStyle = {
    display: 'block',
    marginBottom: '8px',
};

const inputStyle = {
    width: '100%',
    padding: '12px',
    border: '1px solid #cccccc',
    borderRadius: '4px',
    background: 'black',
    color: 'white'
};

const errorMessageStyle = {
    color: 'red',
    marginTop: '4px',
};

const submitButtonStyle = {
    width: '100%',
    padding: '8px',
    background: 'blue',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
};

export default ContactUs;
