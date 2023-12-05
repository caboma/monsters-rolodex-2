import Card from '../card/card';
import './card-list-style.css';

const CardList = ({ monsters }) => {

  return (
    <div className='card-list'>
      {
        monsters.map((monster) => {

          return (
            <Card monsters={monster} />
          )

        })
      }
    </div>
  )
}

export default CardList