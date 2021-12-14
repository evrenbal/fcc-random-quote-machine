import {forwardRef} from 'react';

const Footer = forwardRef( ( props, ref:React.ForwardedRef<HTMLElement>) => {
  return <footer ref={ref}>
  </footer>
});

export default Footer;