import { useState, useEffect } from 'react';
import './App.css';
import Title from './Components/Title/Title';
import Search from './Components/Search/Search';

function App() {

  let search = ""

  const [characters, setCharacters] = useState([])
  const [inputSearch, setInputSearch] = useState([])

  async function getAllCharacters() {
    let pageRandom = Math.floor(Math.random() * 200)
    const response = await fetch(`https://api.unsplash.com/photos?page=${pageRandom}&per_page=30&client_id=iPDwzFCrPN74Hva39OkxKPUBp-vSWMkQIDtI5Zx-JAw`)
    const characters = await response.json()
    console.log(characters);
    setCharacters(characters)
  }

  function changeInput(e) {
    search = e.target.value;
    setInputSearch(search)
    // setCharacters(characters.filter(x=>x.name.includes(search))) 
  }

  async function changeInputButton(e) {
    if (e.key == "Enter") {
      let pageRandom = Math.floor(Math.random() * 200)
      let newList = await fetch(`https://api.unsplash.com/search/photos?page=${pageRandom}&per_page=10&query=${inputSearch}&client_id=iPDwzFCrPN74Hva39OkxKPUBp-vSWMkQIDtI5Zx-JAw`)
      console.log(newList)
      const newCharacters = await newList.json()
      console.log(newCharacters);
      setCharacters(newCharacters.results)
    }
  }

  async function searchButton(e) {
    let pageRandom = Math.floor(Math.random() * 200)
    let newList = await fetch(`https://api.unsplash.com/search/photos?page=${pageRandom}&per_page=10&query=${inputSearch}&client_id=iPDwzFCrPN74Hva39OkxKPUBp-vSWMkQIDtI5Zx-JAw`)
    console.log(newList)
    const newCharacters = await newList.json()
    console.log(newCharacters);
    setCharacters(newCharacters.results)
  }

  useEffect(() => {
    getAllCharacters()
  }, [])

  return (
    <section className="main">
      <Title />
      <p className="desciption">Search photo in database</p>
      <Search changeInput={changeInput} changeInputButton={changeInputButton} searchButton={searchButton} />
      {/* <input className="input" type="text" onChange={changeInput} onKeyDown={changeInputButton} /> */}
      {/* <button className="inputButton" onClick={changeInputButton}></button> */}
      <section className='grid'>
        {characters.map(character => (
          <div className="grid_image">
            <a href={character.urls.small} download="cute.jpg">
              <img src={character.urls.small} alt={character.name} className="image"
              />
            </a>
          </div>
        ))}

      </section>
    </section>
  );
}

export default App;
