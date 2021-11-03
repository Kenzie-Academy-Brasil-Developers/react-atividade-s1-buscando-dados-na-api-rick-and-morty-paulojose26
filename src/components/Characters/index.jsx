import "./style.css";

import CharCard from "../CharCard";

const Characters = ( { characterList } ) => {
    return(
        <section className="Characters">
            <h1 className="Characters--title">Meus personagens</h1>
            <article className="Characters--list">
                { characterList.map(char => (
                    <CharCard char={ char } />
                )) }
            </article>
        </section>
    );
}

export default Characters;