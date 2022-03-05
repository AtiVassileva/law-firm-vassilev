import { Switch, Route } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div id="app">
      <NavMenu />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
