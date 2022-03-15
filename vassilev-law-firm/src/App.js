import { Switch, Route } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Practice from './components/Practice/Practice';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="wrapper">
      <ScrollToTop>
        <NavMenu />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/practice" component={Practice} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </ScrollToTop>
    </div>
  );
}

export default App;
