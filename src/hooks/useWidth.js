import React, {useState, useEffect} from 'react'

const useWidth = () => {
    const [width, setWidth] = useState(null);

    const getWindowWidth = () => {
        if(typeof window !== undefined) {
            setWidth(window.innerWidth);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', getWindowWidth);
        return () =>  window.removeEventListener('resize', getWindowWidth);
    }, [])

    return width;
}

export default useWidth;