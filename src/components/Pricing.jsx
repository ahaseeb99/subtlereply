import React, { useState } from 'react';
import { SectionWrapper } from '../hoc';
import Modal from './Modal';

const PricingComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleModalOpen = (plan) => {
    if (plan.buttonText === 'Contact Us') {
      setIsModalOpen(true);
    } else {
      setSelectedPlan(plan);
    }
  };

  const handleModalClose = () => setIsModalOpen(false);

  const handleFormSubmit = (data) => {
    console.log(data);
    handleModalClose();
  }

  const plans = [
    {
      title: 'Starter',
      features: [
        ' 1 Community',
        '5 Keywords',
        '50 Replies',
        'Auto-replies',
        'Context-aware content',
        '24/7 Chat support'
      ],
      price: '$29/mo',
      buttonText: 'Choose Plan'
    },
    {
      title: 'Engagement',
      features: [
        '3 Communities',
        '10 Keywords',
        '250 Replies',
        'Auto-replies',
        'Context-aware content',
        '24/7 Chat support'
      ],
      price: '$79/mo',
      buttonText: 'Choose Plan'
    },
    {
      title: 'Market Leader',
      features: [
        '10 Communities',
        '25 Keywords',
        '500 Replies',
        'Auto-replies',
        'Context-aware content',
        '24/7 Chat support'
      ],
      price: '$149/mo',
      buttonText: 'Choose Plan'
    },
    {
      title: 'Enterprise',
      features: [
        'Unlimited communities',
        'Unlimited keywords',
        'Unlimited replies',
        'Personalized support'
      ],
      price: 'Contact Us',
      buttonText: 'Contact Us'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white-600 uppercase mb-4">Pricing Plans</h2>
        <p className="text-lg text-white-700 mb-8">
          Choose the plan that suits your needs or contact us for a custom solution.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-center mb-4">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full h-12 w-12 flex items-center justify-center text-white">
                  <span className="text-lg">{plan.title.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 ml-4">{plan.title}</h3>
              </div>
              <ul className="text-sm text-gray-600 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M2 2.5C2 1.675 2.675 1 3.5 1h13c.825 0 1.5.675 1.5 1.5v13c0 .825-.675 1.5-1.5 1.5h-13c-.825 0-1.5-.675-1.5-1.5v-13zM3.5 2c-.275 0-.5.225-.5.5v13c0 .275.225.5.5.5h13c.275 0 .5-.225.5-.5v-13c0-.275-.225-.5-.5-.5h-13z" clipRule="evenodd" />
                      <path d="M5.25 6.5a.25.25 0 01.25-.25h9a.25.25 0 01.25.25v.5a.25.25 0 01-.25.25h-9a.25.25 0 01-.25-.25v-.5zm0 3a.25.25 0 01.25-.25h9a.25.25 0 01.25.25v.5a.25.25 0 01-.25.25h-9a.25.25 0 01-.25-.25v-.5zm0 3a.25.25 0 01.25-.25h4a.25.25 0 01.25.25v.5a.25.25 0 01-.25.25h-4a.25.25 0 01-.25-.25v-.5z" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center mt-auto">
              <p className="text-xl font-bold text-gray-800 mb-4">{plan.price}</p>
              {/* <button
                onClick={() => handleModalOpen(plan)}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-md shadow-md hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                {plan.buttonText}
              </button> */}
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          title="Contact Us"
        >
         
        </Modal>
      )}
    </div>
  );
};

export default SectionWrapper(PricingComponent, 'pricing');