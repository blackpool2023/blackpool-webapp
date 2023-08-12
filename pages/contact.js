
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "slick-carousel/slick/slick.css";
import StarIcon from '@mui/icons-material/Star';
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
                    <Typography variant='h2'>Kontakt</Typography>
                </Box>
            </Box>
            <div style={formContainerStyle}>
                <Typography variant='h1' className='site-heading pt-0'>Nachricht senden und Wasserspaß pur erleben!</Typography>
                <Box style={{ width: '60%', margin: '0 auto' }} >
                    <Typography variant='p' className='site-text text-left'>
                        Freust du dich auch schon Cocktail oder Limo schlürfend mit deinen Freunden an deinem eigenen Pool zu sitzen? Ja!
                    </Typography>
                    <Typography variant='p' className='site-text text-left'>
                        Stelle eine Anfrage, wenn du
                    </Typography>
                    <List
                        className='skill-items'
                        sx={{ width: '100%' }}
                        aria-label="contacts"
                        style={{ width: '100%', margin: '0 auto' }}
                    >
                        <ListItem disablePadding>
                            <ListItemIcon style={{ minWidth: '35px' }} >
                                <StarIcon className='icon-white' />
                            </ListItemIcon>
                            <ListItemText className='list-item'>einen <b>eigenen Pool</b> haben willst,</ListItemText>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemIcon style={{ minWidth: '35px' }} >
                                <StarIcon className='icon-white' />
                            </ListItemIcon>
                            <ListItemText className='list-item'>Hilfe bei der <b>Wartung</b> benötigst </ListItemText>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemIcon style={{ minWidth: '35px' }} >
                                <StarIcon className='icon-white' />
                            </ListItemIcon>
                            <ListItemText className='list-item'>oder du einfach mit uns quatschen willst, um alle deine <b> Fragen zum Thema Pool</b> im Vorfeld zu klären. </ListItemText>
                        </ListItem>
                    </List>
                    <Typography variant='p' className='site-text text-left'>
                        Verbringe wie viele unserer Kunden <b>eine glückliche Zeit</b> am und im Wasser. Spreche jetzt mit uns:
                    </Typography>
                </Box>

                {/* <h2 style={formHeaderStyle}>Contact Us</h2> */}
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    {({ isSubmitting }) => (
                        <Form style={{
                            width: '50%',
                            margin: '0 auto',
                            paddingTop: '60px'
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
