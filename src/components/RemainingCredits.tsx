import React from 'react';
import '../styles/RemainingCredits.css';

interface CreditItemProps {
  facility: string;
  count: number;
}

const CreditItem: React.FC<CreditItemProps> = ({ facility, count }) => {
  return (
    <div className="credit-item">
      <div className="credit-info">
        <div className="credit-label">FOR</div>
        <div className="credit-facility">{facility}</div>
      </div>
      <div className={`credit-count ${count === 0 ? 'zero-credit' : ''}`}>{count}</div>
    </div>
  );
};

interface RemainingCreditsProps {
  mainFloorCredits: number;
  stretchingRoomCredits: number;
}

const RemainingCredits: React.FC<RemainingCreditsProps> = ({ 
  mainFloorCredits, 
  stretchingRoomCredits 
}) => {
  return (
    <div className="remaining-credits-card">
      <h2 className="credits-title">REMAINING CREDITS</h2>
      
      <CreditItem 
        facility="Main Training Floor" 
        count={mainFloorCredits} 
      />
      
      <hr className="divider" />
      
      <CreditItem 
        facility="Stretching/Sports Massage Room A and Room B" 
        count={stretchingRoomCredits} 
      />
      
      <hr className="divider" />
      
      <div className="credit-footer">
        <p className="credit-note">1 credit = 1 session.</p>
        <p className="credit-contact">
          Need more credits? <a href="/contact">Contact us.</a>
        </p>
      </div>
    </div>
  );
};

export default RemainingCredits; 