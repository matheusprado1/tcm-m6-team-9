import logoDark from "../../assets/logo/motors-shop-black.svg"
import openedMenuIcon from "../../assets/opened-menu.svg"
import closedMenuIcon from "../../assets/closed-menu.svg"
import { HeaderStyled } from "./style"
import { useState } from "react"

export function Header(): JSX.Element {
    const [IsMenuOpened, setIsMenuOpened] = useState(false)
    const [menuIcon, setMenuIcon] = useState(closedMenuIcon)

    function toggleMenu(): void {
        setIsMenuOpened(!IsMenuOpened)
        IsMenuOpened ? setMenuIcon(closedMenuIcon) : setMenuIcon(openedMenuIcon)
    }

    return (
        <HeaderStyled>
            <section>
                <a href="#">
                    <img src={logoDark} alt="" />
                </a>
                <button className="btn-menu-icon" onClick={toggleMenu}>
                    <img src={menuIcon} alt="" />
                </button>
            </section>

           <nav className={IsMenuOpened ? 'nav opened' : 'nav'}>
                <ul>
                    <li><a href="#">Carros</a></li>
                    <li><a href="#">Motos</a></li>
                    <li><a href="#">Leilão</a></li>
                    <div className="divider"></div>
                    {/* <li className="nav-internal login__register">
                        <a href="#">Fazer Login</a>
                        <button>Cadastrar</button>
                    </li> */}
                    <li className="nav-internal user__logged">
                        <div className="user-name-abrev">SL</div>                            
                        <nav className="internal-nav">
                            <p>Samuel Leão</p>
                            <ul>
                                <li><a href="#">Editar Perfil</a></li>
                                <li><a href="#">Editar Endereço</a></li>
                                <li><a href="#">Minhas Compras</a></li>
                                <li><a href="#">Sair</a></li>
                            </ul>
                        </nav>                        
                    </li>
                </ul>
            </nav>
        </HeaderStyled>
    )
}