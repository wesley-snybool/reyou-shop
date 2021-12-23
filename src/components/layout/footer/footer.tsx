import Widgets from "./widgets";
import Copyright from "./copyright";
import { footer } from "./data";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { AiFillTwitterCircle } from "react-icons/ai";
import { useAppSelector } from "src/redux/hooks/selectors";
import { useRouter } from "next/router";

const Footer: React.FC = () => {

  const history = useRouter();
  const dataCompany: any = useAppSelector((state) => state.getConfig.data)
  console.log(dataCompany, 'ocnifg aqui')
  
  return (
    <footer className='bg-black flex w-full p-8'>
      <div className='text-gray-400 flex flex-col w-3/6 items-center justify-center'>
        <button onClick={() => history.push('/sobre-nos')} className='btn mb-10'>SOBRE A Re.YOU</button>
        <div>
          <h1 className='text-gray-400' >{dataCompany?.companyName}</h1>
          <h2 className='text-gray-400'>{dataCompany?.cnpj}</h2>
          <h3 className='text-gray-400'>{dataCompany?.contactEmail}</h3>
        </div>
      </div>
      <div className='gap-6 text-gray-400 flex flex-col w-3/6 items-center justify-center'>
        <ul className='flex  flex-col gap-2'>
          <h1 className='text-gray-400'>ACESSO RÁPIDO {'>'}</h1>
          <li className='text-gray-400'>  <a href="/">Início</a></li>
          <li className='text-gray-400'>  <a href="/login">Login</a></li>
          <li className='text-gray-400'> <a href="#">Termo de uso</a></li>
          <li className='text-gray-400'> <a href="#">Política de Privacidade</a></li>
          <li className='text-gray-400'><a href="#">Suporte</a></li>
        </ul>
        <div className='redesocial flex gap-6'>
          <FaFacebookF size='40' color='white' />
          <IoLogoInstagram color='white' size='40' />
          <AiFillTwitterCircle color='white' size='40' />
        </div>
      </div>
    </footer>
  )
}

export default Footer;
