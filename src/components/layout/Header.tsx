import React, { forwardRef } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.scss';
import ThemeSelector from 'components/UI/ThemeSelector';

const Header = forwardRef( ( props, ref:React.ForwardedRef<HTMLElement>) => {
  
return <header ref={ref} className={classes.header}>
      <div className={classes.logo}>Quote Machine</div> 
      <nav className={classes.nav}>
        <ul className="nav-links">
        <li>
            <NavLink to='/about' className={navData => navData.isActive ? classes.active : '' }>
              About
            </NavLink>            
          </li>
          <li>
            <NavLink to='/randomquote' className={navData => navData.isActive ? classes.active : '' }>
              Random Quote
            </NavLink>            
          </li>
          <li>
            <NavLink to='/allquotes' className={navData => navData.isActive ? classes.active : '' }>
              All Quotes
            </NavLink>            
          </li>
          <li>
            <NavLink to='/favorites' className={navData => navData.isActive ? classes.active : '' }>
              Favorites
            </NavLink>            
          </li>
          <li className="break"></li>          
          <li>
            <ThemeSelector/>
          </li>
        </ul>
      </nav>
  </header>
});

export default Header;