import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.scss';
import configureQuotesStore from 'store/quotes-store';
import configureFavoritesStore from 'store/favorites-store';
import configureThemeStore from 'store/theme-store';

configureQuotesStore();
const localFavorites = window.localStorage.getItem('favorites');
configureFavoritesStore( localFavorites ? JSON.parse(localFavorites) : [] )
const localTheme = window.localStorage.getItem('theme');
configureThemeStore( localTheme ? JSON.parse(localTheme) : { theme:6, variant:40 } )

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>    
      <App />
    </HashRouter>  
  </React.StrictMode>,
  document.getElementById('root')
);