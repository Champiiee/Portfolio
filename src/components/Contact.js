import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  CardActions,
  IconButton,
  Link,
} from "@mui/material";
import { Facebook, LinkedIn, Email, GitHub } from "@mui/icons-material";
import bgImage from "../assets/bg.jpg";

const contactStyles = {
  container: {
    position: "relative",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    maxWidth: "100%",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
    textAlign: "center",
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  sectionTitle: {
    fontSize: "2.5rem",
    marginTop: "2rem",
    marginBottom: "1.5rem",
    background: "linear-gradient(90deg, #007BFF, #0056b3)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    textAlign: "center",
  },
  infoCardsGrid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2.5rem",
    marginTop: "2rem",
    width: "100%",
  },
  infoCard: {
    background: "rgba(0, 123, 255, 0.1)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 20px rgba(0, 123, 255, 0.2)",
    borderRadius: "20px",
    padding: "2.5rem 2rem",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: "600px",
  },
  infoCardHover: {
    transform: "translateY(-10px)",
    boxShadow: "0 12px 30px rgba(0, 123, 255, 0.2)",
  },
  infoCardTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    background: "linear-gradient(90deg, #007BFF, #0056b3)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  },
  infoCardText: {
    fontSize: "1rem",
    color: "#fff",
  },
  button: {
    width: "100%",
    padding: "12px",
    fontSize: "1.1rem",
    backgroundColor: "#007BFF",
    color: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 15px rgba(0, 123, 255, 0.3)",
    transition: "all 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
    outline: "2px solid black",
  },
  socialActions: {
    justifyContent: "center",
    marginTop: "1rem",
  },
};
const iconButtonHoverStyles = {
  "&:hover": {
    color: "white", // Change icon color to white on hover
  },
};

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isHovered, setIsHovered] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

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
    <div style={contactStyles.container}>
      <Typography variant="h4" style={contactStyles.sectionTitle} gutterBottom>
        Try to reach me?
      </Typography>

      <div style={contactStyles.infoCardsGrid}>
        {/* Contact Form Card */}
        <div
          style={{
            ...contactStyles.infoCard,
            ...(hoveredCard === "form" ? contactStyles.infoCardHover : {}),
          }}
          onMouseEnter={() => setHoveredCard("form")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              required
              InputProps={{
                style: { color: "white", borderColor: "blue" }, // Text color and border color
              }}
              InputLabelProps={{
                style: { color: "white" }, // Label color
              }}
            />
            <TextField
              fullWidth
              label="Email"
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
              InputProps={{
                style: { color: "white", borderColor: "white" },
              }}
              InputLabelProps={{
                style: { color: "white" },
              }}
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              multiline
              rows={4}
              required
              disabled={!formData.email}
              InputProps={{
                style: { color: "white", borderColor: "#007BFF" },
              }}
              InputLabelProps={{
                style: { color: "white" },
              }}
              
            />
            <Button
              type="submit"
              variant="contained"
              style={
                isHovered
                  ? { ...contactStyles.button, ...contactStyles.buttonHover }
                  : contactStyles.button
              }
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              disabled={!formData.message}
            >
              Submit
            </Button>
          </form>
        </div>

        {/* Social Links Card */}
        <div
          style={{
            ...contactStyles.infoCard,
            ...(hoveredCard === "social" ? contactStyles.infoCardHover : {}),
          }}
          onMouseEnter={() => setHoveredCard("social")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <Typography style={contactStyles.infoCardTitle}>
            Connect with me
          </Typography>
          <CardActions style={contactStyles.socialActions}>
          <IconButton
  component={Link}
  href="https://facebook.com/kuyakimiii"
  target="_blank"
  rel="noopener noreferrer"
  color="primary"
  sx={iconButtonHoverStyles}
>
  <Facebook fontSize="large" />
</IconButton>
<IconButton
  component={Link}
  href="https://www.linkedin.com/in/kimibrentmendoza/"
  target="_blank"
  rel="noopener noreferrer"
  color="primary"
  sx={iconButtonHoverStyles}
>
  <LinkedIn fontSize="large" />
</IconButton>
<IconButton
  component={Link}
  href="mailto:kimibrentmendoza@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  color="primary"
  sx={iconButtonHoverStyles}
>
  <Email fontSize="large" />
</IconButton>
<IconButton
  component={Link}
  href="https://github.com/Champiiee"
  target="_blank"
  rel="noopener noreferrer"
  color="primary"
  sx={iconButtonHoverStyles}
>
  <GitHub fontSize="large" />
</IconButton>
          </CardActions>
        </div>
      </div>
    </div>
  );
}

export default Contact;
