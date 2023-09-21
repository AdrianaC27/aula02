import Logo from "../../Imagens/bem vindo.jpg"
import "./Header.css";
function Header(){
return(
    <header className= "header-menu">
        <img src={Logo} className="img-logo"/>
        <h4>Bem vindo</h4>
    </header>
)




}
export default Header;