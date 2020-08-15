import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';
/*componentes são funções que retornam HTML e propriedades são uma forma de nos conseguirmos passar informações para nosso componente. No react a forma mais facil que temos para declarar as tipagens das propriedades e da forma que segue abaixo(em const PageHeader..). Agora (interface) estamos falando que o componente PageHeader pode receber uma propriedade title, que é uma string e que ela vai ser obrigatoria (uma tipagem)*/

interface PageHeaderProps {/*caso a propriedade title não precisasse ser obrigatoria era só fazer fda seguinte maneira title?: string;*/
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {/*aqui estamos falando que o meu PageHeader é do tipo React Function Component e ele recebe um parametro que é a nossa PageHeaderProps*/
    return (
    <header className="page-header">
        <div className="top-bar-container">
            <Link to="/">
                <img src={backIcon} alt="Voltar" />
            </Link>
            <img src={logoImg} alt="Proffy" />
        </div>
        
        <div className="header-content">
            <strong>{props.title}</strong>
            
            {props.children}
        </div>

        
    </header>
    );
}

export default PageHeader;