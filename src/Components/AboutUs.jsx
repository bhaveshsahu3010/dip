import React from 'react';

const AboutUs = () => {
  const containerStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const titleStyle = {
    fontSize: '24px',
    color: '#333',
    marginBottom: '20px',
  };

  const contentStyle = {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#555',
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>About Us</h2>
      <p style={contentStyle}>
      Welcome to our digital academic hub, where knowledge converges with innovation! We're not just a website; we're the architects of academic synergy. Our platform serves as the canvas where professors sculpt projects that transcend traditional boundaries, inviting students to embark on intellectual journeys that challenge and inspire. As the architects of this virtual academy, we believe in the transformative power of collaboration. Professors, the masterminds behind each project, craft opportunities for students to apply their skills and imagination in real-world scenarios. Simultaneously, students bring a dynamic range of perspectives and talents, enriching the academic landscape. Here, education is not confined to the classroom; it's an immersive experience where theory meets practice, and creativity knows no bounds. Join us in redefining the future of education—one project at a time.
      </p>
      {/* Add more content as needed */}
    </div>
  );
};

export default AboutUs;
