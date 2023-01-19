
import Image from 'next/image'

import { Layout } from '../layout'
import styles from '../assets/styles/Home.module.scss'
import { Carousel } from '../components';

import { navlist } from '../utils/Nav';

export default function Home() {
  const sliders = [
    {
        "id": 3,
        "title": "more is possible",
        "first_image": "https://volde.ozanuzer.com/images/slider/16728325846b23d0.svg",
        "second_image": "https://volde.ozanuzer.com/images/slider/1671959776517722.png",
        "second_image_mobile": "https://volde.ozanuzer.com/images/slider/1671959776e9de51.png",
        "third_image": "https://volde.ozanuzer.com/images/slider/1671959776b1667a.svg",
        "sort": 1
    },
    {
        "id": 2,
        "title": "more is possible",
        "first_image": "https://volde.ozanuzer.com/images/slider/1672832597aa357d.svg",
        "second_image": "https://volde.ozanuzer.com/images/slider/16719598339f7600.png",
        "second_image_mobile": "https://volde.ozanuzer.com/images/slider/1671959833fb7515.png",
        "third_image": "https://volde.ozanuzer.com/images/slider/167195983317b589.svg",
        "sort": 2
    },
    {
        "id": 1,
        "title": "more is possible",
        "first_image": "https://volde.ozanuzer.com/images/slider/167283260803b56c.svg",
        "second_image": "https://volde.ozanuzer.com/images/slider/1671959886f4adc5.png",
        "second_image_mobile": "https://volde.ozanuzer.com/images/slider/16719598862d91be.png",
        "third_image": "https://volde.ozanuzer.com/images/slider/16719598861278ef.svg",
        "sort": 3
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