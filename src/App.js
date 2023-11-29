import CardList from './components/card-list/card-list';
import SearchField from './components/search-field/search-field';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchField />
      <CardList />

    </div>
  );
}

export default App;
