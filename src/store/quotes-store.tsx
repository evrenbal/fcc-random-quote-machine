import { initStore } from 'hooks/use-store';
import QuotesData, { QuoteType } from 'data/quotes-data';

const configureStore = () => {

  const initialState = { quoteList : QuotesData.map( (item, index) => {
    item.no = index+1;
    return item;
  })};

  const actions = {
        SET: (state:any, quotes:QuoteType[]) => ( [...state, { quoteList: quotes }]),
    };

    initStore('quotes', actions, initialState );
};

export default configureStore;