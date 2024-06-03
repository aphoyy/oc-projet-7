import './Banner.scss';

function Banner({ title, src, brightness }) {
    return (
        <div className="banner">
            <img 
                src={"src/assets/" + src}
                alt="Landscape photo"
                className={brightness}
            />
            {typeof title !== "undefined" ? <h1>{title}</h1> : null} 
        </div>
    );
}

export default Banner;
