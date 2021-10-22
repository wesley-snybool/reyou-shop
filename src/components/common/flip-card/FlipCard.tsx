import impactosocial from '../../../../public/assets/images/flip-card/impactosocial.jpeg';
import consumomoderno from'../../../../public/assets/images/flip-card/consumomoderno.jpeg';
import eticaanimal from'../../../../public/assets/images/flip-card/eticaanimal.jpeg';
import impactoambiental from'../../../../public/assets/images/flip-card/impactoambiental.jpeg';
import inovacaoetecnologia from'../../../../public/assets/images/flip-card/inovacaotecnologica.jpeg';
import Image from 'next/image';
function FlipCard() {
  return(
    <div >
      <div className="impactosocial">
  <div className="container">
       <div className="card">
           <div className="front">
           <Image src={impactosocial}
            width={458.86}
            height={180.89}
            />
           </div>
           <div className="back">
           <h3>IMPACTO SOCIAL</h3>
      <div className="form">
     <form className="formleft" action="post">
       <li>
        <input type="checkbox" />
       <label htmlFor="">Trabalho Ético</label>
       </li>
       <li>
         <input type="checkbox" />
       <label htmlFor="">Transparência</label>
       </li>
       <li>
         <input type="checkbox" />
       <label htmlFor="">Produção Local</label>
       </li>
       <li>
       <input type="checkbox" />
       <label htmlFor="">Artesanato</label>
       </li>
       <li>
       <input type="checkbox" />
       <label htmlFor="">Apoio As Comunidades</label>
       </li>
       
       </form>
       <form className='formright' action='post'>
         <li>
         <input type="checkbox" />
         <label htmlFor="">Tamanho Inclusivo</label>
         </li>
       <li>
       <input type="checkbox" />
       <label htmlFor="">Empoderamento Feminino</label>
       </li>
       <li> <input type="checkbox" />
       <label htmlFor="">Pequenos Negocios</label>
       </li>
      <li>
      <input type="checkbox" />
       <label htmlFor="">Empresas com Proprietários Negros</label>
      </li>
     
     </form>
     </div>
    </div> 
           </div>
           </div>
       </div>
       <div className="impactoambiental">
       <div className="container">
       <div className="card">
           <div className="front">
           <Image src={impactoambiental}
       width={348.44}
       height={180.89}
      />
           </div>
           <div className="back">
           <h3>IMPACTO AMBIENTAL</h3>
      <div className="formImp">
     <form className="formleft" action="post">
     <li>
        <input type="checkbox" />
       <label htmlFor="">LIVRE DE TÓXICOS</label>
       </li>
       <li>
         <input type="checkbox" />
       <label htmlFor="">SALVAR OCEANOS</label>
       </li>
       <li>
         <input type="checkbox" />
       <label htmlFor="">APOIO A TRANSIÇÃO CLIMÁTICA</label>
       </li>
       <li>
       <input type="checkbox" />
       <label htmlFor="">RECICLADO</label>
       </li>
       <li>
       <input type="checkbox" />
       <label htmlFor="">PRESERVAÇÃO DAS FLORESTAS</label>
       </li>
       
       </form>
       <form className='formright' action='post'>
         <li>
         <input type="checkbox" />
         <label htmlFor="">EMISSÕES BAIXAS</label>
         </li>
       <li>
       <input type="checkbox" />
       <label htmlFor="">EMBALAGEM ECOLÓGICA</label>
       </li>
       <li> <input type="checkbox" />
       <label htmlFor="">UPCYCLED</label>
       </li>
      <li>
      <input type="checkbox" />
       <label htmlFor="">ECONOMIA DE AGUA</label>
      </li>
      <li>
      <input type="checkbox" />
       <label htmlFor="">NEUTRO EM CARBONO</label>
      </li>
       
     
     </form>
     </div>
    </div> 
           </div>
       </div>
       </div>

       <div className="eticaanimal">
       <div className="container">
       <div className="card">
           <div className="front">
           <Image src={eticaanimal}
       width={174.22}
       height={180.89}
      />
           </div>
           <div className="back">
           <h3>ÉTICA ANIMAL</h3>
      <div className="formET">
     <form className="formleft" action="post">
     <li>
        <input type="checkbox" />
       <label htmlFor="">VEGANO</label>
       </li>
       <li>
         <input type="checkbox" />
       <label htmlFor="">CRUELTY-FREE</label>
       </li>
       <li>
         <input type="checkbox" />
       <label htmlFor="">LÃ RESPONSÁVEL</label>
       </li>
       <li>
       <input type="checkbox" />
       <label htmlFor="">ORIGEM ANIMAL RESPONSAVEL</label>
       </li>
       <li>
       <input type="checkbox" />
       <label htmlFor="">BIODIVERSIDADE</label>
       </li>
       
       </form>
       
     </div>
    </div> 
           </div>
       </div>
       </div>

       <div className="tecnologiaeinovacao">
       <div className="container">
       <div className="card">
           <div className="front">
           <Image src={inovacaoetecnologia}
       width={174.22}
       height={180.89}
      />
           </div>
           <div className="back">
           <h3>INOVAÇÃO E TECNOLOGIA</h3>
      <div className="formIT">
     <form className="formleft" action="post">
     <li>
        <input type="checkbox" />
       <label htmlFor="">MATERIAIS DO FUTURO</label>
       </li>
       <li>
         <input type="checkbox" />
       <label htmlFor="">BLOCK CHAIN</label>
       </li>
      
       
       </form>
       
     </div>
    </div> 
           </div>
       </div>
       </div>
       <div className="consumomoderno">
  <div className="container">
       <div className="card">
           <div className="front">
           <Image src={consumomoderno}
            width={458.86}
            height={180.89}
            />
           </div>
           <div className="back">
           <h3>CONSUMO MODERNO</h3>
      <div className="formcm">
     <form className="formleft" action="post">
       <li>
        <input type="checkbox" />
       <label htmlFor="">SLOW FASHION</label>
       </li>
       <li>
         <input type="checkbox" />
       <label htmlFor="">SOB ENCOMENDA</label>
       </li>
       <li>
         <input type="checkbox" />
       <label htmlFor="">SECOND HAND</label>
       </li>
       <li>
       <input type="checkbox" />
       <label htmlFor="">ATEMPORAL</label>
       </li>
       </form>
       <form className='formright' action='post'>
         <li>
         <input type="checkbox" />
         <label htmlFor="">ECONOMIA CIRCULAR</label>
         </li>
       <li>
       <input type="checkbox" />
       <label htmlFor="">CONCEITO MODULAR</label>
       </li>
       <li> <input type="checkbox" />
       <label htmlFor="">ALUGUEL</label>
       </li>
      </form>
     </div>
    </div> 
           </div>
           </div>
       </div>
       <div className='personalize'>
         <strong>Personalize sua experiência adicionando valores à sua busca</strong>
         <h1>(Clique nas caixas de seleção acima e deixe seu mundo personalizado)</h1>
         <button className='btnconcluir'>Concluir</button>
       </div>
   </div>

)
   
};
export default FlipCard;