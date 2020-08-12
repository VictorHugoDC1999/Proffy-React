import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

/*componentes são funções que retornam HTML e propriedades são uma forma de nos conseguirmos passar informações para nosso componente*/

function PageHeader() {
    return (
    <header className="page-header">
        <div className="top-bar-container">
            <Link to="/">
                <img src={backIcon} alt="Voltar" />
            </Link>
            <img src={logoImg} alt="Proffy" />
        </div>
        
        <div className="header-content">
            <strong>Estes são os proffys disponíveis.</strong>
        </div>
    </header>
    );
}

export default PageHeader;