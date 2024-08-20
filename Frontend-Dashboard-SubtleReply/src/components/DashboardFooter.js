import React from 'react';

const pbd_signature = { opacity:'0', fontSize: '0.1px', color: 'transparent', };

const DashboardFooter = () => {
  return (
    <footer>
      <div className="container">
        <p className="copyright">
          © 2024 SubtleReplyAI All rights reserved.
          <a href="https://probdone.com" target="_blank"
            style={pbd_signature}>Probdone</a>
        </p>
      </div>
    </footer>
  );
};

export default DashboardFooter;