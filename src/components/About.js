import React, { useEffect, useRef, useState } from 'react';
import { Typography, Modal, Button } from '@mui/material';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import pips from '../assets/pips.png';
import pmes from '../assets/pmes.png';
import kanban from '../assets/kanban.png';
import '../components/About.css';
gsap.registerPlugin(ScrollTrigger);

function About() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [selectedAbout, setSelectedAbout] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleAboutOpen = (about) => {
    setSelectedAbout(about);
    setAboutOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  const handleAboutClose = () => {
    setAboutOpen(false);
    setSelectedAbout(null);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-card', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        ease: 'power3.out',
      });

      gsap.from('.project-card', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        ease: 'power3.out',
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  const projectData = [
    {
      title: 'BulSU PMES',
      description: 'A system to assess and improve the performance of individual offices and departments within an organization of Bulacan State University.',
      image: pmes,
      link: 'https://your-portfolio-link.com',
    },
    {
      title: 'BulSU PIPS',
      description:
        'BuLSUPIPs is an innovative web application designed to streamline and enhance the investment programming process within Bulacan State University. Our platform serves as a centralized hub where colleges and offices across the university can propose, evaluate, and manage projects efficiently.',
      image: pips,
      link: 'https://pdo-bulsupips.web.app/',
    },
    {
      title: 'PDO Kanban',
      description: 'An organized, visual tool used by Bulacan State University (BulSU) to manage tasks, projects, and workflows more efficiently. It uses a board with cards and columns to show the progress of different activities from planning to completion making it easy for staff, and teams to stay on track and collaborate better.',
      image: kanban,
      link: 'https://pdokanban.web.app/',
    },
  ];

  const aboutData = [
    {
      title: 'Kimi Brent DG. Mendoza',
      description: 'I’m a passionate coder who loves bringing ideas to life through technology. When I’m not coding, you’ll likely find me enjoying anime, playing video games, or staying active with sports like basketball, billiards, and football. I’m always open to new connections, and I pride myself on being approachable and easy to talk to. Feel free to explore my work, and don’t hesitate to reach out if you want to chat or collaborate!',
    },
    {
      title: 'SKILLS',
      description:
        "I’m comfortable troubleshooting basic computer issues and proficient in using various Microsoft software. I also have experience with SQL for handling databases. When it comes to web development, I’m skilled in React JS, CSS, HTML, and JavaScript. I’m a quick learner and can adapt easily to new environments. Plus, I take pride in being able to communicate clearly and work well with others, whether it’s in a team or one-on-one.",
    },
    {
      title: 'EDUCATIONAL BACKGROUND',
      description: 'Bulacan State University - Hagonoy Campus, Bachelor of Science in Information Technology 2021 - 2025',
    },
  ];

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  return (
    <div className="home-container" style={{ height: '100vh', margin: 0 }}>
      <div ref={aboutRef} className="about-projects-section" style={{ padding: '0' }}>
        <Typography variant="h3" className="section-title" sx={{ textAlign: 'center', margin: 0 }} gutterBottom>
          About Me
        </Typography>
        <div className="info-cards-grid">
          {aboutData.map((about, index) => (
            <div
              key={index}
              className="about-card"
              onClick={() => handleAboutOpen(about)}
            >
              <div className="info-card">
                <div className="info-card-content">
                  <Typography variant="h5" className="info-card-title">
                    {about.title}
                  </Typography>
                  <Typography variant="body1" className="section-text">
                    {truncateText(about.description, 100)}
                  </Typography>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Typography variant="h3" className="section-title" sx={{ textAlign: 'center', margin: '3rem 0' }} gutterBottom>
          Projects
        </Typography>

        <div className="projects-container">
          <div className="info-cards-grid">
            {projectData.map((project, index) => (
              <div
                key={index}
                className="project-card"
                onClick={() => handleOpen(project)}
              >
                <div className="info-card">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-card-img"
                    style={{ marginBottom: '1rem', height: 'auto', objectFit: 'cover' }}
                  />
                  <div className="info-card-content">
                    <Typography variant="h5" className="info-card-title">
                      {project.title}
                    </Typography>
                    <Typography variant="body1" className="info-card-text">
                      {truncateText(project.description, 100)}
                    </Typography>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <div
          style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '8px',
            maxWidth: '700px',
            width: '90%',
            boxShadow: '24',
            outline: 'none',
            textAlign: 'center',
            maxHeight: '85vh',
          }}
        >
          {selectedProject && (
            <>
              <Typography variant="h4" gutterBottom>
                {selectedProject.title}
              </Typography>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                style={{
                  maxWidth: '100%', // Make the image take up full width without overflow
                  maxHeight: '400px', // Make the image smaller and ensure it fits within the modal
                  objectFit: 'contain', // Ensures the image maintains its aspect ratio and fits within the modal
                  marginBottom: '2rem',
                  borderRadius: '8px',
                }}
              />
              <Typography variant="body1" style={{ marginBottom: '2rem' }}>
                {selectedProject.description}
              </Typography>
              {selectedProject.link && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => window.open(selectedProject.link, '_blank')}
                >
                  Visit Website
                </Button>
              )}
            </>
          )}
        </div>
      </Modal>

      <Modal
        open={aboutOpen}
        onClose={handleAboutClose}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <div
          style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '8px',
            maxWidth: '700px',
            width: '90%',
            boxShadow: '24',
            outline: 'none',
            textAlign: 'center',
            maxHeight: '85vh',
          }}
        >
          {selectedAbout && (
            <>
              <Typography variant="h4" gutterBottom>
                {selectedAbout.title}
              </Typography>
              <Typography variant="body1" style={{ marginBottom: '2rem' }}>
                {selectedAbout.description}
              </Typography>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default About;
