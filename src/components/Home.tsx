import { useRef } from 'react'
import { AlignRigthIcon, CloudRainIcon, WindIcon } from '../assets/Icons'
import { motion } from "framer-motion"
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import animationData from '../assets/animations/animation_lo4p0wab.json'
import { useWidth } from '../assets/hooks/Width'
import { Link } from 'react-router-dom'
import BottomDrawer from './Drawer'
function Home() {

    const carouselRef = useRef<HTMLDivElement | null>(null)
    const { width } = useWidth({ carouselRef })

    const weatherRef = useRef<LottieRefCurrentProps>(null)
    return (
        <motion.main className=''
            initial={{ width: '100%', x: -window.innerWidth }}
            animate={{ width: '100%', x: 0 }}
            exit={{ x: -window.innerWidth, transition: { duration: 0.1 } }}
            transition={{ duration: 0.25 }}
        >
            <section>
                <div className='header'>
                    <h3>Hoy, 22/04</h3>
                    <Link to='/menu' children={<AlignRigthIcon />} />
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
            <BottomDrawer />
        </motion.main>
    )
}

export default Home