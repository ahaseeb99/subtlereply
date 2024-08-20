import React, { useState, useEffect, useRef, useCallback } from 'react';

const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const WaitlistForm = ({ onSubmitSuccess, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState('');
  const firstInputRef = useRef(null);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFormError('');

    if (!name) {
      setFormError('Please enter your name.');
      setIsLoading(false);
      return;
    }
    if (!email) {
      setFormError('Please enter your email.');
      setIsLoading(false);
      return;
    } else if (!isValidEmail(email)) {
      setFormError('Please enter a valid email address.');
      setIsLoading(false);
      return;
    }
    if (!message) {
      setFormError('Please enter your message.');
      setIsLoading(false);
      return;
    }

    const formData = new URLSearchParams();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbxYpVyJ6zVE9sa8Uf6hMXgFyQiBELGQfeOxlrc_ZDSJIkTif1_QcdHWF5T0z2c87R2r/exec', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        onSubmitSuccess();
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setFormError('Form submission error. Please try again later.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormError('An unexpected error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }, [name, email, message, onSubmitSuccess]);

  useEffect(() => {
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, []);

  return (
    <form onSubmit={handleSubmit} style={{ fontFamily: 'Arial, sans-serif' }}>
      {formError && <div style={{ color: 'red', marginBottom: '16px' }}>{formError}</div>}
      <div>
        <label htmlFor="name" style={{ display: 'block', marginBottom: '8px' }}>Name</label>
        <input
          ref={firstInputRef}
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email" style={{ display: 'block', marginBottom: '8px' }}>Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="message" style={{ display: 'block', marginBottom: '8px' }}>Message</label>
        <textarea
          name="message"
          id="message"
          rows="4"
          placeholder="Your message here..."
          style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <div style={{ textAlign: 'right' }}>
        <button
          type="submit"
          disabled={isLoading}
          style={{
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            color: '#fff',
            backgroundColor: '#6b5b95',
            cursor: isLoading ? 'not-allowed' : 'pointer',
          }}
        >
          {isLoading ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
};

const ModalHeader = ({ onClose }) => (
  <div className="flex justify-between items-start mb-6">
    <h2 className="text-purple-500 font-bold text-2xl">Join the Waitlist</h2>
    <button
      type="button"
      className="text-gray-400 hover:text-gray-600 transition-colors"
      onClick={onClose}
      aria-label="Close modal"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
);

const SuccessMessage = ({ onClose }) => (
  <div className="text-green-600 mb-4">
    Thank you for submitting the form!
    <button
      type="button"
      className="ml-2 text-green-600 underline hover:text-green-800"
      onClick={onClose}
    >
      Close
    </button>
  </div>
);

const Modal = ({ isOpen, onClose }) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmitSuccess = useCallback(() => {
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
      onClose();
    }, 3000);
  }, [onClose]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-black bg-opacity-75" onClick={onClose}></div>
        <div className="relative bg-white rounded-lg shadow-lg p-8 max-w-md w-full z-50" aria-hidden="true">
          <ModalHeader onClose={onClose} />
          {showSuccessMessage ? (
            <SuccessMessage onClose={onClose} />
          ) : (
            <WaitlistForm onSubmitSuccess={handleSubmitSuccess} onClose={onClose} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;