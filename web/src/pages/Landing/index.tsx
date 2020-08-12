import React from 'react';/*aqui estamos criando um componente de react, este componente é separados dos demais componentes. Lembrando que um componente do react é uma função (está função deve sempre comecar com letras maiusculas, pois se começarmos com minusculas ele entende que é uma tag HTML) que retorna um html*/
import { Link } from 'react-router-dom';/*faznedo assim eu consigo com que minha pagina vire uma single-page, ou seja, quando eu mudar de pagina ela não vai carregar (onde quero este efeito eu devo trocar a tag "a" e "href" pela tag link e to, exemplo: link to="...")*/


import logoImg from '../../assets/images/logo.svg';/*no react toda imagem ou algo do tipo temos que inportar ele, sendo assim logoImg passa a ser uma variavel javascript. Não podemos simplesmente colocar o caminho na tag src. Toda vez que a gente quer colocar uma variavel javascript dentro do html coloque dentro de chaves {}*/
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

function Landing(){/*aqui dentro criamos a estrutura da nossa pagina*/
    return (/*quando formos implementar um html aqui dentro do react que tem mais que uma linha pode colocar um parenteses para ficar mais facil de enxergar*/
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>
                
                <img 
                    src={landingImg} 
                    alt="Plataforma de estudos" 
                    className="hero-image"
                />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar aulas"/>
                        Dar aulas
                    </Link>
                </div>

                <span className="total-connections">
                    Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo"/>
                </span>
            </div>
        </div>
    )
}

export default Landing;

