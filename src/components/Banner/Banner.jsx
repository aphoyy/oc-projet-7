import './Banner.scss';

export function Banner({ className, title, src }) {
    if (className === "home" || className === "about" ) {
        src = "src/assets/" + src;
    }

    let arrowLeft;
    let arrowRight;
    if (className === "housing") {
        arrowLeft = <img src="/src/assets/arrow-left.png" className="arrow-left arrow" />
        arrowRight = <img src="/src/assets/arrow-right.png" className="arrow-right arrow" />
    }

    return (
        <div 
            className={className === "housing" ? "banner housing" : "banner"}
        >
            <img 
                className={"banner-img " + className}
                src={src}
                alt="Landscape photo"
            />
            {arrowLeft}
            {arrowRight}
            {typeof title !== "undefined" ? <h1>{title}</h1> : null} 
        </div>
    );
}
