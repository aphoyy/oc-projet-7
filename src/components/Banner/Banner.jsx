import './Banner.scss';

function Banner({ className, title, src,  }) {
    return (
        <div className="banner">
            <img 
                className={className}
                src={"src/assets/" + src}
                alt="Landscape photo"
            />
            {typeof title !== "undefined" ? <h1>{title}</h1> : null} 
        </div>
    );
}

export default Banner;
