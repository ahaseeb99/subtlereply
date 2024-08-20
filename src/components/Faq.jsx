import React, { useState } from 'react';

const FAQComponent = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const questions = [
    {
      question: "How can I train the bot to understand my specific needs?",
      answer: "You can train your AI bot by providing it with information about the problem you're solving, what you're selling, and who your target audience is. This allows the bot to craft tailored responses that resonate with your potential customers on Reddit.",
    },
    {
      question: "Can I have multiple bots for different projects?",
      answer: "Absolutely! Our platform allows you to create a separate bot for each project. You can manage multiple projects with their own dedicated bot to address varied audiences or product lines.",
    },
    {
      question: "Is it possible to choose different subscription tiers for each bot?",
      answer: "Yes, you can choose a different subscription tier for each bot based on the needs of the specific project. This ensures that you have the flexibility to scale your engagement according to your project requirements.",
    },
    {
      question: "Do I need a separate Reddit account for each project?",
      answer: "For the best results, we recommend creating a separate Reddit account for each project. This allows you to track the performance and replies specific to each bot's comments.",
    },
    {
      question: "Is there a free trial available?",
      answer: "We offer a free 7-day trial at our medium subscription tier to let you experience the capabilities of our AI bot and see the value it can add to your Reddit engagement.",
    },
    {
      question: "How do I cancel or change my subscription?",
      answer: "You can cancel or change your subscription at any time through your account settings. We aim to provide you with flexibility and control over your subscription.",
    },
    {
      question: "How long does it take to start seeing results from the bot?",
      answer: "While results can vary, users typically start to see meaningful engagement from their bot within about 1 week of setup and training.",
    },
    {
      question: "Does your service support platforms other than Reddit?",
      answer: "At this time, we're focused on mastering engagement on Reddit. We only support Reddit, ensuring that our service is highly specialized and effective for this platform.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white-800 mb-8">Frequently Asked Questions</h2>
      </div>

      <div className="space-y-6">
        {questions.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <button
              onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
              className="w-full flex items-center justify-between px-6 py-4 focus:outline-none transition-colors duration-300 hover:bg-gray-100"
            >
              <span className="text-lg font-semibold text-gray-800">{item.question}</span>
              <svg className={`h-6 w-6 text-purple-600 transform ${activeQuestion === index ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {activeQuestion === index && (
              <div className="bg-gray-100 p-6">
                <p className="text-gray-700">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;
