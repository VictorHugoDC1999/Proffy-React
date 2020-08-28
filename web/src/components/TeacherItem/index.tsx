import React from 'react';

import imgPhoto from '../../assets/images/imgphoto.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src={imgPhoto} alt="Victor Hugo"/>
                <div>
                    <strong>Victor Hugo</strong>
                    <span>Química</span>
                </div>
            </header>
            
            <p>
            Entusiasta das melhores tecnologias de química avançada.
            <br />v5268089
            
            <br />
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões. 
            </p>
            
            <footer>
                <p>
                    Preco/hora
                    <strong>R$ 60,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;