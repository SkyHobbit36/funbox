/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './Card.scss';

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
    console.log(titleAdd);
    if (disabled) {
      return <span className="card__buy--disable">Печалька, {titleAdd} закончился.</span>
    }
    if (active) {
      return composition
    } else {
      return <>
        Чего сидишь ? Порадуй котэ,
        <button
          className="card__botton-buy"
          onClick={toggleActive}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        >купи</button>.
      </>
    }
  }

  return (
    <div className={`card ${active ? 'card--active' : ''} ${leave ? 'card--leave' : ''} ${disabled ? 'card--disable' : ''}`}>
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
      <div className="card__buy">
        {
          createBuyText()
        }
      </div>
    </div>
  );
};
export default Card;
