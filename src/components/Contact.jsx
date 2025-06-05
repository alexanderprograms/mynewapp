import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
  event.preventDefault();

  try {
    const response = await fetch('http://localhost:3001/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert('Message sent!');
      setFormData({ name: '', email: '', message: '' }); // Clear the form
    } else {
      alert('Something went wrong.');
    }
  } catch (error) {
    console.error('Error sending form:', error);
    alert('Server error.');
  }
}

  return (
    <section>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Message:</label><br />
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
