"use client"
import { type LenisRef, ReactLenis } from 'lenis/react'
import gsap from 'gsap'

import { useEffect, useRef } from 'react'
export default function Lenis({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisRef | null>(null)
  
  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }
  
    gsap.ticker.add(update)
  
    return () => gsap.ticker.remove(update)
  }, [])
  
  return (
    <ReactLenis options={{ autoRaf: false }} ref={lenisRef} root>
      {children}
    </ReactLenis>
  )
}
