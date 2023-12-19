import React from 'react';
import "./Header.css"
import Main from '../Main/Main';
import Container from '../Container/Container';
import Logo from '../../Assets/Images/logoWorldSkills.png'

const Header = () => {
    return (
        <>
                <div className='header'>
                    <Container>
                        <header className='header-flex'>
                            <img className='logo' src={Logo} alt="" />
                            <button className='btn-login'>Login</button>
                        </header>
                    </Container>
                </div>
        </>
    );
};

export default Header;