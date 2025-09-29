import { useEffect } from 'react'

const ScrollBg = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      // 0〜1000pxのスクロール量に応じて色を変化
      // 例：青→紫→赤
      const maxScroll = 1000
      const percent = Math.min(scrollY / maxScroll, 1)
      // RGB値を線形補間
      const r = Math.round(10 + (200 - 10) * percent)
      const g = Math.round(30 + (20 - 30) * percent)
      const b = Math.round(150 + (50 - 150) * percent)
      document.body.style.background = `rgb(${r},${g},${b})`
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return null
}

export default ScrollBg