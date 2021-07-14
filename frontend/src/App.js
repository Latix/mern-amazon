import { BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <Router>
        <div className="grid-container">
          <header className="row">
            <div>
              <Link className="brand" to="/">amazona</Link>
            </div>
            <div>
              <Link to="/cart">Carts</Link>
              <Link to="/signin">Sign In</Link>
            </div>
          </header>
          <main>
            <Switch>
              <Routes />
            </Switch>
          </main>
          <footer className="row center">All right reserved</footer>
        </div>
    </Router>
  );
}

export default App;
