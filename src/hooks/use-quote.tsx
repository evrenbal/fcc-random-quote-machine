/* External Packages */
import { useEffect, useCallback} from 'react';

/* Hooks */
import useHttp from 'hooks/use-http';
import useStore from 'hooks/use-store';

/* Data */
import { QuoteType } from 'data/quotes-data';

const useQuote = ( fetchData:boolean = false) => {

  const [state,dispatch] = useStore("quotes");
  const quoteList = state.quoteList;
  const { response, request, clear} = useHttp();  

  useEffect( () => {
    if ( fetchData ) {
      clear();
      request( { url: 'https://type.fit/api/quotes' , responseType: 'json'} );
    }
  }, [ request, clear, fetchData ]);

  useEffect( () => {
      if (response.data && ! (state.quotes.quoteList.length === 0) ) {
        dispatch( 'SETQUOTES', response.data.map( ( item:QuoteType ) => {return item }) );
      }
  }, [response.data, state.quoteList, dispatch] );  

  const getRandomQuote: () => QuoteType = useCallback( () => {
    const randomQuoteIndex = Math.ceil(( Math.random() * quoteList.length ));
    let quote = quoteList[randomQuoteIndex];
    quote.no = randomQuoteIndex+1;
    return quote;
  }, [quoteList] );

  const getQuote: (index:number) => QuoteType = useCallback( (index) => {
    if (index<0)
      index=quoteList.length;
    if (index > quoteList.length)
      index = 0;
    let quote = quoteList[index];
    quote.no = index;
    return quote;
  }, [quoteList] );

  const getQuotes: ( lastPage: number, quotesPerPage:number ) => QuoteType[] = useCallback ( (lastPage = 0, quotesPerPage = 20) => {
      return quoteList.slice(0, lastPage*quotesPerPage) ;
  }, [quoteList]);

  const getSomeQuotes = useCallback( (indexes:number[]) => {
    const quotes:QuoteType[] = [];
    for (let index of indexes)
    {
      quotes.push(quoteList[index]);
    }
    return quotes;
  }, [quoteList] );  


  return {
    numberOfQuotes : quoteList.length,
    getRandomQuote: getRandomQuote,
    getQuotes: getQuotes,
    getSomeQuotes : getSomeQuotes,
    getQuote: getQuote,
  }
 
}

export default useQuote;