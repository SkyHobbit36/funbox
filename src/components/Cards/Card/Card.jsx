import { useState } from "react";
import "./Card.scss"

const Card = (props) => {
  const [active, setActive] = useState(false);
  const [leave, setLeave] = useState(false);

  const toggleActive = () => {
    active ? setActive(false) : setActive(true)
  }
  const mouseEnter = () => {
    setLeave(false)
  }
  const mouseLeave = () => {
    setLeave(true)
  }

  return (
    <div className={`card ${active ? 'card--active': ''} ${leave ? 'card--leave' : ''}`}>
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
          Нямушка<br/>
          <span className="card__title--little">с фуа-гра</span>
        </h2>

        <p className="card__text">
          <span className="card__text--portion-count">{props.portion + ' '}</span> 
          порций
        </p>
        <p className="card__text">мышь в подарок</p>
        <div className="card__weight">
          <span className="card__weight--count">{props.weight}</span>
          <br />
          кг
        </div>
      </div>
      <div className="card__buy">Чего сидишь? Порадуй котэ, 
        <button 
          className="card__botton-buy" 
          onClick={toggleActive}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        > купи</button>
      .
      </div>
    </div>
  )
}
export default Card