import './Cards.scss';
import Card from './Card/Card';
import { React } from 'react';

const initialState = [
  {
    disabled: 'false',
    title: 'Нямушка',
    titleAdd: 'с рыбой',
    composition: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    portionCount: '10',
    portionText: 'порций',
    weight: '2',
    mouseCount: '',
    mouseText: 'мышь в подарок',
    textAdd: ''
  },
  {
    disabled: 'true',
    title: 'Нямушка',
    titleAdd: 'с фуа-гра',
    composition: 'Печень утки разварная с артишоками.',
    portionCount: '40',
    portionText: 'порций',
    weight: '0,5',
    mouseCount: '2',
    mouseText: 'мыши в подарок',
    textAdd: ''
  },
  {
    disabled: 'false',
    title: 'Нямушка',
    titleAdd: 'с курой',
    composition: 'Печень утки разварная с артишоками.',
    portionCount: '100',
    portionText: 'порций',
    mouseCount: '5',
    weight: '5',
    mouseText: 'мышей в подарок',
    textAdd: 'заказчик доволен'
  }
];

const Cards = () => {
  return (
    <div className="cards">
      {initialState.map((item, i) => <Card
        disabled={item.disabled}
        title={item.title}
        titleAdd={item.titleAdd}
        composition={item.composition}
        portionCount={item.portionCount}
        portionText={item.portionText}
        mouseCount={item.mouseCount}
        mouseText={item.mouseText}
        weight={item.weight}
        textAdd={item.textAdd}
        key={i}/>)}
    </div>
  );
};

export default Cards;
