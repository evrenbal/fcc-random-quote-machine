import { initStore } from 'hooks/use-store';

const configureStore = ( initialState: number[] = []) => {

  const actions = {
        SET: (state:any, action: { theme:number, variant:number} ) => {
          const newState = {theme: action.theme, variant: action.variant }
          window.localStorage.setItem('theme', JSON.stringify(newState))
          return newState;
        },
    };

    initStore('theme', actions, initialState );
};

export default configureStore;