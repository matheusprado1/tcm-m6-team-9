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
            <button>Cadastrar</button>
        </LoginRegisterStyled>)
    )
}