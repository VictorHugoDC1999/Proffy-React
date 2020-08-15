import React from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css';
import TeacherItem from '../../components/TeacherItem';


function TeacherList() {
    return (/*na linha 9 em to colocamos barra, pois queremos que ele retorne a pagina inicial*/
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" id="subject" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="subject" />
                    </div>
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    );/*PageHeader dentro da div é um componente, com suas propriedades. Temos que declarar e adicionar tipagens para as propriedades. No react a forma mais facil que temos para declarar as tipagens das propriedades e da forma que segue na pasta PageHeader(index.tsx)*/
}

export default TeacherList;