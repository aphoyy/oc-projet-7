import './Gallery.scss';
import data from '../../datas/logements.json';
import { useNavigate } from 'react-router-dom';

export function Gallery() {
    const navigate = useNavigate("/housing")
    function handleClick(id) {
        navigate("/housing/" + id, { state: { Housing: id } })
    }

    return (
        <div className="gallery">
            {data.map(({ title, cover, id}, index) => (
                <div key={`card-${index}`} className="card">
                    <img src={cover} alt={title} onClick={() => handleClick(id)} />
                    <h3>{title}</h3>
                </div>
            ))}
        </div>
    );
}
