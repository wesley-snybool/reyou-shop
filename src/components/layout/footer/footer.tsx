import Widgets from "./widgets";
import Copyright from "./copyright";
import { footer } from "./data";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { AiFillTwitterCircle } from "react-icons/ai";
const { widgets, payment } = footer;

const Footer: React.FC = () => (
  <div className='footer'>
  <footer >
    <button className='btn'>SOBRE A Re.YOU</button>
   <div className='info'>
    <h1>Re.YOU EMPRESA DE TECNOLOGIA</h1>
    <h2>Cnpj:123456789101112</h2>
    <h3>contanto@reyoushop.com.br</h3>
    </div>
    <div className='widget'>
     <ul><h1>ACESSO RÁPIDO >   </h1>
   <li>  <a href="/">Início</a></li>
     
   <li>  <a href="/login">Login</a></li>
    
    <li> <a href="#">Termo de uso</a></li>
     
    <li> <a href="#">Política de Privacidade</a></li>
     
    <li><a href="#">Suporte</a></li>
     </ul>
    </div>
    <div className='redesocial'>
     <div className='facebook'><a href='#'><FaFacebookF size='40'/></a></div>
      <div className='instagram'> <a href="#"><IoLogoInstagram size='40'/></a></div>
      <div className='twitter'><a href="#"><AiFillTwitterCircle size='40'/></a> </div>
    </div>
  </footer>
  </div>
);

export default Footer;
