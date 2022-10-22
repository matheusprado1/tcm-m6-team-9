import logoDark from "../../assets/logo/motors-shop-black.svg"
import openedMenuIcon from "../../assets/opened-menu.svg"
import closedMenuIcon from "../../assets/closed-menu.svg"
import { HeaderStyled } from "./style"
import { useState } from "react"
import { Nav } from "../nav"

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

           <Nav isMenuOpened={IsMenuOpened}/>
        </HeaderStyled>
    )
}