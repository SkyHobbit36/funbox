import './Cards.scss';
import Card from './Card/Card';

// const initialState = [
//   {
//     title: 'Нямушка',
//     titleAdd: 'с фуа-гра',
//   }
// ]

function Cards() {
  return (
    <div className="cards">
      <Card portion="10" weight="0,5" />
      <Card portion="40" weight="2" />
      <Card portion="100" weight="5" />
    </div>
  );
}

export default Cards;
