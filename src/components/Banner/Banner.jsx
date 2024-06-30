import './Banner.scss';
import { useState } from 'react';

export function Banner({ className, title, src, slides }) {
    const [picture, setPicture] = useState(0)

    // Set maximum of slides
    let slidesMax;
    if (slides !== undefined) {
        slidesMax = slides.length - 1;
    }

    // If picture is for home or about page add relative path
    if (className === "home" || className === "about" ) {
        src = "src/assets/" + src;
    }

    let arrowLeft;
    let arrowRight;
    let pageNumber;
    // If there is multiple slides, add arrows and page number on housing page 
    if (className === "housing" && slidesMax !== 0) {
        arrowLeft = <img 
            src="/src/assets/arrow-left.png"
            className="arrow-left arrow"
            onClick={()  => arrowClick("left")}
        />
        arrowRight = <img
            src="/src/assets/arrow-right.png"
            className="arrow-right arrow"
            onClick={()  => arrowClick("right")}
        />
        pageNumber = <p className="page-number">
            {picture + 1} / {slidesMax + 1}
        </p>
    }

    // Add or remove 1 to index and loop if above max or below min
    function arrowClick(direction) {
        if (direction === "left") {
            if (picture === 0) {
                setPicture(slidesMax);
            } else {
                setPicture(picture - 1);
            }
        } else if (direction === "right") {
            if (picture === slidesMax) {
                setPicture(0);
            } else {
                setPicture(picture + 1);
            }
        }
    }

    return (
        <div 
            className={className === "housing" ? "banner housing" : "banner"}
        >
            <img 
                className={"banner-img " + className}
                src={className === "housing" ? slides[picture] : src}
                alt="Landscape photo"
            />
            {arrowLeft}
            {arrowRight}
            {pageNumber}
            {typeof title !== "undefined" ? <h1 className="banner-title">{title}</h1> : null} 
        </div>
    );
}
