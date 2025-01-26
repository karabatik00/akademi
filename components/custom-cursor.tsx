"use client"

import { useEffect, useState, useCallback, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

const INTERACTIVE_ELEMENTS = [
  'a',
  'button',
  'input',
  'select',
  'textarea',
  '[role="button"]',
  '[role="link"]',
  '[role="menuitem"]',
  '[role="option"]',
  '[role="switch"]',
  '[role="tab"]',
  '[tabindex]',
  '[data-interactive]',
].join(',')

export function CustomCursor() {
  // Mouse position tracking
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth spring animation for cursor
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 })
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 })

  // State management
  const [isVisible, setIsVisible] = useState(false)
  const [isPointer, setIsPointer] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const isOutOfBounds = useRef(false)

  // Touch device detection
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0
      )
    }

    checkTouch()
    window.addEventListener('resize', checkTouch)
    return () => window.removeEventListener('resize', checkTouch)
  }, [])

  // Element interaction checks
  const isInteractive = useCallback((element: HTMLElement | null): boolean => {
    if (!element) return false

    return (
      element.matches(INTERACTIVE_ELEMENTS) ||
      element.closest(INTERACTIVE_ELEMENTS) !== null
    )
  }, [])

  // Mouse event handlers
  const handleMouseMove = useCallback((event: MouseEvent) => {
    const { clientX, clientY } = event
    mouseX.set(clientX)
    mouseY.set(clientY)

    if (isOutOfBounds.current) {
      isOutOfBounds.current = false
      setIsVisible(true)
    }
  }, [mouseX, mouseY])

  const handleMouseEnter = useCallback((event: MouseEvent) => {
    const target = event.target as HTMLElement
    const shouldDisable = target.hasAttribute('data-disable-cursor')
    setIsDisabled(shouldDisable)
    
    if (!shouldDisable) {
      const isClickable = isInteractive(target)
      setIsPointer(isClickable)
    }
  }, [isInteractive])

  const handleMouseLeave = useCallback(() => {
    isOutOfBounds.current = true
    setIsVisible(false)
  }, [])

  const handleMouseDown = useCallback(() => {
    setIsClicking(true)
  }, [])

  const handleMouseUp = useCallback(() => {
    setIsClicking(false)
  }, [])

  // Window event handlers
  const handleVisibilityChange = useCallback(() => {
    if (document.hidden) {
      setIsVisible(false)
    }
  }, [])

  const handleWindowBlur = useCallback(() => {
    setIsVisible(false)
  }, [])

  const handleWindowFocus = useCallback(() => {
    setIsVisible(true)
  }, [])

  // Setup and cleanup event listeners
  useEffect(() => {
    if (isTouchDevice) {
      return
    }

    // Add custom cursor class
    document.documentElement.classList.add('custom-cursor')
    
    // Mouse events
    document.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseover', handleMouseEnter)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseleave', handleMouseLeave)
    
    // Window events
    document.addEventListener('visibilitychange', handleVisibilityChange)
    window.addEventListener('blur', handleWindowBlur)
    window.addEventListener('focus', handleWindowFocus)

    return () => {
      // Remove custom cursor class
      document.documentElement.classList.remove('custom-cursor')
      
      // Mouse events
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseEnter)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseleave', handleMouseLeave)
      
      // Window events
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      window.removeEventListener('blur', handleWindowBlur)
      window.removeEventListener('focus', handleWindowFocus)
    }
  }, [
    isTouchDevice,
    handleMouseMove,
    handleMouseEnter,
    handleMouseDown,
    handleMouseUp,
    handleMouseLeave,
    handleVisibilityChange,
    handleWindowBlur,
    handleWindowFocus,
  ])

  if (isTouchDevice || isDisabled) {
    return null
  }

  return (
    <>
      {/* Dot */}
      <motion.div
        style={{
          width: 8,
          height: 8,
          backgroundColor: 'black',
          position: 'fixed',
          borderRadius: '50%',
          top: -4,
          left: -4,
          x: smoothX,
          y: smoothY,
          pointerEvents: 'none',
          zIndex: 9999,
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? (isClicking ? 0.5 : 1) : 0,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Circle */}
      <motion.div
        style={{
          width: 32,
          height: 32,
          border: '2px solid black',
          position: 'fixed',
          borderRadius: '50%',
          top: -16,
          left: -16,
          x: smoothX,
          y: smoothY,
          pointerEvents: 'none',
          zIndex: 9998,
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: isVisible ? 0.15 : 0,
          scale: isVisible ? (isPointer ? 1.5 : isClicking ? 0.5 : 1) : 0,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  )
}
