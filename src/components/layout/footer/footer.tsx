import Widgets from "./widgets";
import Copyright from "./copyright";
import { footer } from "./data";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { AiFillTwitterCircle } from "react-icons/ai";
const { widgets, payment } = footer;

const Footer: React.FC = () => (
  <footer className='bg-black flex w-full p-8'>
    <div className='text-gray-400 flex flex-col w-3/6 items-center justify-center'>
        <button className='btn mb-10'>SOBRE A Re.YOU</button>
      <div>
        <h1>Re.YOU EMPRESA DE TECNOLOGIA</h1>
        <h2>Cnpj: 123456789101112</h2>
        <h3>contanto@reyoushop.com.br</h3>
      </div>
    </div>
    <div className='gap-6 text-gray-400 flex flex-col w-3/6 items-center justify-center'>
      <ul className='flex  flex-col gap-2'>
        <h1>ACESSO RÁPIDO {'>'}</h1>
        <li>  <a href="/">Início</a></li>
        <li>  <a href="/login">Login</a></li>
        <li> <a href="#">Termo de uso</a></li>
        <li> <a href="#">Política de Privacidade</a></li>
        <li><a href="#">Suporte</a></li>
      </ul>
      <div className='text-gray-300 flex gap-6'>
        <div className='facebook'><a href='#'><FaFacebookF size='40' /></a></div>
        <div className='instagram'> <a href="#"><IoLogoInstagram size='40' /></a></div>
        <div className='twitter'><a href="#"><AiFillTwitterCircle size='40' /></a> </div>
      </div>
    </div>
  </footer>
);

export default Footer;
