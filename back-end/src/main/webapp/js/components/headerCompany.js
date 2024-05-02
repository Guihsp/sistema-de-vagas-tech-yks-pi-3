import ('../menu.js');

function createHeader() {
    const header = document.createElement('header');
    header.innerHTML = `
    <div class="container">
        <nav>
            <img src="./assets/logo.svg" alt="logo">

            <ul class="nav-list">
                
                <li>
                    <a href="#" class="nav-link btn-perfil">
                        <img src="./assets/profile.svg" alt="">
                        Canes
                    </a>
                </li>

                <li>
                    <button id="btn-menu">
                        <span id="hamburger"></span>
                    </button>
                </li>

                <li>
                    <ul class="dropdown">
                        <li>
                            <a href="#" class="nav-link">
                                <img src="./assets/profile.svg" alt="">
                                <span>Perfil da Empresa</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link">
                                <img src="./assets/add.svg" alt="adiciona">
                                <span>Criar Vaga</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link">
                                <img src="./assets/list.svg" alt="lista">
                                <span>Ver Vagas</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link">
                                <img src="./assets/logout.svg" alt="logout">
                                <span>Sair</span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>

        </nav>
    </div>
    `;

    return header;
}

const headerElement = createHeader();
document.querySelector('header').appendChild(headerElement);