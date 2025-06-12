import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="remaining-credits-card">
        <h2 className="credits-title">REMAINING CREDITS</h2>
        
        <div className="credit-item">
          <div className="credit-info">
            <div className="credit-label">FOR</div>
            <div className="credit-facility">Main Training Floor</div>
          </div>
          <div className="credit-count">3</div>
        </div>
        
        <hr className="divider" />
        
        <div className="credit-item">
          <div className="credit-info">
            <div className="credit-label">FOR</div>
            <div className="credit-facility">Stretching/Sports Massage Room A and Room B</div>
          </div>
          <div className="credit-count zero-credit">0</div>
        </div>
        
        <hr className="divider" />
        
        <div className="credit-footer">
          <p className="credit-note">1 credit = 1 session.</p>
          <p className="credit-contact">
            Need more credits? <a href="/contact">Contact us.</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
