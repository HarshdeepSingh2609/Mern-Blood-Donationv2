
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
