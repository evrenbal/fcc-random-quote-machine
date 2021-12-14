import {useState} from 'react';
import SingleQuote from 'components/quotes/SingleQuote';
import useQuote from 'hooks/use-quote';
import LoadingSpinner from 'components/UI/LoadingSpinner';
import SingleQuoteClasses from 'components/quotes/SingleQuote.module.scss';

const RandomQuote = () => {

  const { numberOfQuotes, getRandomQuote, getQuote } = useQuote()
  const [ quote, setQuote ] = useState(getRandomQuote())

  if (numberOfQuotes === 0)
  {
    return <div className="w-full md:w-3/4 mx-auto h-full items-center flex">        
      <SingleQuote 
          quote={ { no: 0, text: "No quotes available! Why not do contact the developer?", author: "The Error Man!"}}
          fullSize={true}
      />
    </div>
  }
  
  const refreshQuoteHandle: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setQuote(getRandomQuote());
  }

  const prevQuoteHandle: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (quote.no)
      setQuote(getQuote( quote.no-1 ));
  }
  
  const nextQuoteHandle: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (quote.no)
      setQuote(getQuote( quote.no+1 ));
  }  

  return (
    <div className="w-full md:w-3/4 mx-auto h-full items-center flex">
      <SingleQuote
        quote={quote}
        hideIndex={true}
        className={`w-full ${SingleQuoteClasses.large}` }
        onRefreshQuote={refreshQuoteHandle} 
        onPrevQuote={prevQuoteHandle} 
        onNextQuote={nextQuoteHandle}
      />
    </div>
  );


};

export default RandomQuote;
