import { BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import { useSelector } from "react-redux";
import Routes from './Routes';

function App() {

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <Router>
        <div className="grid-container">
          <header className="row">
            <div>
              <Link className="brand" to="/">amazona</Link>
            </div>
            <div>
              <Link to="/cart">
                Carts
                {
                  cartItems.length > 0 && (
                    <span className="badge">{cartItems.length}</span>
                  )
                }
              </Link>
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
