import classes from './ThemeSelector.module.scss';
import useStore from 'hooks/use-store';

const ThemeSelector: React.FC = (props) => {

  const dispatch = useStore("theme", false)[1];

  const handleBoxClick = (i:number, j:number = 0) => {
    dispatch('SET',{theme:i, variant:j})
  }

  const themes = [];
  for (let i=1; i <= 6; i++) {
    const colors = []
    for (let j=20; j <= 90; j=j+5) {
      colors.push(
      <li className={`theme-${i}-${j} important`} key={`theme-${i}-${j}`}>
        <button className={`site-bg ${classes['theme-box']}`} onClick={ () => { handleBoxClick(i,j) }}></button>
      </li>
      )
    }
   const box = (
    <div className={classes["box-container"]} key={`boxes-${i}`}>
      <div className={`theme-${i} important`}>
        <button className={`site-bg ${classes['theme-box']}`} onClick={ () => { handleBoxClick(i) }}></button>
      </div>
      <ul>
        { colors }
      </ul>
   </div>
    );
    themes.push(box);
  }
  
  return (
    <div className={`${classes['theme-selector']}`}>
      {themes}
    </div>
  )        

};

export default ThemeSelector;