import React, { useState } from 'react';
import plusIcon from './../assets/icon-plus.svg';
import probAvatar from './../assets/avatar-2.png';
import trashIcon from './../assets/icon-trash-bin.svg';
import avatar from './../assets/avatar.png';
import chevronDownIcon from './../assets/icon-chevron-down.svg';
import ProjectTableModal from './modals/ProjectTableModal';
import ManageSubscriptionModal from './modals/ManageSubscriptionModal';

const ProjectOverviewTable = () => {
   const [projects, setProjects] = useState([
      {
         id: 1,
         name: "Weightlifting Products",
         subscription: "Starter",
         activeSubreddit: "J.r/wieghtlifting",
         activeKeyword: "#Girls Wearable",
         keywordMentions: 59,
         botReplies: 12
      },
      {
         id: 2,
         name: "Probdone",
         subscription: "Starter",
         activeSubreddit: "J.r/wieghtlifting",
         activeKeyword: "#Girls Wearable",
         keywordMentions: 59,
         botReplies: 12
      },
      {
         id: 3,
         name: "Website Development",
         subscription: "Starter",
         activeSubreddit: "J.r/wieghtlifting",
         activeKeyword: "#Girls Wearable",
         keywordMentions: 59,
         botReplies: 12
      },
      {
         id: 4,
         name: "Weightlifting Products",
         subscription: "Starter",
         activeSubreddit: "J.r/wieghtlifting",
         activeKeyword: "#Girls Wearable",
         keywordMentions: 59,
         botReplies: 12
      },
      {
         id: 5,
         name: "Weightlifting Products",
         subscription: "Starter",
         activeSubreddit: "J.r/wieghtlifting",
         activeKeyword: "#Girls Wearable",
         keywordMentions: 59,
         botReplies: 12
      },
   ]);
   const [deleteProjectId, setDeleteProjectId] = useState(null);
   const [deleteProjectName, setDeleteProjectName] = useState('');

   const handleDeleteProject = (id, name) => {
      setDeleteProjectId(id);
      setDeleteProjectName(name);
   };

   const confirmDelete = () => {
      setProjects(projects.filter(project => project.id !== deleteProjectId));
      setDeleteProjectId(null);
      setDeleteProjectName('');
   };

   const cancelDelete = () => {
      setDeleteProjectId(null);
      setDeleteProjectName('');
   };


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
            <div className='pbd_projectOverviewBlock'>
               <div className="pbd_section-title">
                  <span>
                     Projects Overview
                  </span>
               </div>
               <div className='pbd_projectOverviewTable'>
                  <div className='pbd_projectOverviewTableHeader'>
                     <div className='pbd_projectOverviewColHeading'>
                        Name
                     </div>
                     <div className='pbd_subredditKeywordsColText'>
                        Subscription
                     </div>
                     <div className='pbd_subredditKeywordsColText'>
                        Most Active Subreddit
                     </div>
                     <div className='pbd_subredditKeywordsColText'>
                        Most Active Keyword
                     </div>
                     <div className='pbd_subredditKeywordsColText'>
                        Keyword Mentions
                     </div>
                     <div className='pbd_subredditKeywordsColText'>
                        Bot Replies
                     </div>
                     <div className='pbd_subredditKeywordsColbtn'>
                        Dropdown
                     </div>
                  </div>
                  <div className='pbd_projectOverviewTableContent'>
                     {projects.map(project => (
                        <div className='pbd_projectOverviewTableRow' key={project.id}>
                           <div className="pbd_projectOverviewCol">
                              <p>{project.name}</p>
                           </div>
                           <div className="pbd_TableCol">
                              <div className="pbd_TableBg pbd_SubsPkg" onClick={handleSubscriptionModalOpen}>
                                 {project.subscription}
                              </div>
                           </div>
                           <div className="pbd_TableCol">
                              <div className="pbd_activeSubreddit">
                                 <img src={probAvatar} alt="avatar" />
                                 <span>{project.activeSubreddit}</span>
                              </div>
                           </div>
                           <div className="pbd_TableCol">
                              <div className="pbd_activeKeyword">
                                 <p>{project.activeKeyword}</p>
                              </div>
                           </div>
                           <div className="pbd_TableCol">
                              <div className="pbd_keywordMention">
                                 {project.keywordMentions}
                              </div>
                           </div>
                           <div className="pbd_TableCol">
                              <div className="pbd_botReplies">
                                 {project.botReplies}
                              </div>
                           </div>
                           <div className="pbd_TableCol">
                              <div className="pbd_editActio">
                                 <button className="btn pbd_deleteBtn dropdown-toggle" type="button" onClick={() => handleDeleteProject(project.id, project.name)}>
                                    <img src={trashIcon} alt='trash-icon' />
                                 </button>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
            <div className='pbd_projectOverviewBtn'>
               <button type="submit" className="btn pbd_primary-btn">
                  <img src={plusIcon} alt="icon-plus" />
                  Create a new project
               </button>
            </div>
         </div>
         {/* Confirmation Modal */}
         {deleteProjectId !== null && (
            <div className="pbd_confirmationModal">
               <div className="pbd_confirmationModalBody">
                  <div className="pbd_confirmationModalContent">
                     <p>Are you sure you want to delete "<span>{deleteProjectName}</span>" project?</p>
                  </div>
                  <div className="pbd_confirmationBtns">
                     <button className="btn pbd_delete-btn" onClick={confirmDelete}>Delete</button>
                     <button className="btn pbd_cancel-btn" onClick={cancelDelete}>Cancel</button>
                  </div>
               </div>
            </div>
         )}

         {/* Subreddit Table Modal [ProjectTableModal.js] */}
         <ProjectTableModal isOpen={showProjectModal} onClose={handleClose}> </ProjectTableModal>

         {/* Manage Subscription Modal [ManageSubscriptionModal.js] */}
         <ManageSubscriptionModal isOpen={showSubscriptionModal} onClose={handleClose}> </ManageSubscriptionModal>
      </section>
   );
};

export default ProjectOverviewTable;