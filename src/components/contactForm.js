import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import sendEmail from '../utils/sendEmail';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendEmail(formData);
    alert('Message sent!');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ m: 2 }}>
      <TextField fullWidth label="Name" name="name" onChange={handleChange} sx={{ mb: 2 }}/>
      <TextField fullWidth label="Email" name="email" onChange={handleChange} sx={{ mb: 2 }}/>
      <TextField fullWidth multiline rows={4} label="Message" name="message" onChange={handleChange} sx={{ mb: 2 }}/>
      <Button type="submit" variant="contained">Send</Button>
    </Box>
  );
}

export default ContactForm;
