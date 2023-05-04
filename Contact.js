import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send email using EmailJS or another service
    alert(`Thanks for contacting us, ${name}! We'll be in touch soon.`);
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-lg">
      <label className="block font-medium mb-2">
        Your Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="block w-full p-2 border rounded-md" />
      </label>
      <br />
      <label className="block font-medium mb-2">
        Your Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full p-2 border rounded-md" />
      </label>
      <br />
      <label className="block font-medium mb-2">
        Message:
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="block w-full p-2 border rounded-md" />
      </label>
      <br />
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Send Message
      </button>
    </form>
  );
}

export default Contact;
