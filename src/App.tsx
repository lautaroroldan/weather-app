import { useEffect, useRef, useState } from 'react'
import './App.css'
import { AlignRigthIcon, CloudRainIcon } from './assets/Icons'
import { motion } from "framer-motion"
function App() {

  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }
  }, [])

  return (
    <>
      <main>
        <section>
          <div className='header'>
            <h3>Hoy,22/04</h3>
            <AlignRigthIcon />
          </div>
          <h3><span>Ahora en</span> Mar del Plata</h3>
        </section>
        <section >
          <div className='temperature'>
            <h4>21</h4>
            <p>°C</p>
          </div>
        </section>
        <section>
          <motion.div ref={carousel} className='carousel'>
            <motion.ul whileTap={{ cursor: 'grabbing' }}
              drag='x' dragConstraints={{ right: 0, left: -width }} className='inner-carousel'>
              <motion.li className='carousel-item'>
                <CloudRainIcon />
                <h3>Chances de lluvia</h3>
                <h4>55<span>%</span></h4>
              </motion.li>
              <motion.li className='carousel-item'>
                <CloudRainIcon />
                <h3>Chances de lluvia</h3>
                <h4>55<span>%</span></h4>
              </motion.li>
              <motion.li className='carousel-item'>
                <CloudRainIcon />
                <h3>Chances de lluvia</h3>
                <h4>55<span>%</span></h4>
              </motion.li>
            </motion.ul>
          </motion.div>
        </section>
      </main>
    </>
  )
}

export default App
