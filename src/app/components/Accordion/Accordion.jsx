import { useState } from 'react';
import './Accordion.css';

export const Accordion = ({ day, times, onDaySelect, selectedTimes }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const handleTimeChange = (e) => {
    const { value, checked } = e.target;
    onDaySelect(day, checked ? [...selectedTimes, value] : selectedTimes.filter((time) => time !== value));
  };

  return (
    <div className="accordion">
      <button className="accordion-title" onClick={handleToggleAccordion}>
        {day}
      </button>
      {isOpen && (
        <div className="accordion-content">
          {times.map((time) => (
            <div key={time}>
              <input
                type="checkbox"
                id={time}
                value={time}
                checked={selectedTimes.includes(time)}
                onChange={handleTimeChange}
              />
              <label htmlFor={time}>{time}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};