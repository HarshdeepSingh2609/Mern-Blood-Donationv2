// import React from 'react'
// import Header from './Header'
// import Sidebar from './Sidebar'

// const Layout = ({children}) => {
//   return (
//     <div>
//       <div className='header'>
//         <Header/>
//       </div>

//       <div className='row g-0'>
//       <div className='sidebar col-md-3'> <Sidebar /></div>
//       <div className='content col-md-9'>{children} </div>
      
//       </div>
      
//     </div>
//   )
// }

// export default Layout

import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import './Layout.css'; // Add this for styles

const Layout = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      <div className="layout-body">
        <Sidebar />
        <div className="layout-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
