
import { useRef, useState } from "react";
import { Drawer } from "vaul";
import { motion } from 'framer-motion'
import { useWidth } from "../assets/hooks/Width";
import { CloudyIcon } from '../assets/Icons'

function BottomDrawer() {
    const [snap, setSnap] = useState<number | string | null>("70px")
    const extendedCarouselRef = useRef<HTMLDivElement | null>(null)
    const { width: widthExtended } = useWidth({ carouselRef: extendedCarouselRef })

    return (
        <Drawer.Root
            open={true}
            snapPoints={["70px", 1]}
            activeSnapPoint={snap}
            setActiveSnapPoint={setSnap}
            modal={false}
            onClose={() => {
                console.log("close")
            }}
        >
            <Drawer.Overlay className="fixed inset-0 bg-black/40" />
            <Drawer.Portal>
                <Drawer.Content className="fixed flex flex-col bg-white border border-gray-200 border-b-none rounded-t-[10px] bottom-0 left-0 right-0 h-full max-h-[97%] mx-[-1px] px-4">
                    <section className='extendedWeather'>
                        <div className='line'></div>
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
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    )
}

export default BottomDrawer