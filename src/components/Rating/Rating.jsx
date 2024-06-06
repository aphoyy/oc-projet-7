import './Rating.scss';

export function Rating({ itemRating }) {
    let rating = [];
    for (let i = 1; i <= 5; i++) {
        if (i > itemRating) {
            rating.push(
                <img
                    key={"rating" + i}
                    src="/src/assets/star-inactive.png"
                    alt="Empty star"
                    className="star-inactive"
                />)
        } else {
            rating.push(
                <img
                    key={"rating" + i}
                    src="/src/assets/star-active.png"
                    alt="Colored star"
                    className="star-active"
                />)
        }
    }
    return (<div className="rating">{rating}</div>)
}
