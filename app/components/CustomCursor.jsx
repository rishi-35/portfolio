import React, { useEffect, useRef } from "react"
import gsap from "gsap"

const CustomCursor = ({ isDarkMode }) => {
  const followerRef = useRef(null)

  useEffect(() => {
    if (!isDarkMode) return // Skip animation if not dark mode

    const follower = followerRef.current

    const xTo = gsap.quickTo(follower, "x", {
      duration: 0.6,
      ease: "power3",
    })

    const yTo = gsap.quickTo(follower, "y", {
      duration: 0.6,
      ease: "power3",
    })

    const handleMouseMove = (e) => {
      xTo(e.clientX)
      yTo(e.clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [isDarkMode]) // re-run only if isDarkMode changes

  return (
    <>
      {/* Render cursor only in dark mode */}
      {isDarkMode && (
        <div
          ref={followerRef}
          className="pointer-events-none fixed left-0 top-0 aspect-square w-[80vmin] -translate-x-1/2 -translate-y-1/2 rounded-full will-change-transform z-[-10]"
          style={{ mixBlendMode: "screen" }}
        >
          <div className="h-full w-full animate-spin-slow bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 opacity-15 blur-[120px]"></div>
        </div>
      )}
    </>
  )
}

export default CustomCursor
