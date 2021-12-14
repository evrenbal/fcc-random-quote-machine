import { useState } from 'react';
import SingleQuote from 'components/quotes/SingleQuote';
import useQuote from 'hooks/use-quote';
import ContentContainer from 'components/layout/ContentContainer';

const AllQuotes: React.FC = (props) => {
  const quotesPerPage = 20;
  const { numberOfQuotes, getQuotes } = useQuote()
  const [ pageOffset, setPageOffset ] = useState(1);

  if (numberOfQuotes === 0)
  {
    return <div className="w-full md:w-3/4 mx-auto h-full items-center flex">        
      <SingleQuote 
          quote={ { no: 0, text: "No quotes available! Why not do contact the developer?", author: "The Error Man!"}}
          fullSize={true}
      />
    </div>
  }
  
  const infiniteScroll = (e: React.UIEvent<HTMLDivElement>) => {
    console.log("scroll");
    const bottom = e.currentTarget.scrollHeight - e.currentTarget.scrollTop === e.currentTarget.clientHeight;
    if (bottom && Math.ceil(numberOfQuotes/quotesPerPage) > pageOffset+1 )
        setPageOffset(pageOffset+1);
  }

  return (
    <ContentContainer height="100%" infiniteScroll={infiniteScroll}>
      <div className="w-full md:w-3/4 mx-auto h-full items-center flex flex-wrap">
        {
          getQuotes(pageOffset,quotesPerPage).map( (quote, index) => {
          return <SingleQuote quote={quote} key={`quote${index}`} className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-full"/>
          })
        }
    </div>
    </ContentContainer>
  );
};

export default AllQuotes;
