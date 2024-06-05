import { useState } from 'react';
import './Accordion.scss';

function Accordion({ title, text }) {
    const [isActive, setActive] = useState(false);

    function handleToggle() {
        setActive(!isActive);
    }
    
    const content = [];
    if (typeof text == "string") {
        content.push(<p key="accordion-text">{text}</p>);
    } else if (typeof text == "object") {
        text.map((item, index) => (
            content.push(<li key={item + index}>{item}</li>)
        ));
    }
    return (
        <div className={isActive ? "accordion-wrapper active" : "accordion-wrapper"}>
            <div className="accordion-button">
                <h3>{title}</h3>
                <img
                    src="/src/assets/arrow.png"
                    alt="Arrow"
                    onClick={handleToggle}
                    className={isActive ? "arrow active" : "arrow"}
                />
            </div>
            <div className={isActive ? "accordion-content active" : "accordion-content"}>
                <div>
                    {typeof text !== "undefined" ? content : <ul>{content}</ul>}
                </div>
            </div>
        </div>
    );
}

export default Accordion;
