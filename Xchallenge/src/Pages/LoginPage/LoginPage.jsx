import React from 'react';
import "./LoginPage.css";
import { Button, Input, Label } from '../../Components/FormComponents/FormComponents';
import Container from '../../Components/Container/Container';
import WorldConnect from '../../Assets/Icons/worldConnect.png'

const LoginPage = () => {
    return (
        <>
        <section className='formLogin'>
        <Container>
            <div className="form-flex">

            <img className='imgLogin' src={WorldConnect} alt="" />

            <form action="" className='loginForm'>
                <div className="formulario">

                </div>
                <p>Digite seus dados de acesso no campo abaixo.</p>
                <Label 
                labelText="Email"
                />
                <Input 
                placeholder="Digite seu e-mail"
                additionalClass='inputLogin'
                />
                <Label
                labelText="Senha"
                />
                <Input
                additionalClass='inputLogin'
                placeholder="Digite sua senha"
                />

                <Button 
                textButton="Logar"
                additionalClass="btnLogin"
                />
            </form>
            </div>

        </Container>
        </section>
        </>
    );
};

export default LoginPage;