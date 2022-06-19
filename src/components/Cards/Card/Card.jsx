import "./Card.scss"

const Card = (props) => {
  return (
    <div className="card">
      <div className="card__header">Сказочное заморское яство</div>
      <div className="card__content">
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
      <div className="card__buy">Чего сидишь? Порадуй котэ, купи.</div>
    </div>
  )
}
export default Card