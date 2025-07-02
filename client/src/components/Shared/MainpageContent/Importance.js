
import React, { useState } from "react";
import "./Importance.css";
import { FaTint, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const bloodGroups = [
  { type: "O+", info: "Can donate to O+, A+, B+, AB+" },
  { type: "O-", info: "Universal Donor — Can donate to all" },
  { type: "A+", info: "Can donate to A+, AB+" },
  { type: "A-", info: "Can donate to A+, A-, AB+, AB-" },
  { type: "B+", info: "Can donate to B+, AB+" },
  { type: "B-", info: "Can donate to B+, B-, AB+, AB-" },
  { type: "AB+", info: "Universal Recipient — Can receive from all" },
  { type: "AB-", info: "Can donate to AB+, AB-" },
];

const Importance = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="importance-section">
      <h2 className="importance-title">
        <FaTint className="icon" /> Why Donate Blood?
      </h2>

      <p className="importance-text">
        <strong>Donating blood saves lives.</strong> It's a simple act of
        generosity with profound impact, offering hope to those in critical
        conditions. Blood donations are essential for surgeries, cancer
        treatments, and emergencies.{" "}
        <strong>There's no substitute for donated blood</strong> — every
        contribution is <strong>invaluable</strong>.
      </p>

      <div className="blood-group-container">
        {bloodGroups.map((group) => (
          <div className="blood-group-card" key={group.type}>
            <span className="group-label">{group.type}</span>
            <div className="group-info">{group.info}</div>
          </div>
        ))}
      </div>

      <button className="cta-button" onClick={handleModalOpen}>
        Check Your Eligibility
      </button>

      <div className="fact-strip">
        ❤️ Every <strong>2 seconds</strong>, someone needs blood. | 💉{" "}
        <strong>1 donation</strong> can save up to <strong>3 lives</strong>.
      </div>

      {/* Modal */}
      {showModal && (
        <div className="importance-modal-overlay">
          <div className="importance-modal">
            <div className="importance-modal-header">
              <h3>🩸 Blood Donation Eligibility</h3>
              <FaTimes
                className="importance-close-icon"
                onClick={handleModalClose}
              />
            </div>
            <div className="importance-modal-content">
              <ul>
                <li>✔️ Age between 18 and 65 years</li>
                <li>✔️ Weight above 50kg (110 lbs)</li>
                <li>✔️ Should be in good health</li>
                <li>✔️ No recent tattoos or piercings (within 6 months)</li>
                <li>✔️ No infectious diseases (HIV, Hepatitis, etc.)</li>
                <li>✔️ Not pregnant or recently given birth</li>
                <li>
                  ✔️ No antibiotics or major surgeries in the last 6 months
                </li>
              </ul>
            </div>
            <div className="importance-modal-footer">
              <button
                className="cta-button"
                onClick={() => {
                  navigate("/register");
                  alert("Redirect to register");
                }}
              >
                Ready to Donate? ➡️ Register Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Importance;
