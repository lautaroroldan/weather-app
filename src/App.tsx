import { useEffect, useRef, useState } from 'react'
import './App.css'
import { AlignRigthIcon, CloudRainIcon, CloudyIcon, WindIcon } from './assets/Icons'
import { motion } from "framer-motion"
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import animationData from './assets/animations/animation_lo4p0wab.json'
import { useWidth } from './assets/hooks/Width'
function App() {
  const carouselRef = useRef<HTMLDivElement | null>(null)
  const extendedCarouselRef = useRef<HTMLDivElement | null>(null)
  const { width } = useWidth({ carouselRef })
  const { width: widthExtended } = useWidth({ carouselRef: extendedCarouselRef })

  const weatherRef = useRef<LottieRefCurrentProps>(null)


  return (
    <>
      <main>
        <section>
          <div className='header'>
            <h3>Hoy, 22/04</h3>
            <AlignRigthIcon />
          </div>
          <h3><span>Ahora en</span> Mar del Plata</h3>
        </section>
        <section className='temperature'>
          <div>
            <h4>21</h4>
            <p>°C</p>
          </div>
          <Lottie style={{ width: 150, height: 150 }} lottieRef={weatherRef} animationData={animationData} />
        </section>
        <section>
          <motion.div ref={carouselRef} className='carousel'>
            <motion.ul whileTap={{ cursor: 'grabbing' }}
              drag='x' dragConstraints={{ right: 0, left: -width }} className='inner-carousel'>
              <motion.li className='carousel-item'>
                <CloudRainIcon />
                <h3>Chances de lluvia</h3>
                <div>
                  <h4>55</h4>
                  <span>%</span>
                </div>
              </motion.li>
              <motion.li className='carousel-item'>
                <WindIcon />
                <h3>Viento</h3>
                <div>
                  <h4>12</h4>
                  <span>km/h</span>
                </div>
              </motion.li>
              <motion.li className='carousel-item'>
                <CloudRainIcon />
                <h3>Chances de lluvia</h3>
                <div>
                  <h4>55</h4>
                  <span>%</span>
                </div>
              </motion.li>
            </motion.ul>
          </motion.div>
        </section>
        <section className='extendedWeather'>
          <div className='divider'></div>
          <h3>Ver pronóstico extendido</h3>
          <motion.div ref={extendedCarouselRef} className='carousel'>
            <motion.ul whileTap={{ cursor: 'grabbing' }}
              drag='x' dragConstraints={{ right: 0, left: -widthExtended }} className='inner-carousel weatherHourly'>
              <motion.li >
                <h3>14:00</h3>
                <div className='weatherHourlyIcon'>
                  <CloudyIcon />
                  <h4>21°C</h4>
                </div>

              </motion.li >
              <motion.li >
                <h3>15:00</h3>
                <div className='weatherHourlyIcon'>
                  <CloudyIcon />
                  <h4>21°C</h4>
                </div>
              </motion.li >
              <motion.li >
                <h3>16:00</h3>
                <div className='weatherHourlyIcon'>
                  <CloudyIcon />
                  <h4>21°C</h4>
                </div>
              </motion.li >
              <motion.li >
                <h3>17:00</h3>
                <div className='weatherHourlyIcon'>
                  <CloudyIcon />
                  <h4>21°C</h4>
                </div>
              </motion.li >
            </motion.ul>
          </motion.div>

          <article className='weatherWeekly'>
            <div className='weatherWeeklyItem'>
              <h3>Martes</h3>
              <div>
                <CloudyIcon />
                <h4>21°C</h4>
              </div>
            </div>
            <div className='weatherWeeklyItem'>
              <h3>Miércoles</h3>
              <div>
                <CloudyIcon />
                <h4>21°C</h4>
              </div>
            </div>
            <div className='weatherWeeklyItem'>
              <h3>Jueves</h3>
              <div>
                <CloudyIcon />
                <h4>21°C</h4>
              </div>
            </div>

          </article>

        </section>
      </main>
    </>
  )
}

export default App
