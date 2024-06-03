import { useState } from 'react';
import './Accordion.scss';

function Accordion({ title, text }) {
    const [isActive, setActive] = useState(false);

    function handleToggle() {
        setActive(!isActive);
    }
    
    return (
        <div className={isActive ? "accordion-wrapper active" : "accordion-wrapper"}>
            <div className="accordion-button">
                <h3>{title}</h3>
                <img
                    src="src/assets/arrow.png"
                    alt="Arrow"
                    onClick={handleToggle}
                    className={isActive ? "arrow active" : "arrow"}
                />
            </div>
            <div className={isActive ? "accordion-content active" : "accordion-content"}>
                <div>
                    {typeof text !== "undefined" ? <p>{text}</p> : null}
                </div>
            </div>
        </div>
    );
}

export default Accordion;
