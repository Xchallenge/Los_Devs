import React from 'react';
import "./ResultsPage.css";
import TableRe from './TableRe/TableRe';
<<<<<<< HEAD
import { Select } from '../../Components/FormComponents/FormComponents';
import Container from "../../Components/Container/Container"
import Main from "../../Components/Main/Main"

const ResultsPage = () => {
    return (
        <>
            <Main>
                <Container>
                    <section className='resultpage'>

                    <div className="select-flex">
                        <div className='select__item'>
                            <p>Edição</p>
                            <Select 
                            additionalClass='select-result'
                            />
                        </div>
                        <div className='select__item'>
                            <p>País</p>
                            <Select 
                             additionalClass='select-result'
                            />
                        </div>
                        <div className='select__item'>
                            <p>Modalidade</p>
                            <Select
                             additionalClass='select-result'
                            />
                        </div>

                    </div>
                    <TableRe/>
                    </section>

                </Container>
            </Main>
        </>


=======

const ResultsPage = () => {
    return (
        <div>
            <TableRe
            
                
            
            />
        </div>
>>>>>>> 97c669d8d3d3940887306795e02c124d1f71d5d1
    );
};

export default ResultsPage;