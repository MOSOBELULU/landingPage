import { Route, Switch } from 'react-router-dom';
import MainNavigation from './components/layout/MainNavigation';
import Home from './components/Home';
import Menu from './components/Menu';
import Shop from './components/Shop';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
      <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/menu'>
          <Menu />
        </Route>
        <Route path='/shop'>
          <Shop />
        </Route>
        <Route path=' /gallery'>
          <Gallery />
        </Route>
        <Route path='/gallery'>
          <Gallery />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
