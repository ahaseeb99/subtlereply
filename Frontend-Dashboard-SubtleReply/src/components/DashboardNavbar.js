import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Avatar from './../assets/avatar.png';
import chevronDownIcon from './../assets/icon-chevron-down.svg';
import accountIcon from './../assets/icon-account.svg';
import logoutIcon from './../assets/icon-logout.svg';
import downgradeIcon from './../assets/icon-downgrade.svg';


const DashboardNavbar = () => {
   return (

      <header>
         <div className="container">
            <nav className="navbar navbar-expand-xl">
               <p className="navbar-brand">Hi, Dr Anna!</p>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                  aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul className="navbar-nav mx-auto">
                     <NavLink className="nav-item" activeClassName="active" exact to="/">
                        <Link className="nav-link" exact to="/">Projects</Link>
                     </NavLink >
                     <NavLink className="nav-item" to="/project-dashboard">
                        <Link className="nav-link" to="/project-dashboard">Dashboard</Link>
                     </NavLink>
                  </ul>
               </div>
               <ul className="navbar-nav d-flex profile-nav">
                  <div className="dropdown profile-nav-item">
                     <button className="profile-nav-link">
                        <img src={Avatar} alt="profile-avatar" width="100%" />
                        <span className="profile-nav-name">
                           Anna Smith
                        </span>
                        <span className="profile-arrow">
                           <img src={chevronDownIcon} alt="chevron-down-icon" />
                        </span>
                     </button>
                     <div className="profile-dropdown dropdown-content">
                        <div className='pbd_backBlur'>
                           <a className='pbd_dropdownLinks' href="#">
                              <img src={accountIcon} alt='Account-icon' />
                              Profile
                           </a>
                           <a className='pbd_dropdownLinks' href="#">
                              <img src={logoutIcon} alt='Logout-icon' />
                              Logout
                           </a>
                           <a className='pbd_dropdownLinks' href="#">
                              <img src={downgradeIcon} alt='Downgrade-icon' />
                              Downgrade my plan
                           </a>
                        </div>
                     </div>
                  </div>
               </ul>
            </nav>
         </div>
      </header>

   );
};

export default DashboardNavbar;
