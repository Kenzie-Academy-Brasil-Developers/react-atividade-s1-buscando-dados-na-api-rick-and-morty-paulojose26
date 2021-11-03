import './App.css';

import Characters from './components/Characters';

import { useState, useEffect} from "react";

function App() {
  const [ characterList, setCharacterList ] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then(response => response.json())
      .then(response => {
        setCharacterList(response.results);
      }).catch(err => console.log(err));
  }, []);

  return (
    <>
      <main className="App">
        <Characters characterList={ characterList } />
      </main>
    </>
  );
}

export default App;
