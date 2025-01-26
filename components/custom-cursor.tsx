"use client"

import { useEffect, useState, useCallback, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

const INTERACTIVE_ELEMENTS = [
  'a',
  'button',
  'input',
  'select',
  '[role="button"]',
  '[role="link"]',
  '[tabindex="0"]',
  'label',
  '.clickable'
].join(',')

const CURSOR_DISABLED_ELEMENTS = [
  'iframe',
  '[data-custom-cursor-disabled]',
  '.map-container',
  '.google-map',
  'canvas',
  'video',
  '.no-cursor'
].join(',')

export function CustomCursor() {
  // Cursor pozisyonu için refs
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  
  // Mouse pozisyonu için motion values
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Cursor pozisyonu için smooth spring
  const springConfig = { 
    damping: 35,
    stiffness: 350,
    mass: 0.8,
    restSpeed: 0.001,
    restDelta: 0.001
  }

  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  // State management
  const [isVisible, setIsVisible] = useState(false)
  const [isPointer, setIsPointer] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  
  // Mouse position tracking için ref
  const mousePosition = useRef({ x: 0, y: 0 })
  const isOutOfBounds = useRef(false)
  const frameId = useRef<number>()

  // Touch device detection - daha güvenilir
  useEffect(() => {
    const checkTouch = () => {
      const isTouchCapable = 
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        (navigator as any).msMaxTouchPoints > 0 ||
        window.matchMedia('(hover: none)').matches ||
        window.matchMedia('(pointer: coarse)').matches
      
      setIsTouchDevice(isTouchCapable)
    }

    checkTouch()
    window.addEventListener('resize', checkTouch)
    return () => window.removeEventListener('resize', checkTouch)
  }, [])

  // Mouse takibi için ana fonksiyon
  const updateMousePosition = useCallback((e: MouseEvent) => {
    mousePosition.current = { x: e.clientX, y: e.clientY }
    
    if (frameId.current) {
      cancelAnimationFrame(frameId.current)
    }

    frameId.current = requestAnimationFrame(() => {
      // Viewport sınırlarını kontrol et
      const isOutside = 
        e.clientX < 0 ||
        e.clientX > window.innerWidth ||
        e.clientY < 0 ||
        e.clientY > window.innerHeight

      if (isOutside !== isOutOfBounds.current) {
        isOutOfBounds.current = isOutside
        setIsVisible(!isOutside)
      }

      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    })
  }, [mouseX, mouseY])

  // Element kontrolü için fonksiyon
  const checkElement = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement
    
    // Cursor'ın devre dışı kalması gereken durumlar
    const shouldDisable = 
      target.matches(CURSOR_DISABLED_ELEMENTS) ||
      target.closest(CURSOR_DISABLED_ELEMENTS) !== null ||
      !document.hasFocus() ||
      isOutOfBounds.current

    setIsDisabled(shouldDisable)
    
    if (!shouldDisable) {
      const isClickable = 
        target.matches(INTERACTIVE_ELEMENTS) ||
        target.closest(INTERACTIVE_ELEMENTS) !== null
      setIsPointer(isClickable)
    }
  }, [])

  // Mouse events
  const handleMouseDown = useCallback(() => {
    if (!isDisabled) setIsClicking(true)
  }, [isDisabled])

  const handleMouseUp = useCallback(() => {
    setIsClicking(false)
  }, [])

  const handleMouseEnter = useCallback(() => {
    isOutOfBounds.current = false
    setIsVisible(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    isOutOfBounds.current = true
    setIsVisible(false)
  }, [])

  // Window events
  const handleVisibilityChange = useCallback(() => {
    if (document.hidden) {
      setIsVisible(false)
    } else {
      setIsVisible(!isOutOfBounds.current)
    }
  }, [])

  const handleFocus = useCallback(() => {
    if (!isOutOfBounds.current) {
      setIsVisible(true)
    }
  }, [])

  const handleBlur = useCallback(() => {
    setIsVisible(false)
  }, [])

  // Event listeners
  useEffect(() => {
    if (isTouchDevice) return

    let frameId: number

    const updateCursor = () => {
      if (!isOutOfBounds.current && document.hasFocus()) {
        mouseX.set(mousePosition.current.x)
        mouseY.set(mousePosition.current.y)
      }
      frameId = requestAnimationFrame(updateCursor)
    }
    
    frameId = requestAnimationFrame(updateCursor)

    document.documentElement.classList.add('custom-cursor')
    
    // Mouse events
    document.addEventListener('mousemove', updateMousePosition, { passive: true })
    document.addEventListener('mouseover', checkElement)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)
    
    // Window events
    window.addEventListener('focus', handleFocus)
    window.addEventListener('blur', handleBlur)
    window.addEventListener('resize', handleMouseLeave)
    window.addEventListener('scroll', handleMouseLeave, { passive: true })
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      cancelAnimationFrame(frameId)
      document.documentElement.classList.remove('custom-cursor')
      
      // Mouse events
      document.removeEventListener('mousemove', updateMousePosition)
      document.removeEventListener('mouseover', checkElement)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      
      // Window events
      window.removeEventListener('focus', handleFocus)
      window.removeEventListener('blur', handleBlur)
      window.removeEventListener('resize', handleMouseLeave)
      window.removeEventListener('scroll', handleMouseLeave)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [
    isTouchDevice,
    updateMousePosition,
    checkElement,
    handleMouseDown,
    handleMouseUp,
    handleMouseEnter,
    handleMouseLeave,
    handleFocus,
    handleBlur,
    handleVisibilityChange,
    mouseX,
    mouseY
  ])

  if (isTouchDevice || isDisabled) return null

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="cursor-dot"
        style={{
          position: 'fixed',
          top: -4,
          left: -4,
          x: cursorX,
          y: cursorY,
          pointerEvents: 'none',
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{
          opacity: { duration: 0.15 },
          scale: { type: 'spring', damping: 20, stiffness: 300 },
        }}
      />
      <motion.div
        ref={ringRef}
        className="cursor-ring"
        style={{
          position: 'fixed',
          top: -16,
          left: -16,
          x: cursorX,
          y: cursorY,
          pointerEvents: 'none',
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isPointer ? 1.2 : isClicking ? 0.8 : 1,
        }}
        transition={{
          opacity: { duration: 0.15 },
          scale: { type: 'spring', damping: 25, stiffness: 300 },
        }}
      />
    </>
  )
}
