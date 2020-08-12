import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

function Routes() {/*propriedades no conceito de react são exatamente atributos que a gente passa para uma tag, ou seja, quando a gente passa um atributo para um componente*/
    return (/*em routes na tag path estamos dizendo que para acessar a pagina inicial ele não precisa colocar nada no caminho da pagina(https...), pois é o endereço inicial da nossa tela. Colocamos o atributo exact na primeira linha, para que ele faça uma verificação de igualdade. ou seja, ele só vai mostrar a primeira rota se for examente igual(fizemos isso pois se eu colocar o seguinte caminho: "localhost:3000/study", ele tentara mostrar os dois ao mesmo tempo, isso por que o barra "/" está em todos os caminhos existentes). Na tag component é o componente que ele vai mostrar quando a gente estiver acessando o endereço inicial (que no caso é localhost:3000), então ele vai mostrar o componente landing*/
        <BrowserRouter>
        <Route path="/" exact component={Landing} />
        <Route path="/study" component={TeacherList} />
        <Route path="/give-classes" component={TeacherForm} />
        </BrowserRouter>/*a url study vai ser mostrada quando o usuario clicar em estudar e o mesmo serve para give-classes*/
    )
}

export default Routes;