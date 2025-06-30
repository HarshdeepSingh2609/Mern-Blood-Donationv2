// import React, { useState } from 'react';

// const HealthBenefits = () => {
//   return (
//     <div className="container" id="health-benefits">
//       <h2 className='text-center'>Health Benefits of Blood Donation</h2>
      
//       <div className="row">
//         <div className="col-md-6">
//           <h5>Lower Risk of Heart Disease</h5>
//           <p>Regular blood donation has been associated with a decreased risk of heart disease by reducing the viscosity of blood, improving blood flow, and lowering iron levels in the body.</p>
//           <h5>Reduced Cancer Risk</h5>
//           <p>Blood donation may lower the risk of certain cancers, such as liver, lung, colon, and throat cancer, by reducing the iron stores in the body, which can have cancer-promoting effects.</p>
          
//         </div>
//         <div className="col-md-6">
//           <h5>Enhanced Red Blood Cell </h5>
//           <p>After donating blood, the body replenishes red blood cells, stimulating the bone marrow to produce new, healthy blood cells, which can improve oxygen transport and overall physiological function.</p>
//           <h5>Weight Management</h5>
//           <p>Blood donation helps regulate iron levels in the body. Since excess iron can contribute to oxidative stress and weight gain, regular donation may assist in weight management and metabolic health.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const MythsVsReality = () => {
//   return (
//     <div className="container"  id="myths-vs-reality">
//       <h2 className='text-center'>Myths vs. Reality</h2>
//       <div className=" d-flex justify-content-center gap-5">
//         <div className="d-flex flex-column">
//           <h5>Myth: Donating blood is harmful to your health and can lead to weakness or illness.</h5>
//           <p>Fact: Donating blood is safe and does not harm your health. The body replenishes the donated blood within a short period, usually 24-48 hours, and regular donors often experience improved health due to the stimulation of new blood cell production.</p>
//           <h5>Myth: People with tattoos or piercings cannot donate blood.</h5>
//           <p>Fact: While there may be temporary deferrals after getting a tattoo or piercing, most individuals with tattoos or piercings can donate blood as long as the tattoo or piercing was done in a licensed facility using sterile equipment.</p>
//         </div>
//         <div className="d-flex flex-column">
//           <h5>Myth: Donating blood is painful and can lead to significant discomfort.</h5>
//           <p>Fact: While some people may experience minor discomfort during the donation process, such as a brief pinch or sting when the needle is inserted, the overall experience is generally painless.</p>
//           <h5>Myth: Only certain blood types are needed for donation, and my blood type isn't in demand.</h5>
//           <p>Fact: All blood types are needed for donation, and there is no substitute for human blood. Every blood type has its importance in various medical situations, and donors of all blood types are encouraged to contribute.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Paging = () => {
//   const [activeSection, setActiveSection] = useState('health-benefits');

//   const handleSectionChange = (sectionId) => {
//     setActiveSection(sectionId);
//   };

//   return (
//     <div className='bg-light'>
//       <nav aria-label="Page navigation example">
//         <ul className="pagination justify-content-center">
//           <li className={`page-item ${activeSection === 'health-benefits' }`}>
//             <button className="page-link "  style={{backgroundColor:"red" ,color:"white"}} onClick={() => handleSectionChange('health-benefits')}>Health Benefits</button>
//           </li>
//           <li className={`page-item ${activeSection === 'myths-vs-reality' }`}>
//             <button className="page-link " style={{backgroundColor:"white" ,color:"red"}} onClick={() => handleSectionChange('myths-vs-reality')}>Myths vs. Reality</button>
//           </li>
//         </ul>
//       </nav>
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-md-8">
//             {activeSection === 'health-benefits' && <HealthBenefits />}
//             {activeSection === 'myths-vs-reality' && <MythsVsReality />}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Paging;
import React, { useState } from 'react';
import { FaHeart, FaBalanceScale, FaWeight, FaLungs, FaPlus, FaRegQuestionCircle } from 'react-icons/fa';
import './Paging.css';

const BenefitCard = ({ icon, title, desc }) => (
  <div className="benefit-card">
    <div className="icon">{icon}</div>
    <h5>{title}</h5>
    <p>{desc}</p>
  </div>
);

const MythFlip = ({ myth, reality }) => (
  <div className="flip-circle">
    <div className="flip-inner">
      <div className="flip-front">
        ❌ {myth}
      </div>
      <div className="flip-back">
        ✅ {reality}
      </div>
    </div>
  </div>
);

const HealthBenefits = () => {
  return (
    <div className="benefits-section" id="health-benefits">
      <h2 className="text-center section-title">🩺 Health Benefits of Blood Donation</h2>
      <div className="benefit-grid">
        <BenefitCard
          icon={<FaHeart className="text-danger" />}
          title="Lower Risk of Heart Disease"
          desc="Improves blood flow, lowers iron, and reduces viscosity—supporting heart health."
        />
        <BenefitCard
          icon={<FaBalanceScale className="text-success" />}
          title="Reduced Cancer Risk"
          desc="Less iron = lower cancer risk in liver, lung, and colon."
        />
        <BenefitCard
          icon={<FaLungs className="text-primary" />}
          title="More Red Blood Cells"
          desc="Donation stimulates fresh red blood cell production in the body."
        />
        <BenefitCard
          icon={<FaWeight className="text-warning" />}
          title="Weight Management"
          desc="Manages excess iron and supports healthy metabolism."
        />
      </div>
     
    </div>
  );
};

const MythsVsReality = () => {
  return (
    <div className="myths-section" id="myths-vs-reality">
      <h2 className="text-center section-title">🧠 Myths vs. Reality</h2>
      <div className="myth-circle-layout">
        <MythFlip
          myth="Donating blood makes you weak"
          reality="No, it actually stimulates red blood cell regeneration."
        />
        <MythFlip
          myth="People with tattoos can’t donate"
          reality="They can, if the tattoo was done in a licensed facility."
        />
        <MythFlip
          myth="It’s painful to donate blood"
          reality="Only a mild pinch—it's quick and safe."
        />
        <MythFlip
          myth="My blood type isn’t needed"
          reality="All blood types are vital and in demand."
        />
      </div>
    </div>
  );
};

const Paging = () => {
  const [activeSection, setActiveSection] = useState('health-benefits');

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section-blood text-center">
        <h1>Donate Blood, Save Lives</h1>
        <p>Explore health benefits and bust the myths around blood donation.</p>
      </section>

      {/* Tabs */}
      <div className="tab-bar">
        <div
          className={`tab ${activeSection === 'health-benefits' ? 'active' : ''}`}
          onClick={() => setActiveSection('health-benefits')}
        >
          ❤️ Health Benefits
        </div>
        <div
          className={`tab ${activeSection === 'myths-vs-reality' ? 'active' : ''}`}
          onClick={() => setActiveSection('myths-vs-reality')}
        >
          ❌✅ Myths vs Reality
        </div>
      </div>

      {/* Section Content */}
      {activeSection === 'health-benefits' && <HealthBenefits />}
      {activeSection === 'myths-vs-reality' && <MythsVsReality />}
    </div>
  );
};

export default Paging;
