// import React, { useState, useEffect } from 'react';
// import Header from '../../components/Shared/Layout/Header';
// import API from '../../services/API';

// const Analytics = () => {
//     const [data, setData] = useState([]);
//     const colors=["#7D0A0A","#EAD196","#BF3131","#F3EDC8","#9A4444","#DE8F5F","#F4DFB6","#D6D46D"];
//     const bloodgpdata = async () => {
//         try {
//             const {data} = await API.get("/analytics/blood-groups-data");
//             if (data?.success) {
//                 setData(data?.bloodGroupData);

//             }
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     useEffect(() => {
//         bloodgpdata();
//     }, []);

//     // Log data outside the JSX
//     console.log(data);

//     return (
//         <div>
//             <Header />
//             <div className='d-flex flex-row flex-wrap'>
//                 {data?.map((record,i) => (
//                     <div key={i} className="card  m-2 " style={{ width: '18rem',backgroundColor:`${colors[i]}` }}>
//                         <div className="card-body">
//                             <h3 className="card-title text-center bg-light text-dark mb-3 ">{record.bloodGroup}</h3>
//                             <p className="card-text">Total in :<b> {record.totalIn}(ml)</b></p>
//                             <p className="card-text">Total out :<b> {record.totalOut}(ml)</b></p>
//                         </div>
                        
//                         <div className="card-footer  text-center bg-dark text-light mb-3">Available :<b>{record.availableBlood}(ml)</b></div>
                        
//                     </div>
//                 ))}

               

//             </div>
//         </div>
//     );
// }

// export default Analytics;
import React, { useState, useEffect } from 'react';
import Header from '../../components/Shared/Layout/Header';
import API from '../../services/API';
import './Analytics.css'; // Make sure to create this CSS file

const Analytics = () => {
  const [data, setData] = useState([]);

  const colors = [
    '#ffb3b3', '#fff0b3', '#ff9999', '#e0ffd1',
    '#ffc2c2', '#ffdab3', '#fff6cc', '#e6f2b3'
  ];

  const bloodgpdata = async () => {
    try {
      const { data } = await API.get("/analytics/blood-groups-data");
      if (data?.success) {
        setData(data?.bloodGroupData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    bloodgpdata();
  }, []);

  return (
    <div>
      <Header />
      <div className="analytics-container">
        {data?.map((record, i) => (
          <div key={i} className="blood-card" style={{ backgroundColor: colors[i % colors.length] }}>
            <div className="card-header">
              <span className="blood-group">{record.bloodGroup}</span>
              <i className="fa-solid fa-droplet blood-icon"></i>
            </div>
            <div className="card-body">
              <p>Total In: <b>{record.totalIn}(ml)</b></p>
              <p>Total Out: <b>{record.totalOut}(ml)</b></p>
            </div>
            <div className="card-footer">
              Available: <b>{record.availableBlood}(ml)</b>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;
