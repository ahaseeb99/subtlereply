import React, { useEffect } from "react";
import closeIcon from './../../assets/icon-close.svg';
import visaIcon from './../../assets/icon-visa.svg';
import paypalIcon from './../../assets/icon-paypal.svg';
import masterIcon from './../../assets/icon-master.svg';

// const ManageSubscriptionModal = ({ isOpen, onClose, children }) => {
//    if (!isOpen) return null;

//    const handleContentClick = (e) => {
//       e.stopPropagation();
//    };

const ManageSubscriptionModal = ({ isOpen, onClose, children }) => {
   // Add or remove the "pbd_modalOpen" class on the body tag based on the modal's open state
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

   const handleInputChangeCvv = (e) => {
      // Only allow numbers and limit input to 3 digits for CVV Field
      const value = e.target.value.replace(/\D/g, '').slice(0, 3);
      e.target.value = value;
   };

   const handleInputChangeExpDate = (e) => {
      // Remove non-digit characters
      let value = e.target.value.replace(/\D/g, '');

      // Limit to 4 characters (2 for month, 2 for year)
      value = value.slice(0, 4);

      // Ensure month does not exceed 12
      const month = value.slice(0, 2);
      if (parseInt(month) > 12) {
         value = '12' + value.slice(2);
      }

      // Format the input value with ' / ' between month and year
      if (value.length > 2) {
         value = value.slice(0, 2) + ' / ' + value.slice(2);
      }

      e.target.value = value;
   };

   return (
      <div onClick={onClose} className="pbd_modalDialogue pbd_modalBlurredBg">
         <div onClick={handleContentClick} className="pbd_modalcontent">
            <div className="pbd_SubscriptionManage">
               <div className="pbd_SubscriptionManageHead">
                  <h3 className="pbd_SubscriptionManageTitle">
                     Choose Your Subscription Plan
                  </h3>
                  <span className="pbd_closeModal" onClick={handleCloseModal}>
                     <img src={closeIcon} alt="close-icon" />
                  </span>
               </div>
               <div className="pbd_subscriptionPkgsBlock">
                  <div className="pbd_subsriptionPkg">
                     <div className="pbd_pkg-name">
                        <div className="pbd_prof-pic">
                           <span>
                              S
                           </span>
                        </div>
                        <div className="pbd_prof-name">Starter</div>
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
                     <div className="pbd_pkg-price">
                        <p>
                           $29/mo
                        </p>
                     </div>
                  </div>
                  <div className="pbd_subsriptionPkg active">
                     <div className="pbd_pkg-name">
                        <div className="pbd_prof-pic">
                           <span>
                              E
                           </span>
                        </div>
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
                     <div className="pbd_pkg-price">
                        <p>
                           $29/mo
                        </p>
                     </div>
                  </div>
                  <div className="pbd_subsriptionPkg">
                     <div className="pbd_pkg-name">
                        <div className="pbd_prof-pic">
                           <span>
                              M
                           </span>
                        </div>
                        <div className="pbd_prof-name">Market Leader</div>
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
                     <div className="pbd_pkg-price">
                        <p>
                           $29/mo
                        </p>
                     </div>
                  </div>
                  {/* <div className="pbd_subsriptionPkg">
                     <div className="pbd_pkg-name">
                        <div className="pbd_prof-pic">
                           <span>
                              E
                           </span>
                        </div>
                        <div className="pbd_prof-name">Enterprise</div>
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
                     <div className="pbd_pkg-price">
                        <p>
                           $29/mo
                        </p>
                     </div>
                  </div> */}
               </div>
               <div className="pbd_paymentDetailsBlock">
                  <div className="pbd_paymentDetailHead">
                     <h3 className="pbd_paymentDetailTitle">Enter Your Payment Details</h3>
                     <div className="pbd_paymentCardBlock">
                        <div className="pbd_paymentCardImg active">
                           <img src={visaIcon} />
                        </div>
                        <div className="pbd_paymentCardImg">
                           <img src={masterIcon} />
                        </div>
                        <div className="pbd_paymentCardImg">
                           <img src={paypalIcon} />
                        </div>
                     </div>
                  </div>
                  <div className="pbd_paymentDetailForm">
                     <form class="row g-3">
                        <div class="col-md-6">
                           <label for="FirstName" class="form-label">First Name</label>
                           <input type="text" class="form-control" id="FirstName" placeholder="Anna" />
                        </div>
                        <div class="col-md-6">
                           <label for="LastName" class="form-label">Last Name</label>
                           <input type="text" class="form-control" id="LastName" placeholder="Smith" />
                        </div>
                        <div class="col-md-6">
                           <label for="CardNumber" class="form-label">Card Number</label>
                           <input type="text" class="form-control" id="CardNumber" placeholder="1234  ****  ****  ****" />
                        </div>
                        <div class="col-md-3">
                           <label for="ExpiryDate" class="form-label">Expiry Date</label>
                           <input type="text" class="form-control" id="ExpiryDate" placeholder="12 / 25" onKeyDown={handleInputChangeExpDate} />
                        </div>
                        <div class="col-md-3">
                           <label for="cvv" class="form-label">CVV/CVC</label>
                           <input type="text" class="form-control" id="cvv" placeholder="321" onKeyDown={handleInputChangeCvv} />
                        </div>
                        <div class="col-12">
                           <button type="submit" class="btn pbd_primary-btn w-100">Confirm</button>
                        </div>
                     </form>
                  </div>
               </div>

            </div>
         </div>
      </div>
   );
};

export default ManageSubscriptionModal;
