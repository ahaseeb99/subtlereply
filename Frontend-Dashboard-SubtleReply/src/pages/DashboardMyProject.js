import React, { useState, useEffect } from 'react';
import DashboardMyProjectSubredditTable from '../components/DashboardMyProjectSubredditTable';

import plusIcon from './../assets/icon-plus.svg';
import engagementIcon from './../assets/icon-engagement.svg';
import redditIcon from './../assets/icon-reddit.svg';
import eyeIcon from './../assets/icon-eye.svg';
import chatFwdIcon from './../assets/icon-chat-fwd.svg';

import ManageSubscriptionModal from '../components/modals/ManageSubscriptionModal';

const DashboardMyProject = () => {

   const [value, setValue] = useState(2);

   useEffect(() => {
      createCircles();
      window.addEventListener('resize', createCircles);
      return () => {
         window.removeEventListener('resize', createCircles);
      };
   }, []); // Empty dependency array means it only runs once, like componentDidMount

   const createCircles = () => {
      const slider = document.getElementById("pbd_rangeSlider");
      const sliderTrack = document.querySelector(".pbd_rangeSlider");
      const numCircles = parseInt(slider.getAttribute('max')) + 1;
      const sliderWidth = sliderTrack.clientWidth;
      const interval = sliderWidth / (numCircles - 1);
   };

   const handleInputChange = (e) => {
      setValue(e.target.value);
   };

   const [showModal, setShowModal] = useState(false);

   const handleClick = () => {
      setShowModal(true);
   };

   const handleClose = () => {
      setShowModal(false);
   };

   const calculateBackground = () => {
      const percent = ((value - 0) / (4 - 0)) * 100; // Calculate percentage based on range min and max
      return `linear-gradient(90deg, var(--purple) 0%, var(--pink) ${percent}%, var(--transparent) ${percent}%)`;
   };

   return (
      <>
         <section className="pbd_project-dashboard">
            <div className="container">
               <div className="pbd_project-area">
                  <div className="pbd_bot-train pbd_left-block">

                     <div className="pbd_create-project">
                        <div className="pbd_create-project-form">
                           <label htmlFor="current-project" className="form-label">Current Project</label>
                           <input type="email" className="form-control" id="current-project" placeholder="Weightlifting Products" />
                        </div>
                        <div className="pbd_create-project-btn">
                           <button type="submit" className="btn btn-primary pbd_primary-btn">
                              <img src={plusIcon} alt="icon-plus" />
                              Create a new project
                           </button>
                        </div>
                     </div>

                     <div className="pbd_train-your-bot">
                        <div className="pbd_section-title">
                           <h3>
                              Train your Bot
                           </h3>
                           <p>
                              Tell your bot how to identify relevant content and add the most value.
                           </p>
                        </div>
                        <div className="pbd_train-form-block">
                           <form className="row g-3">
                              <div className="col-md-12 col-lg-12">
                                 <label htmlFor="problem" className="form-label">How do you solve this problem?</label>
                                 <textarea className="form-control" id="solve" rows="5" placeholder="Type here"></textarea>
                              </div>
                              <div className="col-md-12 col-lg-12">
                                 <label htmlFor="problem" className="form-label">What problem do you solve?</label>
                                 <textarea className="form-control" id="problem" rows="5" placeholder="Type here"></textarea>
                              </div>
                              <div className="col-md-12 col-lg-12">
                                 <label htmlFor="problem" className="form-label">Whom do you help?</label>
                                 <textarea className="form-control" id="help" rows="5" placeholder="Type here"></textarea>
                              </div>
                           </form>
                        </div>
                     </div>

                  </div>
                  <div className="pbd_current-plan pbd_right-block">
                     {/* <div className="pbd_section-title">
                        <h3>
                           Your Current Plan
                        </h3>
                     </div> */}
                     <div className="pbd_plan-stats">
                        <div className="pbd_pkg-name">
                           <div className="pbd_prof-pic">E</div>
                           <div className="pbd_prof-name">Engagement</div>
                        </div>
                        <div className="pbd_pkg-list">
                           <ul>
                              <li>
                                 1 Community
                              </li>
                              <li>
                                 5 Keywords
                              </li>
                              <li>
                                 50 Replies
                              </li>
                           </ul>
                        </div>
                        <div className="pbd_subscription-btn" onClick={handleClick}>
                           <img src={engagementIcon} alt="subscription-btn" />
                        </div>
                     </div>
                     <div className="pbd_confidence-meter">
                        <div className="pbd_section-title">
                           <h3>
                              Confidence Meter
                           </h3>
                        </div>
                        <div className="pbd_level-bar">
                           <div className="pbd_number">
                              <span>1</span>
                              <span>2</span>
                              <span>3</span>
                              <span>4</span>
                              <span>5</span>
                           </div>
                           <div className="pbd_text">
                              <span>
                                 Not Relevant
                              </span>
                              <span>
                                 Slightly Relevant
                              </span>
                              <span>
                                 Relevant
                              </span>
                           </div>
                           {/* <div className="pbd_progress-bar">
                              <div className="progress">
                                 <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50"
                                    aria-valuemin="0" aria-valuemax="100">
                                 </div>
                              </div>
                           </div> */}
                           <div className="pbd_progress-bar">
                              <input type="range" min="0" max="4" value={value} className="pbd_rangeSlider " id="pbd_rangeSlider" onChange={handleInputChange} />
                              <div className="pbd_filledTrack" style={{ background: calculateBackground() }}></div>
                           </div>
                        </div>
                     </div>
                     <div className="pbd_reddit-account">
                        <div className="pbd_section-title">
                           <h3>
                              Reddit Username & Password
                           </h3>
                        </div>
                        <form className="row g-3">
                           <div className="col-md-12">
                              <div className="pbd_input-group">
                                 <span className="pbd_icon-left">
                                    <img src={redditIcon} alt="" />
                                 </span>
                                 <input type="text" className="form-control pbd_input-icon-left" id="reddit-username" placeholder="u/AnnaSmith15" />
                              </div>
                           </div>
                           <div className="col-md-12">
                              <div className="pbd_input-group">
                                 <span className="pbd_icon-right">
                                    <img src={eyeIcon} alt="" />
                                 </span>
                                 <input type="password" className="form-control pbd_input-icon-right" id="reddit-password" placeholder="Password" />
                              </div>
                           </div>

                           <div className="col-md-12 d-flex justify-content-between">
                              <button type="submit" className="btn btn-primary pbd_primary-btn">
                                 Save
                              </button>
                              <button type="submit" className="btn btn-primary pbd_primary-btn">
                                 <img src={chatFwdIcon} alt="icon-plus" />
                                 Go To Reddit
                              </button>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <DashboardMyProjectSubredditTable />


         {/* Manage Subscription Modal [ManageSubscriptionModal.js] */}
         <ManageSubscriptionModal isOpen={showModal} onClose={handleClose}> </ManageSubscriptionModal>
      </>
   );
};

export default DashboardMyProject;