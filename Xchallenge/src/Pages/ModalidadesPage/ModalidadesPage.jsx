import React from 'react';
import { Select } from '../../Components/FormComponents/FormComponents';
import Pesquisapng from '../../Assets/Icons/Pesquisa.png'
import Main from '../../Components/Main/Main';
import Container from '../../Components/Container/Container';
import TableMo from './TableMo/TableMo';


const ModalidadesPage = () => {
    return (
        <>
        <Main>
            <Container>
            <div className='modalidadePage'>
                <div className="select__item">
                    <p>Modalidade:</p>
                <Select
                    additionalClass='select-modalidade'
                />
                </div>
                
            </div>

            <TableMo
            
            />

            </Container>
        </Main>
        </>
    );
};

export default ModalidadesPage;