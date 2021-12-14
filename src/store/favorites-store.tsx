import { configure } from '@testing-library/react';
import { initStore } from 'hooks/use-store';

const configureStore = ( initialState: number[] = []) => {

  const actions = {
        ADD: (state:any, quoteIndex:number) => {
          if (state.includes(quoteIndex))
            return state;
          const newState = [...state, quoteIndex];
          window.localStorage.setItem('favorites', JSON.stringify(newState))
          return newState;
        },
        REMOVE: (state:any, quoteIndex:number) => {
          const newState = state.filter( (item:number) => { return item!==quoteIndex } ); 
          if (newState.length === 0) {
            window.localStorage.removeItem('favorites');
          } else {
            window.localStorage.setItem('favorites', JSON.stringify(newState));
          }
          return newState;
        }
    };

    initStore('favorites', actions, initialState );
};

export default configureStore;