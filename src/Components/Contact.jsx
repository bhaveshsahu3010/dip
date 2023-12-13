import React from 'react'

export default function Contact() {
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
          <h2 style={titleStyle}>Contact Us</h2>
          <p style={contentStyle}>
          Head, CIF, Indian Institute of Technology Jammu, Paloura campus, Opposite to Janipur Police Station, Paloura, Jammu. Jammu and Kashmir, Pincode-181121.
          <hr/>

Officer In-Charge, CIF, Indian Institute of Technology Jammu, Paloura campus, Opposite to Janipur Police Station, Paloura, Jammu. Jammu and Kashmir, Pincode-181121.
<hr/>
Mailing address for sending samples (User needs to mention the name of the instrumentation/analysis required to be done on the envelope) : The Officer In-Charge, CIF, Indian Institute of Technology Jammu, Paloura campus, Opposite to Janipur Police Station, Paloura, Jammu. Jammu and Kashmir, Pincode-181121.
<hr/>
Email: cif@iitjammu.ac.in
          </p>
          
        </div>
      );
}
