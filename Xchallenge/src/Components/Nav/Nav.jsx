import React from 'react';
import "./Nav.css"
import { Link } from 'react-router-dom';
import Logo from '../../Assets/Images/logoWorldSkills.png'
import {Button} from '../FormComponents/FormComponents'
const Nav = () => {
    return (
        <nav className='navbar'>
            <Link to="/" className='worldlogo'>
                <img
                    className="worldlogo__image"
                    src={Logo}
                    alt="Logo WorldSkills" />
            </Link>

            <div className="nav__items">
                <Link to="/" className='nav__item'>
                    <p>  Skills</p>
             
                </Link>
                
                <div  className='nav__item nav__item-checkbox' >
                    <input type="checkbox" name="Dark" id="" />
                    <p>Dark</p>
                </div>
                <Link to="/login" className='nav__item'>
                  <Button
                  textButton="Login"
                  additionalClass="btn-Header"
                  
                  />
                </Link>
            </div>
        </nav>
    );
};

export default Nav;