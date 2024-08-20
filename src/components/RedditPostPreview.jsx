import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBell } from 'react-icons/fa';
import upvoteSvg from './up.svg';
import downvoteSvg from './down.svg';
import redditLogo from './reddit.svg';

const RedditPostPreview = () => {
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);
  const [score, setScore] = useState(14);

  const handleUpvote = () => {
    if (!upvoted && !downvoted) {
      setScore(score + 1);
      setUpvoted(true);
    } else if (!upvoted && downvoted) {
      setScore(score + 2);
      setUpvoted(true);
      setDownvoted(false);
    } else {
      setScore(score - 1);
      setUpvoted(false);
    }
  };

  const handleDownvote = () => {
    if (!downvoted && !upvoted) {
      setScore(score - 1);
      setDownvoted(true);
    } else if (!downvoted && upvoted) {
      setScore(score - 2);
      setDownvoted(true);
      setUpvoted(false);
    } else {
      setScore(score + 1);
      setDownvoted(false);
    }
  };

  const voteButtonStyle = (isUpvote) => ({
    filter: `${isUpvote ? (upvoted ? 'grayscale(0)' : 'grayscale(100%)') : (downvoted ? 'grayscale(0)' : 'grayscale(100%)')} invert(100%)`,
    cursor: 'pointer',
    width: '24px',
    height: '24px',
  });

  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className="flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="post-container bg-gray-800 rounded-lg p-4 mb-2 w-full"
          >
            {/* Inline styles for the component */}
            <style>{`
              .container {
                max-width: 500px;
              }
              .reddit-post-preview {
                font-family: Arial, sans-serif;
                padding: 5px;
                border-radius: 4px;
              }
              .post-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 16px;
              }
              .post-header .user-info {
                color: #818384;
                font-size: 12px;
              }
              .post-header .bell-icon {
                color: #818384;
                transition: color 0.2s;
              }
              .post-header .bell-icon:hover {
                color: #ffffff;
              }
              .post-content h3 {
                font-size: 18px;
                font-weight: bold;
                color: #ffffff;
                margin-bottom: 8px;
              }
              .post-content p {
                color: #d7dadc;
                font-size: 16px;
              }
              .vote-section {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding-right: 16px;
                margin-right: 16px;
                border-right: 1px solid #343536;
              }
            `}</style>

            <div className="post-header flex justify-between items-center">
              <div className="flex items-center">
                <img src={redditLogo} alt="Reddit Logo" className="w-6 h-6 mr-2" />
                <div className="user-info">Posted by u/Tina 2 days ago</div>
              </div>
              <FaBell className="bell-icon" />
            </div>
            <div className="flex">
              <div className="vote-section">
                <img
                  src={upvoteSvg}
                  alt="Upvote"
                  style={voteButtonStyle(true)}
                  onClick={handleUpvote}
                />
                <span className="score">{score}</span>
                <img
                  src={downvoteSvg}
                  alt="Downvote"
                  style={voteButtonStyle(false)}
                  onClick={handleDownvote}
                />
              </div>
              <div className="post-content">
                <h3>How did you get the first clients for your startup?</h3>
                <p>
                   How did you get your first clients? What worked best for
                  your company at the very beginning?
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RedditPostPreview;