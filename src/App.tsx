/* External Packages */
import { Route, Routes, Navigate, Link } from 'react-router-dom';

/* Components & Pages */
import Layout       from './components/layout/Layout';
import RandomQuote  from './pages/RandomQuote';
import AllQuotes    from './pages/AllQuotes';
import Favorites  from './pages/Favorites';
import About from './pages/About';
import NotFound from './pages/NotFound';

import 'font-awesome/css/font-awesome.min.css';

function App() {

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Navigate replace to='/randomquote' />} />
        <Route path='/randomquote' element={<RandomQuote />} />
        <Route path='/allquotes' element={<AllQuotes />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/about' element={<About />} />

        {
        /*
        <Quotes height={contentHeight}/>
        */
        }
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
