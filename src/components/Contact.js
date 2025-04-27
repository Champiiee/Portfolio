import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  CardActions,
  IconButton,
  Link,
} from "@mui/material";
import { Facebook, LinkedIn, Email, GitHub } from "@mui/icons-material";

const styles = {
  container: {
    marginTop: "4rem",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "2rem",
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
    maxWidth: "600px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  formContainer: {
    width: "100%",
    marginTop: "1rem",
  },
  button: {
    width: "100%",
    padding: "12px 20px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "1.2rem",
    cursor: "pointer",
    boxShadow: "0 4px 15px rgba(0, 123, 255, 0.3)",
    transition: "all 0.3s ease",
  },
  buttonHover: {
    outline: "2px solid black",
    backgroundColor: "#0056b3",
    color: "white",
  },
  socialCard: {
    marginTop: "2rem",
    width: "100%",
    textAlign: "center",
    padding: "1rem",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    borderRadius: "12px",
  },
};

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        alert("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send email.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred.");
    }
  };

  return (
    <div style={styles.container}>
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        align="center"
        style={{ color: "#333" }}
      >
        Try to reach me?
      </Typography>

      <form onSubmit={handleSubmit} style={styles.formContainer}>
        <TextField
          fullWidth
          label="Name"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          required
        />

        <TextField
          fullWidth
          label="Email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          required
          disabled={!formData.name}
          inputProps={{
            pattern: "^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",
            title: "Please enter a valid email address",
          }}
        />

        <TextField
          fullWidth
          label="Message"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          multiline
          rows={4}
          required
          disabled={!formData.email}
        />

        <Button
          type="submit"
          variant="contained"
          style={
            isHovered
              ? { ...styles.button, ...styles.buttonHover }
              : styles.button
          }
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          disabled={!formData.message}
        >
          Submit
        </Button>
      </form>

      {/* SOCIALS CARD */}
      <Card style={styles.socialCard}>
        <CardContent>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Connect with me
          </Typography>
          <CardActions style={{ justifyContent: "center" }}>
            <IconButton
              component={Link}
              href="https://facebook.com/kuyakimiii"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
            >
              <Facebook fontSize="large" />
            </IconButton>

            <IconButton
              component={Link}
              href="https://www.linkedin.com/in/kimibrentmendoza/"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
            >
              <LinkedIn fontSize="large" />
            </IconButton>

            <IconButton
              component={Link}
              href="mailto:kimibrentmendoza@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
            >
              <Email fontSize="large" />
            </IconButton>

            <IconButton
              component={Link}
              href="https://github.com/Champiiee"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
            >
              <GitHub fontSize="large" />
            </IconButton>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
}

export default Contact;
