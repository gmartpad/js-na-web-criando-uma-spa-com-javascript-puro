import inicializaCadastro from './componentes/cadastro/componente-cadastro';

const rotas = {
    "/cadastro": inicializaCadastro
}

const rootDiv = document.querySelector('[data-container]');

const navegacao = pathname => {
    window.history.pushState({}, pathname, window.location.origin + pathname);

    rootDiv.innerHTML = "";

    const iniciarRota = rotas[window.location.pathname];

    rootDiv.appendChild(iniciarRota());
}

export { navegacao };