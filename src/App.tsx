import { useEffect, useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Howl } from 'howler'
import SoundOn from './icons/SoundOn'
import SoundOff from './icons/SoundOff'

export default function App() {
  const [phase, setPhase] = useState<'inspire' | 'hold' | 'expire'>('inspire')
  const [isActive, setIsActive] = useState(false)
  const [soundOn, setSoundOn] = useState(false)
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null)

  const sounds = useMemo(() => ({
    inspire: new Howl({ src: ['/sounds/inspire.mp3'], volume: 0.3 }),
    hold: new Howl({ src: ['/sounds/hold.mp3'], volume: 0.3 }),
    expire: new Howl({ src: ['/sounds/expire.mp3'], volume: 0.3 }),
  }), [])

  useEffect(() => {
    if (!isActive) return

    const playSound = (name: keyof typeof sounds) => {
      if (soundOn) sounds[name].play()
    }

    const loop = () => {
      playSound('inspire')
      setTimeout(() => {
        setPhase('hold')
        playSound('hold')
      }, 4000)
      setTimeout(() => {
        setPhase('expire')
        playSound('expire')
      }, 7000)
      setTimeout(() => setPhase('inspire'), 12000)
    }

    loop()
    const interval = setInterval(loop, 12000)
    setIntervalId(interval)
    return () => clearInterval(interval)
  }, [isActive, soundOn])

  const handleToggleSession = () => {
    if (isActive) {
      setIsActive(false)
      setPhase('inspire')
      if (intervalId) clearInterval(intervalId)
    } else {
      setIsActive(true)
    }
  }

  const toggleSound = () => setSoundOn((prev) => !prev)

  return (
    <main
      className="relative flex flex-col items-center justify-center text-center gap-10 px-6 min-h-screen overflow-hidden"
      role="main"
      aria-label="Sessão de respiração guiada"
    >
      <motion.div
        className="fixed inset-0 -z-10 w-full h-full"
        animate={{
          background:
            !isActive
              ? 'radial-gradient(circle at center, #F2DCDB 0%, #F2AEBC 100%)'
              : phase === 'inspire'
                ? 'radial-gradient(circle at center, #F2DCDB 0%, #F2AEBC 100%)'
                : phase === 'hold'
                  ? 'radial-gradient(circle at center, #E2ECF8 0%, #5A86CB 100%)'
                  : 'radial-gradient(circle at center, #F9E3E0 0%, #6C0820 100%)',
        }}
        transition={{ duration: 4, ease: 'easeInOut' }}
        aria-hidden="true"
      />

      {isActive && (
        <motion.div
          className="w-56 h-56 rounded-full shadow-lg"
          animate={{
            scale:
              phase === 'inspire'
                ? 1.2
                : phase === 'hold'
                  ? 1.2
                  : 0.9,
            backgroundColor:
              phase === 'inspire'
                ? 'var(--color-cherry-pink)'
                : phase === 'hold'
                  ? 'var(--color-silver-blue)'
                  : 'var(--color-burgundy)',
            boxShadow:
              phase === 'hold'
                ? '0 0 40px rgba(90,134,203,0.5)'
                : '0 0 20px rgba(242,174,188,0.4)',
          }}
          transition={{
            scale: { duration: phase === 'hold' ? 0 : 4, ease: 'easeInOut' },
            backgroundColor: { duration: 4, ease: 'easeInOut' },
            boxShadow: { duration: 4, ease: 'easeInOut' },
          }}
          role="img"
          aria-label={
            phase === 'inspire'
              ? 'Inspirar'
              : phase === 'hold'
                ? 'Segurar o ar'
                : 'Expirar'
          }
        />
      )}

      <h1
        className="mt-4 text-5xl font-bold text-[--color-lapis-blue] tracking-wide"
        aria-live="polite"
      >
        {!isActive
          ? 'Respira'
          : phase === 'inspire'
            ? 'Inspira...'
            : phase === 'hold'
              ? 'Segura...'
              : 'Expira...'}
      </h1>

      <p
        className="text-lg max-w-md text-[--color-lapis-blue]/80 leading-relaxed font-medium"
        aria-live="off"
      >
        {!isActive
          ? 'Um espaço para desacelerar e se reconectar com sua respiração 🌸'
          : 'Respira fundo, sente o ar e lembra que tá tudo bem desacelerar 💕'}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <button
          onClick={handleToggleSession}
          className={`font-semibold px-8 py-3 rounded-full cursor-pointer
    shadow-md drop-shadow-md focus:outline-none focus:ring-4 focus:ring-[--color-silver-blue]/50 focus:ring-offset-2 focus:ring-offset-[--color-cherry-pink]
    transition-transform duration-200 active:scale-[0.97]
    ${isActive
              ? 'bg-[--color-burgundy] text-white hover:bg-[--color-cherry-pink] hover:text-black'
              : 'bg-[--color-cherry-pink] text-black hover:bg-[--color-burgundy] hover:text-white'
            }`}
        >
          {isActive ? 'Parar sessão' : 'Iniciar sessão'}
        </button>

        <button
          onClick={toggleSound}
          className={`px-8 py-3 rounded-full font-semibold cursor-pointer
  shadow-md drop-shadow-md focus:outline-none
  focus:ring-4 focus:ring-[--color-silver-blue]/50 focus:ring-offset-2 focus:ring-offset-[--color-cherry-pink]
  transition-transform duration-200 flex items-center justify-center gap-2 active:scale-[0.97]
  bg-[--color-cherry-pink] text-black hover:bg-[--color-burgundy] hover:text-white`}
          aria-pressed={soundOn}
          aria-label={soundOn ? 'Desativar sons da respiração' : 'Ativar sons da respiração'}
        >
          {soundOn ? <SoundOn /> : <SoundOff />}

          {soundOn ? 'Som ligado' : 'Som desligado'}
        </button>
      </div>

      <footer className="absolute bottom-6 text-[--color-lapis-blue]/50 text-sm">
        <p>Code with heart. Design with purpose 💖</p>
        <p>
          © 2025. Produzido por {''}
          <a className='underline-fancy' href="https://github.com/netuninho" target="_blank">Manuela Silva</a>
        </p>
      </footer>
    </main>
  )
}
