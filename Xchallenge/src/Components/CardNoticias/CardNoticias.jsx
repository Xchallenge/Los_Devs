import React from 'react';
import "./CardNoticias.css"
const CardNoticias = ({ titleCard, dateCard }) => {
    return (
        <>
            <div className="card-flex">
                <p>{titleCard}</p>
                <p>{dateCard}</p>
            </div>
        </>
    );
};

export default CardNoticias;