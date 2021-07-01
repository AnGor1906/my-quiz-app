import { Link } from 'react-router-dom';
import './Nav.css'

import React from 'react';

function Nav() {
    return (

      <nav>

        <ul className='nav-links'>
          <Link to ='/'className='forlink'><li>НA ГЛАВНУЮ</li></Link>
          <Link to ='/selectquiz'  className='forlink'><li>ВЫБОР ТЕМЫ ТЕСТА</li></Link>
           <Link to ='/cabinet'  className='forlink'><li>Личный кабинет</li></Link>
          
           
        </ul>
      </nav>
    );
  }

  export default Nav;