import classes from './Card.module.scss';

const Card: React.FC<{id: string, className?: string }> = (props) => {
  return <div id={props.id}
      className={`${classes.card} ${props.className ?? ''} p-3 `}>
        <div className="inversed-bg rounded-lg shadow-md p-9">
          {props.children}
        </div>
  </div>
}

export default Card;