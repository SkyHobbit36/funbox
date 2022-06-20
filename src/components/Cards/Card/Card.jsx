/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './Card.scss';
import catImage from '../../../assets/cat.jpg';

const Card = (props) => {
  const {
    title, titleAdd, composition, portionCount, portionText,
    mouseCount, mouseText, weight, textAdd
  } = props;
  const disabled = props.disabled === 'true';

  const [active, setActive] = useState(false);
  const [leave, setLeave] = useState(false);

  const toggleActive = () => {
    if (!disabled) {
      setActive(!active);
    }
  };
  const mouseEnter = () => {
    if (!disabled) {
      setLeave(false);
    }
  };
  const mouseLeave = () => {
    if (!disabled) {
      setLeave(true);
    }
  };

  const createBuyText = () => {
    if (disabled) {
      return <span className="card__buy--disable">Печалька, {titleAdd} закончился.</span>;
    }
    if (active) {
      return composition;
    }
    return <>
        Чего сидишь ? Порадуй котэ,
        <button
          className="card__botton-buy"
          onClick={toggleActive}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        >купи</button>.
      </>;
  };

  return (
    <div className={`card ${active ? 'card--active' : ''} ${leave ? 'card--leave' : ''} ${disabled ? 'card--disable' : ''}`}>
      <div
        className="card__content"
        onClick={toggleActive}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        <header className="card__header">
          {active && leave
            ? <p className="card__header-text">Котэ не одобряет?</p>
            : <p className="card__header-text">Сказочное заморское яство</p>}
        </header>

        <div className="card__main">
          <div className="card__properties">
            <h2 className="card__title">
              {title}<br />
              <span className="card__title--little">{titleAdd}</span>
            </h2>
            <p className="card__text"><b>{portionCount + ' '}</b>{portionText}</p>
            <p className="card__text"><b>{mouseCount + ' '}</b>{mouseText}</p>
            {textAdd && <p className="card__text">{textAdd}</p>}
          </div>
          <img className="card__image" src={catImage} alt="Голодный и злой кот" />
        </div>

        <div className="card__weight">
          <span className="card__weight--count">{weight}</span>
          <br />
          кг
        </div>
      </div>
      <div className="card__buy">
        {
          createBuyText()
        }
      </div>
    </div>
  );
};
export default Card;
