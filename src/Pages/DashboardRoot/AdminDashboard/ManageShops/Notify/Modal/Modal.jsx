// Modal.jsx
import { useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const Modal = ({ shop }) => {
  const [email, setEmail] = useState(shop?.OwnerEmail || '');
  const [message, setMessage] = useState('');

  const handleSendEmail = () => {
    const serviceId = 'service_5p4i4vb';
    const templateId = 'template_4o96die';
    const userId = '9zsnnAeMp6q450Ge5';

    // Send email using Email.js
    emailjs.send(serviceId, templateId, { to_email: email, message }, userId)
      .then((response) => {
        console.log('Email sent successfully:', response);

        // Show success Swal alert
        Swal.fire({
          icon: 'success',
          title: 'User Successfully Notified!',
          // text: 'Your promotional email has been sent successfully.',
        });

        // Additional actions or state updates can be performed here
      })
      .catch((error) => {
        console.error('Email failed to send:', error);

        // Show error Swal alert
        Swal.fire({
          icon: 'error',
          title: 'Email Sending Failed',
          text: 'There was an error sending the email. Please try again.',
        });
      });

    // Close the modal after sending the email
    document.getElementById('my_modal_5').close();
  };

  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-center text-lg">Send Promotional Email</h3>
        <div className="py-4 text-center">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            readOnly // Make it read-only if you want to use the owner's email
          />
        </div>
        <div className="py-4 text-center">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter your message..."
          />
        </div>
        <div className="modal-action">
          <button className="btn mx-auto" onClick={handleSendEmail}>
            Send Email
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
