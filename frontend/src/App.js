import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <Router>
        <div className="grid-container">
          <header className="row">
            <div>
              <a className="brand" href="/">amazona</a>
            </div>
            <div>
              <a href="/cart">Carts</a>
              <a href="/signin">Sign In</a>
            </div>
          </header>
          <main>
            <Switch>
              <Route path="/product/:id" component={ProductScreen} />
              <Route path="/" component={HomeScreen} exact />
            </Switch>
          </main>
          <footer className="row center">All right reserved</footer>
        </div>
    </Router>
  );
}

export default App;
