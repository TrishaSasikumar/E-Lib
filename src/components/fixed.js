import React ,{ useContext }from "react";
import '../pages/styles.css';
import { Link ,useLocation} from "react-router-dom";
import { AuthContext } from "./authContext";


const Fixed = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const location = useLocation();
  const isShoppingPage = location.pathname === "/shopping";

    return(
        <div>    
        <nav>
        <div className="navbar-left">
          <div className="logo"><Link to={"/home"}>E-Library</Link></div>
          {isAuthenticated && isShoppingPage && (
        <div className="navbar-left">
            <input type="text" placeholder="Search" className="search-input" />
            <button type="submit" className="search-button">
              <i className="fas fa-search"></i>
            </button>
        </div>)}
        </div>
        <div className="navbar-right">
          <Link to={"/login"} className="icon-link"><i className="fas fa-user"></i></Link>
          {isAuthenticated &&(
            <>
          <Link  to={'/cart'} className="icon-link">
            <i className="fas fa-shopping-cart"></i>
          </Link>
          <Link to={'/shopping'} className="icon-link">
        Shopping
      </Link>
          </>

        )}
        </div>
        
      </nav>

      {children}

      <footer className="fixed-container">
        <p>&copy; 2023 Library Management. All rights reserved.</p>
      </footer>

      </div>

    );
};
export default Fixed;