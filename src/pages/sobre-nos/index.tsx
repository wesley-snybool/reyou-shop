import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import Image from 'next/image'
import Link from 'next/link'

export default function Sobre () {
    return (
        <>
            <div className='flex '>
                <div className=''>
                    <div className='container-left-header'>
                        <Image width="698" height="125" src='/assets/images/sobre/arrow-right.svg' />
                        <span className=' text-black' >Missão. valores. Pra quem somos</span>
                    </div>
                    <Image width="610" height="493" src='/assets/images/sobre/image-people.svg' />
                </div>
                <div className='container-right'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae soluta rem laudantium debitis odit facilis ea sapiente, aperiam numquam sed corrupti minima adipisci dolore recusandae deleniti voluptatibus quod quas reprehenderit!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, autem? Reprehenderit quam saepe quas nam dolorum? Sequi, ab amet est cum cupiditate eaque nobis maxime qui voluptatibus quod dolores ea.  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores minima quidem, illum neque animi voluptas. Maxime culpa praesentium neque voluptatum nam error delectus harum explicabo quae, quaerat doloribus beatae nihil. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium ipsum nihil sequi laboriosam error quia quidem consequuntur labore saepe, aperiam officiis deleniti? Veniam laudantium adipisci porro eaque dicta, eveniet voluptatem!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed animi, maxime corrupti magnam culpa libero, a quisquam impedit ex, placeat ratione consectetur. Deleniti, esse. Consectetur itaque facilis dicta aperiam doloremque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi porro totam eum, id aut facilis eligendi sequi. Praesentium, libero? Animi veniam earum labore amet provident odio atque veritatis incidunt quisquam?</p>
                </div>
            </div>
            <div className='flex  items-start'>
                <div className='mt-20 flex-1 '>
                    <p className='p-8 mt-10' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum magni error numquam perspiciatis facere sapiente nisi. Ullam eveniet ab magni odio, fugiat dicta deleniti voluptatibus architecto quae quasi quod itaque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni alias nostrum nihil aperiam repellat vero, ipsum blanditiis odio consectetur facere officia at laboriosam doloremque pariatur, ullam atque voluptate minus soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim reiciendis, dolorem ipsum illo atque laborum, tenetur commodi minus aut officia laudantium optio. Impedit perspiciatis dolore sint cumque, pariatur libero dicta.</p>
                    <p className='px-8' > Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed animi, maxime corrupti magnam culpa libero, a quisquam impedit ex, placeat ratione consectetur. Deleniti, esse. Consectetur itaque facilis dicta aperiam doloremque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi porro totam eum, id aut facilis eligendi sequi. Praesentium, libero? Animi veniam earum labore amet provident odio atque veritatis incidunt quisquam?</p>
                    <div className='sessao-sustentabilidade'>
                        <Image className='relative' width="522" height="125" src='/assets/images/sobre/arrow-right-sustentabilidade.svg' />
                        <span>Sustentabilidade</span>
                    </div>
                </div>
                <div className='session-as-work flex flex-col justify-end items-end'>
                    <div className='as-work flex flex-col items-center justify-center relative'>
                        <span className='absolute z-10'>Como trabalhamos</span>
                        <Image  width="452" height="125" src='/assets/images/sobre/as-work.svg' />
                    </div>
                    <Image  width="843" height="529" src='/assets/images/sobre/img-work.svg' />
                </div>
            </div>
            <div className='flex items-start bg-black'>
                <div className='relative flex-1 items-center justify-center'>
                    <Image  width="720" height="528" src='/assets/images/sobre/before-sus.svg' />
                    <div className='absolute bottom-0 p-16 session-moda' >
                        <h2>Moda</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta error, autem ad facere odit enim quos. Hic consequuntur quis, reiciendis eveniet voluptatibus neque aperiam eaque labore atque vitae officiis repellat?</p>
                        <a href="">Leia Mais</a>
                    </div>
                </div>
                <div className='relative flex-1 items-center justify-center'>
                    <Image  width="720" height="528" src='/assets/images/sobre/after-sus.svg' />
                    <div className='absolute bottom-0 p-16 session-moda' >
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Temporibus, dicta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ullam quo consectetur unde laboriosam excepturi hic facere voluptatibus possimus sit tempore beatae doloribus, assumenda iure. Incidunt aliquam tempore molestiae fuga!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta error, autem ad facere odit enim quos. Hic consequuntur quis, reiciendis eveniet voluptatibus neque aperiam eaque labore atque vitae officiis repellat?</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam veritatis quos nesciunt, magnam cupiditate, sequi debitis quisquam explicabo ipsam porro placeat! Veritatis rerum amet excepturi provident mollitia, iusto officiis cumque? </p>
                    </div>
                </div>
            </div>
            <div className='arrow-socios flex justify-end'>
                <div className='session-partner'>
                    <span>Sócios</span>
                    <Image  width="342" height="125" src='/assets/images/sobre/arrow-socias.svg' />
                </div>
            </div>
            <div className='relative image-partner bg-black items-cente flex-col flex justify-center'>
                <Image  width="867" height="1300" src='/assets/images/sobre/image-socias.svg' />
                <div className='cards-socias'>
                    <section >
                        <h2>Ana Paula Amorin</h2>
                        <p> Lorem ipsum dolor sit amjkjnkjet, consectetur adipiscing elit. Ut blandit enim orci, et eleifend felis lobortis quis. Proin efficitur pharetra euismod. Morbi vitae nunc sit amet elit posuere iaculis. Phasellus molestie volutpat sagittis. Suspendisse molestie ipsum at ante accumsan vulputate. Cras aliquet lorem sit amet finibus laoreet. Quisque euismod tincidunt risus, sed vulputate neque. Aenean ut elit neque. Phasellus gravida libero erat, sed tincidunt mi lacinia id.  </p>
                        <div className='footer-card'>
                            <Link href='/'><Image  width="46.88" height="46.88" src='/assets/images/sobre/facebook.svg' /></Link>
                            <Link href='/'><Image  width="46.88" height="46.88" src='/assets/images/sobre/twiter.svg' /></Link>
                            <Link href='/'><Image  width="46.88" height="46.88" src='/assets/images/sobre/instagran.svg' /></Link>
                        </div>
                    </section>
                    <section>
                        <h2>Cíntia Tavares</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit enim orci, et eleifend felis lobortis quis. Proin efficitur pharetra euismod. Morbi vitae nunc sit amet elit posuere iaculis. Phasellus molestie volutpat sagittis. Suspendisse molestie ipsum at ante accumsan vulputate. Cras aliquet lorem sit amet finibus laoreet. Quisque euismod tincidunt risus, sed vulputate neque. Aenean ut elit neque. Phasellus gravida libero erat, sed tincidunt mi lacinia id. </p>
                        <div className='footer-card'>
                            <Link href='/'><Image  width="46.88" height="46.88" src='/assets/images/sobre/facebook.svg' /></Link>
                            <Link href='/'><Image  width="46.88" height="46.88" src='/assets/images/sobre/twiter.svg' /></Link>
                            <Link href='/'><Image  width="46.88" height="46.88" src='/assets/images/sobre/instagran.svg' /></Link>
                        </div>
                    </section>
                </div>
            </div>

        </>
    )
}

Sobre.Layout = Layout;