/* External Packages */
import {useEffect, useRef, useState, useCallback} from 'react';
import useStore from 'hooks/use-store';

/* Components */
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import ContentContainer from 'components/layout/ContentContainer';

/* CSS Modules */
import classes from './Layout.module.scss';

const Layout:React.FC = (props) => {
  const theme = useStore("theme", true)[0];
  const headerRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  const [contentHeight, setContentHeight] = useState('0px')
  const [windowSize, setWindowSize] = useState({width: window.innerWidth, height: window.innerHeight})  

  const handleWindowResize = useCallback( () => {
    setWindowSize({width: window.innerWidth, height: window.innerHeight});
  }, []);

  useEffect( () => {
    window.addEventListener("resize", handleWindowResize);  
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    }
  }, [] )

  useEffect( () => {
    let height = windowSize.height;
    height -= headerRef.current?.clientHeight ?? 0;
    height -= footerRef.current?.clientHeight ?? 0;
    setContentHeight(height+'px');
  }, [headerRef, footerRef, windowSize ])

  return (
    <div className={`theme-${theme.theme}${theme.variant>0 ? '-'+theme.variant : ''}`}>
      <div className={`site-bg ${classes.App}`}>
        <Header ref={headerRef}/>
        <div style={{height: contentHeight}}>
          {props.children}
        </div>
        <Footer ref={footerRef}/>
        </div>        
    </div>
  );
}
export default Layout;
