import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const createRays = (count, cycle) => {
  if (count <= 0) return []

  return Array.from({ length: count }, (_, index) => {
    const left = 8 + Math.random() * 84
    const rotate = -28 + Math.random() * 56
    const width = 160 + Math.random() * 160
    const swing = 0.8 + Math.random() * 1.8
    const delay = Math.random() * cycle
    const duration = cycle * (0.75 + Math.random() * 0.5)
    const intensity = 0.6 + Math.random() * 0.5

    return {
      id: `${index}-${Math.round(left * 10)}`,
      left,
      rotate,
      width,
      swing,
      delay,
      duration,
      intensity,
    }
  })
}

const Ray = ({
  left,
  rotate,
  width,
  swing,
  delay,
  duration,
  intensity,
  color,
  blur,
  length,
}) => {
  return (
    <motion.div
      style={{
        position: 'absolute',
        top: '-12%',
        left: `${left}%`,
        height: length,
        width: `${width}px`,
        transformOrigin: 'top',
        transform: 'translateX(-50%)',
        borderRadius: '9999px',
        background: `linear-gradient(to bottom, ${color}, transparent)`,
        mixBlendMode: 'screen',
        filter: `blur(${blur}px)`,
        pointerEvents: 'none',
      }}
      initial={{ rotate: rotate, opacity: 0 }}
      animate={{
        opacity: [0, intensity, 0],
        rotate: [rotate - swing, rotate + swing, rotate - swing],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
        repeatDelay: duration * 0.1,
      }}
    />
  )
}

export function LightRays({
  className = "",
  style = {},
  count = 7,
  color = "rgba(59, 130, 246, 0.15)",
  blur = 40,
  speed = 14,
  length = "70vh",
}) {
  const [rays, setRays] = useState([])
  const cycleDuration = Math.max(speed, 0.1)

  useEffect(() => {
    setRays(createRays(count, cycleDuration))
  }, [count, cycleDuration])

  return (
    <div
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
        ...style,
      }}
    >
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        {/* Ambient glow spots */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.5,
            background: `radial-gradient(circle at 20% 15%, ${color}, transparent 70%)`,
          }}
        />
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.4,
            background: `radial-gradient(circle at 80% 10%, ${color}, transparent 75%)`,
          }}
        />
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.3,
            background: `radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.08), transparent 60%)`,
          }}
        />
        {/* Animated rays */}
        {rays.map((ray) => (
          <Ray 
            key={ray.id} 
            {...ray} 
            color={color}
            blur={blur}
            length={length}
          />
        ))}
      </div>
    </div>
  )
}

export default LightRays

