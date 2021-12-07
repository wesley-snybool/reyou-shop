import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import logoReYou from 'public/assets/images/blog/logo-hey-you.svg'
import Image from 'next/image'

import img_05 from 'public/assets/images/blog/image5.svg'
import img_06 from 'public/assets/images/blog/image6.svg'
import img_07 from 'public/assets/images/blog/image7.svg'
import img_08 from 'public/assets/images/blog/image8.svg'
import img_09 from 'public/assets/images/blog/image9.svg'


import partne_01 from '../../../public/assets/images/sobre/partner-01.svg'
import partne_02 from '../../../public/assets/images/sobre/partner-02.svg'
import partne_03 from '../../../public/assets/images/sobre/partner-03.svg'
import partne_04 from '../../../public/assets/images/sobre/partner-04.svg'

export default function Blog () {

    const dataImg = [
        {
            image: img_05,
            w: 318,
            h: 305,
        },
        {
            image: img_06,
            w: 318,
            h: 300,
        },
        {
            image: img_07,
            w: 301,
            h: 300,
        },
    ]

    const dataFooteer = [
        {
            image: img_08,
            w: 451.5,
            h: 450,
        },
        {
            image: img_09,
            w: 451.5,
            h: 450,
        },
    ]

    const relationPosts = [
        {
            img: partne_01,
            date: '25 de março, 2021',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            img: partne_02,
            date: '25 de março, 2021',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            img: partne_03,
            date: '25 de março, 2021',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            img: partne_04,
            date: '25 de março, 2021',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
    ]

    return (
        <Container className='my-8 w-full md:px-0 md:py-0 md:mt-0'>
            <div className="banner-valores flex-col flex items-center justify-center bg-center bg-blog-header p-8">
                <span className="title-valores-header" >Blog</span>
                <Image src={logoReYou} width={484} height={149}/>
            </div>
            <div className='p-8'>
                <button className=' bg-black py-2 px-8 text-white font-bold rounded-full'>Moda </button>
                <div className=' flex gap-1 my-6'>
                    <span>Home</span>
                    {'>'}
                    <span>Blog</span>
                    {'>'}
                    <span>Post</span>
                    {'>'}
                </div>
            </div>
            <div className='p-2   flex items-start justify-between'>
                <div className='flex-1 p-14'>
                    <h2 className='px-10 text-2xl font-bold text-black' >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                    <p className='leading-9 mt-6 px-10'>
                        Ut blandit enim orci, et eleifend felis lobortis quis. Proin efficitur pharetra euismod. Morbi vitae nunc sit amet elit posuere iaculis. Phasellus molestie volutpat sagittis. Suspendisse molestie ipsum at ante accumsan vulputate. Cras aliquet lorem sit amet finibus laoreet. Quisque euismod tincidunt risus, sed vulputate neque. Aenean ut elit neque. Phasellus gravida libero erat, sed tincidunt mi lacinia id. Nam elit augue, scelerisque vitae risus eu, scelerisque blandit dui. Praesent luctus mauris diam, non mattis justo bibendum sed. Sed ornare tincidunt nunc ac vestibulum. Sed pellentesque ut ipsum nec lacinia. Proin laoreet tortor quis velit facilisis, vel hendrerit mauris viverra. Sed at hendrerit nibh, ac scelerisque orci.
                    </p>
                    <p className='leading-9 px-10 pb-12'>
                        Phasellus laoreet urna id neque feugiat, porttitor mattis ligula elementum. Nunc nec malesuada nulla, sed iaculis tellus. Vivamus eget tellus a odio consequat pellentesque. Nullam luctus tempor lectus, quis pellentesque leo molestie et. Etiam eget interdum felis. Vestibulum non ullamcorper velit. Mauris in mi ornare mauris pulvinar tempus a quis sapien. Vestibulum semper odio lacinia leo pulvinar sagittis. Proin quis purus eros. Suspendisse ut risus tincidunt nibh consequat scelerisque. Pellentesque pharetra ut sem at auctor. Etiam est justo, facilisis sit amet eleifend sed, pharetra id nisl.
                    </p>
                    <div className=' justify-center flex flex-wrap overflow-hidden'>
                        {dataImg.map((item: any, index: number) => (
                            <>
                                <div key={index} className='flex  bg-red-500'>
                                    <Image width={item.w} height={item.h} src={item.image}></Image>
                                </div>
                            </>
                        ))}
                        {dataFooteer.map((item, index) => (
                            <div className='bg-gray200' key={index}>
                                <Image width={item.w} height={item.h} src={item.image}></Image>
                            </div>
                        ))}
                    </div>
                    <div className=''>
                        <p className='leading-9 mt-6 px-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eaque at inventore cum commodi sint quidem aliquam eos praesentium excepturi corporis incidunt neque, vel veritatis animi deserunt dolorum. Similique, quos?  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam officia voluptas voluptatibus fugit possimus eos laborum nisi sunt pariatur, alias quisquam nostrum odio illo velit dolores sint provident dolor rerum? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa ratione minima facere eligendi ea autem molestiae sit saepe fuga dolore! Quod quo rem magnam voluptate cum asperiores odit facere at. </p>
                        <p className='leading-9  px-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eaque at inventore cum commodi sint quidem aliquam eos praesentium excepturi corporis incidunt neque, vel veritatis animi deserunt dolorum. Similique, quos?  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam officia voluptas voluptatibus fugit possimus eos laborum nisi sunt pariatur, alias quisquam nostrum odio illo velit dolores sint provident dolor rerum? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa ratione minima facere eligendi ea autem molestiae sit saepe fuga dolore! Quod quo rem magnam voluptate cum asperiores odit facere at. </p>
                    </div>
                    <div className='anti-footer'>
                        <div className='flex flex-col'>
                            <h2>Sobre o Autor</h2>
                            <p> a quis sapien. Vestibulum semper odio lacinia leo pulvinar sagittis. Proin quis purus eros. Suspendisse ut risus tincidunt nibh consequat scelerisque. Pellentesque pharetra ut sem at auctor. Etiam est justo, facilisis sit amet eleifend sed, pharetra id nisl.</p>
                        </div>
                            <Image width={500} height={500} src={partne_01} />
                    </div>
                </div>
                <div className='w-1/5  flex flex-wrap'>
                    <h2 className='text-center text-xl font-bold text-black'>Posts Relacionados</h2>

                        {relationPosts.map((item, key) => (
                            <div className='w-1/2 flex flex-col justify-center items-center ' key={`${key}-relation-posts`}>
                                <Image src={item.img} width={100} height={100}/>
                                <span className='text-black text-xs'>{item.date}</span>
                                <p className='text-center text-black text-xs font-bold'>{item.desc}</p>
                            </div>
                        ))}
                </div>
            </div>
        </Container>
    )
}

Blog.Layout = Layout;