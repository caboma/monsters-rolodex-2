import { useState, useEffect } from 'react'
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-field/search-field';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');

  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => {
        setMonsters(users)
      })
  }, [])
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  const filteredMonster = monsters.filter((monster) => {
    return (
      monster.name.toLocaleLowerCase().includes(searchField)
    );
  })

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>

      <SearchBox
        className='search-box'
        placeholder="Enter monster's name"
        type='search'
        onChangeHandler={onSearchChange} />

      <CardList monsters={filteredMonster} />

    </div>
  );
}

export default App;
