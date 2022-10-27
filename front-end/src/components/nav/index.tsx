import { useState } from "react"
import { NavAuth } from "../nav-auth"
import { NavStyled } from "./style"

type NavProps = {
    className: string
}

export function Nav({className}: NavProps): JSX.Element {
    const [isUserLogged, setIsUserLogged] = useState<boolean>(false)
    return (
        <NavStyled>
                <ul className={className}>
                    <li className="li"><a href="#">Carros</a></li>
                    <li className="li"><a href="#">Motos</a></li>
                    <li className="li"><a href="#">Leilão</a></li>
                    <div className="divider"></div>
                    <NavAuth isUserLogged={isUserLogged}/>
                </ul>
            </NavStyled>
    )
}