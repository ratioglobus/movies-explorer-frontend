import { useEffect } from 'react'


export default function usePopupClose (isOpen, closePopup) {
  useEffect(() => {
    if (!isOpen) return

    const handleOverlay = event => {
      if (event.target.classList.contains('burgerMenu_opened')) {
        closePopup()
      }
    }

    const handleEscape = event => {
      if (event.key === 'Escape') {
        closePopup()
      }
    }

    document.addEventListener('mousedown', handleOverlay)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleOverlay)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, closePopup])
}
