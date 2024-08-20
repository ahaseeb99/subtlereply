import React, { useState } from 'react';
import plusIcon from './../assets/icon-plus.svg';
import ProjectTableModal from './modals/ProjectTableModal';
import ManageSubscriptionModal from '../components/modals/ManageSubscriptionModal';

const DashboardMyProjectSubredditTable = () => {

   const [showProjectModal, setShowProjectModal] = useState(false);
   const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);

   const handleProjectModalOpen = () => {
      setShowProjectModal(true);
   };

   const handleSubscriptionModalOpen = () => {
      setShowSubscriptionModal(true);
   };

   const handleClose = () => {
      setShowProjectModal(false);
      setShowSubscriptionModal(false);
   };

   return (

      <section className='pbd_subredditKeyword'>
         <div className='container'>
            <div className='pbd_subredditKeywordBlock'>
               <div className="pbd_section-title">
                  <span>
                     Subreddits
                  </span>
               </div>
               <div className='pbd_subredditKeywordTable'>
                  <div className='pbd_subredditKeywordTableHeader'>
                     <div className='pbd_subredditKeywordsColHeading'>
                        Replies &
                        <hr />
                        Mentions
                     </div>
                     <div className='pbd_subredditKeywordsColText'>
                        Community 1
                     </div>
                     <div className='pbd_subredditKeywordsColText pbd_disabledBlur'>
                        Community 2
                     </div>
                     <div className='pbd_subredditKeywordsColText pbd_disabledBlur'>
                        Community 3
                     </div>
                     <div className='pbd_subredditKeywordsColText pbd_disabledBlur'>
                        Community 4
                     </div>
                     <div className='pbd_subredditKeywordsColText pbd_disabledBlur'>
                        Community 5
                     </div>
                     <div className='pbd_subredditKeywordsColText pbd_disabledBlur'>
                        Community 6
                     </div>
                     <div className='pbd_subredditKeywordsColText pbd_disabledBlur'>
                        Community 7
                     </div>
                     <div className='pbd_subredditKeywordsColText pbd_disabledBlur'>
                        Community 8
                     </div>
                     <div className='pbd_subredditKeywordsColText pbd_disabledBlur'>
                        Community 9
                     </div>
                     <div className='pbd_subredditKeywordsColText pbd_disabledBlur'>
                        Community 10
                     </div>
                     <div className='pbd_subredditKeywordsColbtn'>
                        <button type="submit" className="btn pbd_addBtn" onClick={handleSubscriptionModalOpen}>
                           <img src={plusIcon} alt="icon-plus" />
                        </button>
                     </div>
                  </div>
                  <div className='pbd_subredditKeywordTableContent'>
                     <div className='pbd_subredditKeywordTableRow'>
                        <div className='pbd_subredditKeywordsCol'>
                           <p>
                              #Girls wearable
                           </p>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableCol'>
                           <span className='pbd_TableColText'></span>
                        </div>
                     </div>
                     
                     <div className='pbd_subredditKeywordTableRow'>
                        <div className='pbd_subredditKeywordsCol'>
                           <p>
                              #Girls wearable
                           </p>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableCol'>
                           <span className='pbd_TableColText'></span>
                        </div>
                     </div>

                     <div className='pbd_subredditKeywordTableRow'>
                        <div className='pbd_subredditKeywordsCol'>
                           <p>
                              #Girls wearable
                           </p>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableCol'>
                           <span className='pbd_TableColText'></span>
                        </div>
                     </div>

                     <div className='pbd_subredditKeywordTableRow'>
                        <div className='pbd_subredditKeywordsCol'>
                           <p>
                              #Girls wearable
                           </p>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableCol'>
                           <span className='pbd_TableColText'></span>
                        </div>
                     </div>

                     <div className='pbd_subredditKeywordTableRow'>
                        <div className='pbd_subredditKeywordsCol'>
                           <p>
                              #Girls wearable
                           </p>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableCol'>
                           <span className='pbd_TableColText'></span>
                        </div>
                     </div>

                     <div className='pbd_subredditKeywordTableRow'>
                        <div className='pbd_subredditKeywordsCol'>
                           <p>
                              #Girls wearable
                           </p>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableCol'>
                           <span className='pbd_TableColText'></span>
                        </div>
                     </div>

                     <div className='pbd_subredditKeywordTableRow'>
                        <div className='pbd_subredditKeywordsCol'>
                           <p>
                              #Girls wearable
                           </p>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableCol'>
                           <span className='pbd_TableColText'></span>
                        </div>
                     </div>

                     <div className='pbd_subredditKeywordTableRow'>
                        <div className='pbd_subredditKeywordsCol'>
                           <p>
                              #Girls wearable
                           </p>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableCol'>
                           <span className='pbd_TableColText'></span>
                        </div>
                     </div>

                     <div className='pbd_subredditKeywordTableRow'>
                        <div className='pbd_subredditKeywordsCol'>
                           <p>
                              #Girls wearable
                           </p>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableCol'>
                           <span className='pbd_TableColText'></span>
                        </div>
                     </div>

                     <div className='pbd_subredditKeywordTableRow'>
                        <div className='pbd_subredditKeywordsCol'>
                           <p>
                              #Girls wearable
                           </p>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableCol'>
                           <span className='pbd_TableColText'></span>
                        </div>
                     </div>

                     <div className='pbd_subredditKeywordTableRow'>
                        <div className='pbd_subredditKeywordsCol'>
                           <p>
                              #Girls wearable
                           </p>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableCol'>
                           <span className='pbd_TableColText'></span>
                        </div>
                     </div>

                     <div className='pbd_subredditKeywordTableRow'>
                        <div className='pbd_subredditKeywordsCol'>
                           <p>
                              #Girls wearable
                           </p>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableCol'>
                           <span className='pbd_TableColText'></span>
                        </div>
                     </div>

                     <div className='pbd_subredditKeywordTableRow'>
                        <div className='pbd_subredditKeywordsCol'>
                           <p>
                              #Girls wearable
                           </p>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableCol'>
                           <span className='pbd_TableColText'></span>
                        </div>
                     </div>

                     <div className='pbd_subredditKeywordTableRow'>
                        <div className='pbd_subredditKeywordsCol'>
                           <p>
                              #Girls wearable
                           </p>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableCol'>
                           <span className='pbd_TableColText'></span>
                        </div>
                     </div>

                     <div className='pbd_subredditKeywordTableRow'>
                        <div className='pbd_subredditKeywordsCol'>
                           <p>
                              #Girls wearable
                           </p>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableCol'>
                           <span className='pbd_TableColText'></span>
                        </div>
                     </div>

                     <div className='pbd_subredditKeywordTableRow'>
                        <div className='pbd_subredditKeywordsCol'>
                           <p>
                              #Girls wearable
                           </p>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableCol'>
                           <span className='pbd_TableColText'></span>
                        </div>
                     </div>

                     <div className='pbd_subredditKeywordTableRow'>
                        <div className='pbd_subredditKeywordsCol'>
                           <p>
                              #Girls wearable
                           </p>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableCol'>
                           <span className='pbd_TableColText'></span>
                        </div>
                     </div>

                     <div className='pbd_subredditKeywordTableRow'>
                        <div className='pbd_subredditKeywordsCol'>
                           <p>
                              #Girls wearable
                           </p>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableCol'>
                           <span className='pbd_TableColText'></span>
                        </div>
                     </div>

                     <div className='pbd_subredditKeywordTableRow'>
                        <div className='pbd_subredditKeywordsCol'>
                           <p>
                              #Girls wearable
                           </p>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableBg pbd_TableCol pbd_disabledBlur' onClick={handleProjectModalOpen}>
                           <div className=''>
                              <span className='pbd_TableColText'>
                                 24 Replies
                              </span>
                              <hr />
                              <span className='pbd_TableColText'>
                                 38 Mentions
                              </span>
                           </div>
                        </div>
                        <div className='pbd_TableCol'>
                           <span className='pbd_TableColText'></span>
                        </div>
                     </div>

                     
                  </div>
               </div>
            </div>
            <div className='pbd_subredditKeywordBtn'>
               <button type="submit" className="btn btn-primary pbd_primary-btn" onClick={handleSubscriptionModalOpen}>
                  <img src={plusIcon} alt="icon-plus" />
               </button>
               
            </div>
         </div>

         {/* Subreddit Table Modal [ProjectTableModal.js] */}
         <ProjectTableModal isOpen={showProjectModal} onClose={handleClose}> </ProjectTableModal>

         {/* Manage Subscription Modal [ManageSubscriptionModal.js] */}
         <ManageSubscriptionModal isOpen={showSubscriptionModal} onClose={handleClose}> </ManageSubscriptionModal>

      </section>

   );
};

export default DashboardMyProjectSubredditTable;