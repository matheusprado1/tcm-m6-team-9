import { styleGuide } from "../../styles/styleGuide"
import Button from "../button"
import { LoginRegisterStyled, UserLoggedStyled } from "./style"

type NavAuthProps = {
    isUserLogged: boolean
}

export function NavAuth({isUserLogged}: NavAuthProps): JSX.Element {
    return (
        isUserLogged ? 
        (<UserLoggedStyled>
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
        </UserLoggedStyled>)
        : 
        (<LoginRegisterStyled>
            <a href="#">Fazer Login</a>
            <Button
                text="Cadastrar"
                size="big"
                textColor={styleGuide.color.greyScale.grey0}
                bgColor={styleGuide.color.greyScale.grey10}
                borderColor={styleGuide.color.greyScale.grey4}
                hoverTextColor={styleGuide.color.greyScale.whiteFixed}
                hoverBgColor={styleGuide.color.greyScale.grey0}
                hoverBorderColor={styleGuide.color.greyScale.grey0}
                onClick={()=>console.log('Cadastrar')}/>
        </LoginRegisterStyled>)
    )
}