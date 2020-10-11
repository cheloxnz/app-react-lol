/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Champions from './Champions';
import './App.css';


function App() {
  const [champions, setChampions] = useState([]);
  const [search, setSearch] = useState('');



  useEffect(() => {
    axios
      .get('https://api-lol.herokuapp.com/api/champions/')
      .then(res => {
        setChampions(res.data)
        console.log(res.data)
      }).catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredChampions = champions.filter(champion =>
    champion.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className='lol-app'>
      <div className="lol-search">
        <h1 className="lol-text">Search a champions</h1>
        <form>
          <input
            type="text"
            placeholder='Search'
            className="lol-input"
            onChange={handleChange}
          />
        </form>
      </div>
      {filteredChampions.map(champion => {
        return (
          <Champions
            key={champion._id}
            name={champion.name}
            alias={champion.alias}
            image={champion.champion_image}
            region={champion.region}
            role={champion.role}
          // skins={champion.skins.map(skin => {
          //   return (
          //     <ul key={skin.id}>
          //       <li><img src={skin.skins} /></li>
          //     </ul>
          //   )
          // })}
          />
        )
      })}
    </div>
  );
}

export default App;
