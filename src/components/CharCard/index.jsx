import "./style.css";

const CharCard = ({ char }) => {
    return (
        <div key={ char.id } className={`CharCard ${ char.status }`}>
            <h3 className="CharCard--name">{ char.name.length < 15 ? char.name : `${char.name.slice(0, 15)}...` }</h3>
            <figure className="CharCard--photo">
                <img src={ char.image } alt={ char.name } />
            </figure>
        </div>
    );
}

export default CharCard;