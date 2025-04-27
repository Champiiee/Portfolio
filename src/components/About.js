import React, { useEffect, useRef } from 'react';
import { Typography, Box } from '@mui/material';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function About() {
  const aboutRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      tl.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      })
      .from(textRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.5");
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box
      ref={aboutRef}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        marginTop: '2rem',
        padding: '2rem',
      }}
    >
      <Typography 
        ref={titleRef} 
        variant="h3" 
        gutterBottom
      >
        About Me
      </Typography>

      <Typography 
        ref={textRef} 
        variant="body1"
      >
        I'm a frontend developer with a knack for animation, clean UI, and solid backend experience.
      </Typography>
    </Box>
  );
}

export default About;
