import { useState, useEffect } from 'react'


export const useAdjustSize = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = event => { setWidth(event.target.innerWidth) }
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return {
    width,
    isScreen839: width >= 839,
    isScreen989: width >= 989,
    isScreen767: width <= 767
  }
}
