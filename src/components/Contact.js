import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import sendEmail from '../utils/sendEmail';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState({ name: false, email: false, message: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: false });
  };

  const validateForm = () => {
    let isValid = true;
    let tempError = { name: false, email: false, message: false };

    if (!formData.name) {
      tempError.name = true;
      isValid = false;
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      tempError.email = true;
      isValid = false;
    }

    if (!formData.message) {
      tempError.message = true;
      isValid = false;
    }

    setError(tempError);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await sendEmail(formData);
      alert('Email Sent Successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      alert('Error sending email. Please try again.');
    }
  };

  return (
    <div
      style={{
        marginTop: '4rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <Typography variant="h4" gutterBottom align="center" style={{ fontWeight: 700, color: '#333' }}>
        Get In Touch
      </Typography>

      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <TextField
            fullWidth
            label="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={error.name}
            helperText={error.name && 'Please enter your name'}
            variant="outlined"
            required
            style={{
              borderRadius: '12px',
              fontSize: '1rem',
            }}
          />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <TextField
            fullWidth
            label="Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={error.email}
            helperText={error.email && 'Please enter a valid email address'}
            variant="outlined"
            required
            style={{
              borderRadius: '12px',
              fontSize: '1rem',
            }}
          />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <TextField
            fullWidth
            label="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            error={error.message}
            helperText={error.message && 'Please enter a message'}
            variant="outlined"
            multiline
            rows={4}
            required
            style={{
              borderRadius: '12px',
              fontSize: '1rem',
            }}
          />
        </div>

        <div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{
              width: '100%',
              padding: '12px 20px',
              fontSize: '1.2rem',
              borderRadius: '8px',
              backgroundColor: '#1A73E8',
              boxShadow: '0 4px 15px rgba(26, 115, 232, 0.3)',
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#155db7'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#1A73E8'}
          >
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
