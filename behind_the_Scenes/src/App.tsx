import styles from './style.module.scss'

import gsap from 'gsap'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

import imageAsset from './assets/image_asset.jpg'

gsap.registerPlugin(ScrollTrigger)
const App = () => {

  const mainContainerWrapperRef = useRef<HTMLDivElement>(null)
  const mainContainerRef = useRef<HTMLDivElement>(null)
  const imageContentRef = useRef<HTMLUListElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline()

    // const images = gsap.utils.rtoArray(imageContentRef.current?.children)

    // const anim = images.map((image,index) => {
    //   tl.to(image.children,{
    //   y : '10%',
    //   duration : 1,
    //   ease : 'power2.out',
    //   })
    // })

    tl.to(mainContainerRef.current, {
      height: '35rem',
      delay : 1,
      duration : 2,
      ease : 'power2.out'
    })
    .to(imageContentRef.current, {
      y : '-50%',
      duration : 3,
      delay : 2,
      ease : 'power2.out'
    })

    ScrollTrigger.create({
      trigger : mainContainerWrapperRef.current,
      start : 'top top',
      end : '+=400%',
      animation : tl,
      scrub : 1.5,
      pin : true,
      markers : true,
      anticipatePin : 1
    })
  })
  
  return (
    <>
      <section className={styles.section_one}>
        Section one
      </section>
      <div className={styles.main_wrapper_container} ref={mainContainerWrapperRef}>
        <div className={styles.main_container} ref={mainContainerRef}>
          <div className={styles.top_heading_container}>
            <h1>Behind <span>the scenes</span></h1>
          </div>
          <div className={styles.image_content_container}>
            <ul ref={imageContentRef}>
              <li>
                <img src={imageAsset} alt="some temporary image" />
              </li>

              <li>
                <img src={imageAsset} alt="some temporary image" />
              </li>

              <li>
                <img src={imageAsset} alt="some temporary image" />
              </li>

              <li>
                <img src={imageAsset} alt="some temporary image" />
              </li>

              <li>
                <img src={imageAsset} alt="some temporary image" />
              </li>

              <li>
                <img src={imageAsset} alt="some temporary image" />
              </li>
            </ul>
          </div>
          <div className={styles.bottom_heading_container}>
            <h1><span>Behind </span>the scenes</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default App