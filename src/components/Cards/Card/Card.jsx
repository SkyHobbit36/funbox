import React, { useState } from 'react';
import './Card.scss';

const Card = (props) => {
  const {
    // eslint-disable-next-line react/prop-types
    title, titleAdd, composition, portionCount, portionText, mouseCount, mouseText, weight, textAdd
  } = props;
  const [active, setActive] = useState(false);
  const [leave, setLeave] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };
  const mouseEnter = () => {
    setLeave(false);
  };
  const mouseLeave = () => {
    setLeave(true);
  };

  return (
    <div className={`card ${active ? 'card--active' : ''} ${leave ? 'card--leave' : ''}`}>
      <div
        className="card__header"
        onClick={toggleActive}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >{active && leave ? 'Котэ не одобряет?' : 'Сказочное заморское яство'}</div>
      <div
        className="card__content"
        onClick={toggleActive}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        <h2 className="card__title">
          {title}<br/>
          <span className="card__title--little">{titleAdd}</span>
        </h2>
        <p className="card__text"><b>{portionCount + ' '}</b>{portionText}</p>
        <p className="card__text"><b>{mouseCount + ' '}</b>{mouseText}</p>
        {textAdd && <p className="card__text">{textAdd}</p>}
        <div className="card__weight">
          <span className="card__weight--count">{weight}</span>
          <br />
          кг
        </div>
      </div>
      <div className="card__buy">{
        active ? <>{composition}</>
          : <>
              Чего сидишь? Порадуй котэ,
              <button
                className="card__botton-buy"
                onClick={toggleActive}
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
              >купи</button>.
            </>
      }
      </div>
    </div>
  );
};
export default Card;
