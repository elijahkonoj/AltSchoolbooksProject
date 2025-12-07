import { useState } from "react";

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        aria-expanded={isOpen}
        aria-controls="accordion-content"
        onClick={handleClick}
      >
        {title}
      </button>

      {isOpen && (
        <div id="accordion-content" role="region">
          {children}
        </div>
      )}
    </div>
  );
}
export default Accordion;
