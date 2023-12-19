import React from 'react';
import "./HomePage.css";
import Main from '../../Components/Main/Main';
import Container from '../../Components/Container/Container';
import WordConnect from '../../Assets/Icons/worldConnect.png'
import { Button } from '../../Components/FormComponents/FormComponents';
import BackGroundCarrosel1 from '../../Assets/CarroselImage/background1.jpg'
import BackGroundCarrosel2 from '../../Assets/CarroselImage/background2.jpg'
import BackGroundCarrosel3 from '../../Assets/CarroselImage/background3.jpg'
import { Navigation, Pagination } from 'swiper/modules';
import bootstrap from 'bootstrap'

import CardNoticias from '../../Components/CardNoticias/CardNoticias';
import TableMarca from './TableMarcas/TableMarca';


const HomePage = () => {

    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>

            <Main>
                <section className='containerCarrosel'>

                <div id="carouselExampleFade" class="carousel slide carousel-fade containerCarrosel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={BackGroundCarrosel1} class="d-block w-100 carroselAdicional " alt="" />
                        </div>
                        <div class="carousel-item">
                            <img src={BackGroundCarrosel2} class="d-block w-100 carroselAdicional" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={BackGroundCarrosel3} class="d-block w-100 carroselAdicional" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                </section>
                <Container>
           <div className="containerCard-flex">

<CardNoticias
titleCard="Noticas"
dateCard="15/12/2006"
/>
<CardNoticias
titleCard="Noticas"
dateCard="15/12/2006"
/>
<CardNoticias
titleCard="Noticas"
dateCard="15/12/2006"
/>
<CardNoticias
titleCard="Noticas"
dateCard="15/12/2006"
/>
<CardNoticias
titleCard="Noticas"
dateCard="15/12/2006"
/>
           </div>

<TableMarca/>
                </Container>
            </Main>

            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>

        </>

    );
};

export default HomePage;