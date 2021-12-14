import SingleQuote from 'components/quotes/SingleQuote';

import useQuote from 'hooks/use-quote';
import useStore from 'hooks/use-store';
import ContentContainer from 'components/layout/ContentContainer';

const Favorites: React.FC = (props) => {
  const { getSomeQuotes } = useQuote()
  const favState = useStore("favorites", true)[0];

  if (favState.length === 0)
  {
    return <div className="w-full md:w-3/4 mx-auto h-full items-center flex">        
      <SingleQuote 
          quote={ { no: 0, text: "You don't have any favorites on your list!", author: "The Error Man!"}}
          fullSize={true}
      />
    </div>
  }
  
  return (
    <ContentContainer height="100%">
      <div className="w-full md:w-3/4 mx-auto h-full items-center flex flex-wrap">
        {
          getSomeQuotes(favState).map( (quote, index) => {
          return <SingleQuote
            quote={quote}
            key={`quote${index}`}
            className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-full"/>
          })
        }
    </div>
    </ContentContainer>
  );
};

export default Favorites;
