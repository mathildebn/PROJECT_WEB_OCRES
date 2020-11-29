import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

const Header = ({nom}) => {
  return (
      <header>
        <div className="row">
          <div className="col-md-7 col-sm-7 col-xs-7">
            <h1 id="nomheader"> {nom} </h1>
          </div>
          <div className="col-md-5 col-sm-5 col-xs-5">
            <nav>
              <Link to="/" className="btt1"><button> Widgets </button></Link>
              <Link to="/Form" className="btt2"><button> Formulaire </button></Link>
            </nav>
          </div>
        </div>
      </header>

  )
}
export default Header;

