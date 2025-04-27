async function sendEmail({ name, email, message }) {
    await fetch('http://localhost:5000/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message })
    });
  }
  
  export default sendEmail;
  