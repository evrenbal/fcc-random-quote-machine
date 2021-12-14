import { useState, useEffect } from 'react';
import classes from './SingleQuote.module.scss';
import Card from '../UI/Card';
import {QuoteType} from 'data/quotes-data';
import useStore from 'hooks/use-store';

type TSingleQuote = React.FC<{
  quote : QuoteType,
  hideIndex?: boolean,
  className?: string,
  fullSize?: boolean,
  onRefreshQuote?: React.MouseEventHandler<HTMLButtonElement>
  onPrevQuote?: React.MouseEventHandler<HTMLButtonElement>
  onNextQuote?: React.MouseEventHandler<HTMLButtonElement>
}>

/* First variable is just for FreeCodeCamp Tests */
const SingleQuote : TSingleQuote  = (props) => {

  const quoteIndex = props.quote.no ? props.quote.no - 1 : -1;
  const [favState,favDispatch] = useStore("favorites", false);
  const [isFavorite, setFavorite] = useState( favState.includes(quoteIndex) );

  useEffect( () => {
    setFavorite(favState.includes(quoteIndex))
  },[favState])

  // To comply with FCC User Story requirements
  const id = props.hideIndex ? '' : props.quote.no;

  const toggleFav: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (isFavorite) {
      favDispatch('REMOVE', quoteIndex )
    } else {
      favDispatch('ADD',  quoteIndex )
    }
    setFavorite(!isFavorite);
  };

  return <Card id={`quote-box${id}`} 
    className={`relative ${props.className ?? ''} ${props.fullSize ? 'w-full '+classes.large : ''} `}>
    {
      props.onPrevQuote && 
        <button className={`inversed-bg rounded-full md:shadow-md ${classes['prev-button']}`}
        id={`next-quote${id}`}
        onClick={props.onPrevQuote}>
          <i className="fa fa-angle-double-left"></i>
        </button>
    }
    {
      props.onNextQuote && 
      <button className={`inversed-bg rounded-full md:shadow-md ${classes['next-button']}`}
      id={`prev-quote${id}`}
        onClick={props.onNextQuote}>
          <i className="fa fa-angle-double-right"></i>
        </button>
    }
    <blockquote cite="url" className={`mt-0 ${classes.quote}`}>
      <p id={`text${id}`}>
        <i className="fa fa-quote-left mr-5"></i>
        { props.quote.text }
        </p>
      <cite id={`author${id}`}>{ props.quote.author ? props.quote.author : 'Uknown Author' }</cite>
    </blockquote>
    { quoteIndex >=0  &&
    <footer className="flex justify-between">
      <span className={`rounded-l-lg ${classes['quote-index']}`}>Quote #{props.quote.no}</span>

      <div className={classes['share-links']}>
        <button id={`favorite-quote${id}`}
          className={classes.favorite +' '+(isFavorite ? classes.favorited : '')}
          title="Add to your favorites!"
          onClick={toggleFav}
          >
            <i className="fa fa-heart"></i>
        </button>
        <a id={`tweet-quote${id}`}
          title="Tweet this quote!"
          href={`https://twitter.com/intent/tweet?hashtags=quotes&text=${encodeURIComponent('"'+props.quote.text +'"'+ props.quote.author)}`}
          rel="noreferrer noopener"
          target="_blank"
          >
            <i className="fa fa-twitter"></i>
        </a>
      </div>
      {
        props.onRefreshQuote && 
        <div className={classes.buttons}>
          <button className="site-bg rounded-lg shadow-md ml-2"
          id={`new-quote${id}`}
          onClick={props.onRefreshQuote}>
            Random
          </button>
        </div>      
      }
    </footer>
    }
  </Card>
}

export default SingleQuote;