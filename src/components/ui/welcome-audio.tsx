'use client'

import { useState, useRef, useEffect, useCallback } from 'react'

interface WelcomeAudioProps {
  onPlay?: () => void
  onEnded?: () => void
  onError?: () => void
  autoPlay?: boolean
}

export function WelcomeAudio({
  onPlay,
  onEnded,
  onError,
  autoPlay = false
}: WelcomeAudioProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [canPlay, setCanPlay] = useState(false)
  const [hasPlayed, setHasPlayed] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleCanPlay = () => setCanPlay(true)
    const handlePlay = () => {
      setHasPlayed(true)
      onPlay?.()
    }
    const handleEnded = () => {
      onEnded?.()
    }
    const handleError = () => {
      console.log('Audio error - using fallback')
      onError?.()
    }

    audio.addEventListener('canplaythrough', handleCanPlay)
    audio.addEventListener('play', handlePlay)
    audio.addEventListener('ended', handleEnded)
    audio.addEventListener('error', handleError)

    return () => {
      audio.removeEventListener('canplaythrough', handleCanPlay)
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('ended', handleEnded)
      audio.removeEventListener('error', handleError)
    }
  }, [onPlay, onEnded, onError])

  const playWelcome = useCallback(async () => {
    const audio = audioRef.current
    if (!audio || !canPlay) return

    try {
      await audio.play()
    } catch {
      console.log('Autoplay blocked, user interaction required')
      onError?.()
    }
  }, [canPlay, onError])

  useEffect(() => {
    if (autoPlay && canPlay && !hasPlayed) {
      playWelcome()
    }
  }, [autoPlay, canPlay, hasPlayed, playWelcome])

  return (
    <>
      <audio
        ref={audioRef}
        preload="auto"
        style={{ display: 'none' }}
      >
        {/* For now, using a data URL for a simple beep sound as placeholder */}
        <source 
          src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR0fPPeSMFl"
          type="audio/wav"
        />
        Your browser does not support the audio element.
      </audio>
      
      {/* Optional: Manual play button for cases where autoplay fails */}
      {!hasPlayed && (
        <button
          onClick={playWelcome}
          className="fixed bottom-4 right-4 z-50 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300 flex items-center gap-2"
          style={{ display: 'none' }} // Hidden by default, can be shown if needed
        >
          🔊 Play Welcome
        </button>
      )}
    </>
  )
}

// Hook for managing welcome audio state
export function useWelcomeAudio() {
  const [isFirstVisit, setIsFirstVisit] = useState(false)
  const [audioEnabled, setAudioEnabled] = useState(false)

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = localStorage.getItem('qyi-ai-visited')
    if (!hasVisited) {
      setIsFirstVisit(true)
      localStorage.setItem('qyi-ai-visited', 'true')
    }
    
    // Check user's audio preference
    const audioPreference = localStorage.getItem('qyi-ai-audio-enabled')
    setAudioEnabled(audioPreference !== 'false')
  }, [])

  const enableAudio = () => {
    setAudioEnabled(true)
    localStorage.setItem('qyi-ai-audio-enabled', 'true')
  }

  const disableAudio = () => {
    setAudioEnabled(false)
    localStorage.setItem('qyi-ai-audio-enabled', 'false')
  }

  return {
    isFirstVisit,
    audioEnabled,
    enableAudio,
    disableAudio
  }
}