import '../Card.scss';
import React from 'react';

const Portion = (...{ portionCount, mouseCount }) => {
  let mouseText = ' мышей в подарок';
  let portionText = ' порций';

  const mouseCountLastDigit = Number(mouseCount[mouseCount.length - 1]);
  if (!mouseCountLastDigit || mouseCountLastDigit === 1) {
    mouseText = ' мышь в подарок';
  } else if (!mouseCountLastDigit > 1 || mouseCountLastDigit < 5) {
    mouseText = ' мыши в подарок';
  }

  const portionCountLastDigit = Number(portionCount[portionCount.length - 1]);
  if (!portionCountLastDigit || portionCountLastDigit === 1) {
    portionText = ' порция';
  } else if (!portionCountLastDigit > 1 || portionCountLastDigit < 5) {
    portionText = ' порции';
  }

  return (
    <>
      <p className="card__text"><b>{portionCount}</b>{portionText}</p>
      <p className="card__text"><b>{mouseCount}</b>{mouseText}</p>
    </>
  );
};
export default Portion;
