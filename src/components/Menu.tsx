import { Link } from 'react-router-dom'
import { CalendarIcon, ChevronLeftIcon, ClockIcon, LocationIcon, TemperatureIcon } from '../assets/Icons'
import { motion } from 'framer-motion';
function Menu() {
    return (
        <>
            <motion.section className='menu'
                initial={{ width: '100%', x: window.innerWidth }}
                animate={{ width: '100%', x: 0 }}
                exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
                transition={{ duration: 0.25 }}
            >
                <header className='menuHeader'>
                    <Link to='/' children={<ChevronLeftIcon />} />
                    <h2>Menu</h2>
                </header>

                <h4 className='menuSubtitle'>Localizaciones guardadas</h4>
                <div className='location'>
                    <div>
                        <LocationIcon />
                        <h3>Mar del Plata - AR</h3>
                    </div>
                    <h4>Actual</h4>
                </div>
                <div className='menuDivider'></div>
                <button className='primaryBtn'>Agregar nueva</button>
                <article className='configuration'>
                    <h4 className='menuSubtitle'>Configuraciones</h4>
                    <div className='configurationItem'>
                        <TemperatureIcon />
                        <h5>Escala:</h5>
                        <h6>°C</h6>
                    </div>
                    <div className='menuDivider'></div>
                    <div className='configurationItem'>
                        <ClockIcon />
                        <h5>Sistema de horario:</h5>
                        <h6>24h</h6>
                    </div>
                    <div className='menuDivider'></div>
                    <div className='configurationItem'>
                        <CalendarIcon />
                        <h5>Formato de fecha:</h5>
                        <h6>DD/MM</h6>
                    </div>
                </article>
                <article className='credits'>
                    <h4 className='menuSubtitle'>Creditos</h4>
                    <h5>Interfaz hecha por <a>Bruna Atanes</a>, pagina web hecha por <a>Lautaro R</a></h5>
                </article>
            </motion.section>
        </>
    )
}

export default Menu