
import Image from 'next/image'

import { Layout } from '../layout'
import styles from '../assets/styles/Home.module.scss'
import { Carousel } from '../components';

import { navlist } from '../utils/Nav';

export default function Home() {
  const sliders = [
    {
        "id": 3,
        "title": "Sanayi",
        "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since.",
        "first_image": "/images/products/otomotiv.png",
        "first_image_mobile": "https://volde.ozanuzer.com/images/slider/1671959776e9de51.png",
        "sort": 1
    },
    {
        "id": 2,
        "title": "Otomotiv",
        "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since.",
        "first_image": "/images/products/otomotiv.png",
        "first_image_mobile": "https://volde.ozanuzer.com/images/slider/1671959833fb7515.png",
        "sort": 2
    },
    {
        "id": 1,
        "title": "Gıda",
        "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since.",
        "first_image": "/images/products/otomotiv.png",
        "first_image_mobile": "https://volde.ozanuzer.com/images/slider/16719598862d91be.png",
        "sort": 3
    },
    {
        "id": 4,
        "title": "Tarım",
        "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since.",
        "first_image": "/images/products/otomotiv.png",
        "first_image_mobile": "https://volde.ozanuzer.com/images/slider/16719598862d91be.png",
        "sort": 4
    },
    {
        "id": 5,
        "title": "Zincir Marketler",
        "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since.",
        "first_image": "/images/products/otomotiv.png",
        "first_image_mobile": "https://volde.ozanuzer.com/images/slider/16719598862d91be.png",
        "sort": 5
    },
    {
        "id": 6,
        "title": "Lojistik",
        "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since.",
        "first_image": "/images/products/otomotiv.png",
        "first_image_mobile": "https://volde.ozanuzer.com/images/slider/16719598862d91be.png",
        "sort": 6
    },
    {
        "id": 7,
        "title": "Genel",
        "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since.",
        "first_image": "/images/products/otomotiv.png",
        "first_image_mobile": "https://volde.ozanuzer.com/images/slider/16719598862d91be.png",
        "sort": 7
    }
  ]
  
  return (
    <>
      <Layout navlist={navlist}>
        <section className={styles['carousel']}>
          <Carousel data={sliders} />
        </section>

        <section className={styles['video']}>
          <video width="1920" height="1080" autoPlay muted loop fetchpriority="high">
            <source src={'/video/benoplast-video.mp4'} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>
          
      </Layout>
    </>
  )
}