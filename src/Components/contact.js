import React, { useState } from 'react';
import { FiPhoneCall } from "react-icons/fi"
import { AiFillLinkedin , AiFillGithub} from "react-icons/ai"

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the form data to Formspree
    const response = await fetch('https://formspree.io/f/xwkdeenw', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      // Clear the form fields on successful submission
      setName('');
      setEmail('');
      setMessage('');
      alert('Message sent!');
    } else {
      alert('Message failed to send. Please try again.');
    }
  };

  return (
    <section className="text-gray-400 bg-ihsan-darkblue body-font">
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto" id="contact">

<div className="flex items-center justify-center">
      <FiPhoneCall className="w-10 m-5 text-6xl mx-auto" />
    </div>

    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white text-center">
            Get in contact!
          </h1>

      <div className="mb-4">
        <label htmlFor="name" className="block text-white text-sm font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-white text-sm font-bold mb-2">
          Message
        </label>
        <textarea
          id="message"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Your Message"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Send Message
      </button>
    </form>

    <div className="flex items-center justify-center">
      <div className="flex space-x-4">
        <AiFillGithub className="text-6xl hover:text-gray-600 cursor-pointer" 
        onClick={() => window.open("https://github.com/ihsanm", "_blank")}
        />
        <AiFillLinkedin className="text-6xl hover:text-blue-700 cursor-pointer" 
        onClick={() => window.open("https://www.linkedin.com/in/ihsan-mahmood-6b7919226/", "_blank")}
        />
      </div>
    </div>
    </section>
  );
};

export default ContactForm;
