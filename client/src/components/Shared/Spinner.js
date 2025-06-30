// import React from 'react'

// const Spinner = () => {
//     // return (
//     //     <div className="loader-container">
//     //       <div className="loader"></div>
//     //     </div>
//     //   );
//     return (<div class="spinner-border text-primary"></div>);
// }

// export default Spinner
import React from 'react';

const Spinner = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}

export default Spinner;
