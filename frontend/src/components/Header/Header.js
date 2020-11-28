import React from 'react';
import './Header.css';

const Header = () => {
  return (
      <header>
        <div className="row">
          <div className="col-md-9 col-sm-9 col-xs-9">
            <h1 id="nomheader"> Dashboard </h1>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-3">
              <button> Widgets </button>
              <button> Formulaire </button>
          </div>
        </div>
      </header>

  )
}
export default Header;

