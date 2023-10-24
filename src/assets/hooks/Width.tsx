import { useEffect, useState } from "react"

export function useWidth({ carouselRef }: any) {
    const [width, setWidth] = useState(0)
    useEffect(() => {
        if (carouselRef.current) {
            setWidth(carouselRef.current?.scrollWidth - carouselRef.current?.offsetWidth)
        }
    }, [])
    return { width, setWidth }
}