import { Route, Routes, useLocation } from 'react-router-dom'
import Menu from '../components/Menu'
import Home from '../components/Home'
import { AnimatePresence } from 'framer-motion'
function AnimatedRoutes() {
    const location = useLocation()
    return (
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route index element={<Home />} />
                <Route path='/menu' element={<Menu />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes