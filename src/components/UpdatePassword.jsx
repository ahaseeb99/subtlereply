import React, { useState, useEffect } from 'react';

const UpdatePassword = () => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [passwordError, setPasswordError] = useState('');

  const { currentPassword, newPassword, confirmPassword } = formData;

  // Consolidated update field function for all inputs
  const updateField = (e) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [e.target.name]: e.target.value
    }));
  };

  // Effect for checking password match
  useEffect(() => {
    setPasswordError(newPassword && confirmPassword && newPassword !== confirmPassword ? 'Passwords do not match!' : '');
  }, [newPassword, confirmPassword]);

  // Function to calculate password strength
  const getPasswordStrength = (password) => {
    if (!password) return { label: '', color: '#ddd', width: '0%' };

    const lengthCriteria = password.length >= 8;
    const numberCriteria = /\d/.test(password);
    const upperLowerCriteria = /[a-z]/.test(password) && /[A-Z]/.test(password);
    const specialCharCriteria = /[^A-Za-z0-9]/.test(password);
    const strength = lengthCriteria + numberCriteria + upperLowerCriteria + specialCharCriteria;

    const strengthLevels = [
      { label: 'Weak', color: '#ff3e36', width: '25%' },
      { label: 'Weak', color: '#ffae00', width: '25%' },
      { label: 'Medium', color: '#f7d774', width: '50%' },
      { label: 'Strong', color: '#2bdb66', width: '75%' },
      { label: 'Very Strong', color: '#25d366', width: '100%' }
    ];

    return strengthLevels[strength];
  };

  // Handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordError || !newPassword || !confirmPassword || newPassword !== confirmPassword) {
      alert("Please fix the errors before submitting.");
      return;
    }
    console.log('Current Password:', currentPassword);
    console.log('New Password:', newPassword);
    console.log('Confirm Password:', confirmPassword);
  };

 
  return (
    <div className="bg-custom p-4 sm:p-8 rounded-2xl shadow-2xl">
      <h2 className="text-xl sm:text-2xl text-white font-bold mb-4 sm:mb-6">Update Password</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {Object.entries(formData).map(([key, value]) => (
            <div key={key}>
              <label htmlFor={key} className="text-sm text-gray-200 mb-1 block">
                {key.replace(/([A-Z])/g, ' $1')}
              </label>
              <div className="relative">
                <input
                  type="password"
                  id={key}
                  name={key}
                  value={value}
                  onChange={updateField}
                  className={`w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 ${passwordError && key === 'confirmPassword' ? 'border-2 border-red-500' : ''}`}
                  placeholder="••••••••"
                />
                {key === 'newPassword' && (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <div className="text-right">
                      <div
                        style={{
                          backgroundColor: getPasswordStrength(newPassword).color,
                          width: getPasswordStrength(newPassword).width,
                          height: '8px',
                          marginBottom: '4px'
                        }}
                      ></div>
                      <span style={{ color: getPasswordStrength(newPassword).color }}>
                        {getPasswordStrength(newPassword).label}
                      </span>
                    </div>
                  </div>
                )}
                {key === 'confirmPassword' && passwordError && (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-red-500">
                    {passwordError}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={passwordError || !newPassword || !confirmPassword}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-700 to-pink-700 text-white font-semibold hover:bg-purple-700 transition duration-300"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePassword;