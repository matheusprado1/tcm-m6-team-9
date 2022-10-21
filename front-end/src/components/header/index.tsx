import logoDark from "../../assets/logo/motors-shop-black.svg"
import openedMenuIcon from "../../assets/opened-menu.svg"
import closedMenuIcon from "../../assets/closed-menu.svg"
import { HeaderStyled, NavStyled } from "./style"
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
                <img src={logoDark} alt="logo do site" />
                <img className="menu-icon" src={menuIcon} alt="" onClick={toggleMenu}/>
            </section>

           { IsMenuOpened && <NavStyled>
                <ul>
                    <li><a href="#">Carros</a></li>
                    <li><a href="#">Motos</a></li>
                    <li><a href="#">Leilão</a></li>
                </ul>
                <div></div>
                <ul>
                    <li><a href="#">Fazer Login</a></li>
                    <li><button>Cadastrar</button></li>
                </ul>
            </NavStyled>}
        </HeaderStyled>
    )
}