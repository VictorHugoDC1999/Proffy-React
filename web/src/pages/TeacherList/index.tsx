import React from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css';


function TeacherList() {
    return (/*na linha 9 em to colocamos barra, pois queremos que ele retorne a pagina inicial*/
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis."/>
        </div>
    );/*PageHeader dentro da div é um componente, com suas propriedades. Temos que declarar as propriedades*/
}

export default TeacherList;