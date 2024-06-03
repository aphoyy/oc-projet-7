import './Gallery.scss';
import data from '../../datas/logements.json';

function Gallery() {
    return (
        <div className="gallery">
            {data.map(({ title, cover}, index) => (
                <div key={`card-${index}`} className="card">
                    <img src={cover} alt={title} />
                    <h4>{title}</h4>
                </div>
            ))}
        </div>
    );
}

export default Gallery;
