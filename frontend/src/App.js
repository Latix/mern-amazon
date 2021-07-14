import { BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import Routes from './Routes';
import { signout } from './actions/userActions';

function App() {

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();
  const signOutHandler = () => {
    dispatch(signout());
  }
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
              {
                userInfo ? (
                  <div className="dropdown">
                    <Link to="#">{userInfo.name} <i className="fa fa-caret-down"></i></Link>
                    <ul className="dropdown-content">
                      <Link to="#signout" onClick={signOutHandler}>Sign Out</Link>
                    </ul>
                  </div>
                ) : (
                  <Link to="/signin">Sign In</Link>
                )
              }
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
