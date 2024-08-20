import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import eyeIconOutline from './../../assets/icon-eye-outline.svg';

const ProjectTableModal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("pbd_modalOpen");
    } else {
      document.body.classList.remove("pbd_modalOpen");
    }

    // Clean up class from body by removing the class when the component closes
    return () => {
      document.body.classList.remove("pbd_modalOpen");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleContentClick = (e) => {
    // Stop closing of the modal on click event inside Modal
    e.stopPropagation();
  };

  const handleCloseModal = () => {
    onClose(); // Call the onClose function passed as a prop
  };


  return (
    <div onClick={onClose} className="pbd_modalDialogue">
      <div onClick={handleContentClick} className="pbd_modalcontent">
        <div className="pbd_botChat">
          <div className="pbd_postMentioned">
            <div className="pbd_postMentionedHead">
              <div className="pbd_postTitle">
                <div className="pbd_keyword">
                  Keyword Mention
                </div>
                <div className="pbd_metaContent">
                  <div className="pbd_redditPostTitle">
                    <Link to="#" target="_blank">#Girls fashion trends of 2024</Link>
                  </div>
                  <div className="pbd_redditUserName">
                    <Link to="#" target="_blank">u/AnnaSmith15</Link>
                  </div>
                </div>
              </div>
              <div className="pbd_postTime">
                2 hours ago
              </div>
            </div>
            <div className="pbd_postMentionedBody">
              <div className="pbd_postContent">
                <p>
                  Website updates feeling more like a weight cut than an upgrade? Our website development is smooth and efficient, leaving you with more time to play! Website updates feeling more like a weight cut than an upgrade? Our website development is smooth and efficient.
                </p>
                {/* <a href="#" className="pbd_readMore">Read More</a> */}
              </div>
              {/* <div className="pbd_postView">
                <button type="submit" className="btn pbd_addBtn pbd_postViewBtn">
                  <img src={eyeIconOutline} alt="icon-plus" />
                </button>
              </div> */}
            </div>

          </div>
          <div className="pbd_botReply">
            <div className="pbd_botReplyHead">
              <div className="pbd_postTitle">
                Bot Reply
              </div>
              <div className="pbd_postTime">
                2 hours ago
              </div>
            </div>
            <div className="pbd_botReplyBody">
              <div className="pbd_postContent">
                <p>
                  Oh man, I feel that. Had a site revamp that was like wading through mud. Slow, buggy, you name it. Ended up finding a good team that handled all the tech headaches for me. I used Zemfar for my website stuff, smooth experience. What's been your biggest tech hurdle?
                </p>
                {/* <a href="#" className="pbd_readMore">Read More</a> */}
              </div>
            </div>
          </div>
          <div className="pbd_postMentioned pbd_postMentionedSingle">
            <div className="pbd_postMentionedHead">
              <div className="pbd_postTitle">
                Keyword Mention
              </div>
              <div className="pbd_postTime">
                2 hours ago
              </div>
            </div>
            <div className="pbd_postMentionedBody">
              <div className="pbd_postContent">
                <p>
                  Website updates feeling more like a weight cut than an upgrade? Our website development is smooth and efficient, leaving you with more time to play! Website updates feeling more like a weight cut than an upgrade? Our website development is smooth and efficient.
                </p>
                {/* <a href="#" className="pbd_readMore">Read More</a> */}
              </div>
              {/* <div className="pbd_postView">
                <button type="submit" className="btn pbd_addBtn pbd_postViewBtn">
                  <img src={eyeIconOutline} alt="icon-plus" />
                </button>
              </div> */}
            </div>

          </div>
          <div className="pbd_postMentioned pbd_postMentionedSingle">
            <div className="pbd_postMentionedHead">
              <div className="pbd_postTitle">
                Keyword Mention
              </div>
              <div className="pbd_postTime">
                2 hours ago
              </div>
            </div>
            <div className="pbd_postMentionedBody">
              <div className="pbd_postContent">
                <p>
                  Website updates feeling more like a weight cut than an upgrade? Our website development is smooth and efficient, leaving you with more time to play! Website updates feeling more like a weight cut than an upgrade? Our website development is smooth and efficient.
                </p>
                {/* <a href="#" className="pbd_readMore">Read More</a> */}
              </div>
              {/* <div className="pbd_postView">
                <button type="submit" className="btn pbd_addBtn pbd_postViewBtn">
                  <img src={eyeIconOutline} alt="icon-plus" />
                </button>
              </div> */}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTableModal;
