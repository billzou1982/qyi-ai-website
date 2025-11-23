'use client'

import { useState, useEffect } from 'react'
import { RobotWithSpeech } from './robot-with-speech'
import { WelcomeAudio, useWelcomeAudio } from './welcome-audio'

interface WelcomeSequenceProps {
  className?: string
}

export function WelcomeSequence({ className }: WelcomeSequenceProps) {
  const [sequenceState, setSequenceState] = useState<'loading' | 'ready' | 'speaking' | 'completed'>('loading')
  const [showAudioPrompt, setShowAudioPrompt] = useState(false)
  const { isFirstVisit, audioEnabled, enableAudio } = useWelcomeAudio()

  // Sequence timing
  useEffect(() => {
    if (!isFirstVisit) {
      setSequenceState('completed')
      return
    }

    // Simulate robot loading time
    const loadingTimer = setTimeout(() => {
      setSequenceState('ready')
      
      // Check if audio is enabled and browser supports autoplay
      if (audioEnabled) {
        // Small delay before starting speech
        const speechTimer = setTimeout(() => {
          setSequenceState('speaking')
        }, 1000)
        return () => clearTimeout(speechTimer)
      } else {
        // Show audio prompt for first-time visitors
        setShowAudioPrompt(true)
      }
    }, 2000) // 2 seconds for robot to load

    return () => clearTimeout(loadingTimer)
  }, [isFirstVisit, audioEnabled])

  const handleAudioPlay = () => {
    console.log('Welcome audio started playing')
  }

  const handleAudioEnded = () => {
    console.log('Welcome audio finished')
    setSequenceState('completed')
  }

  const handleAudioError = () => {
    console.log('Audio failed, showing visual-only welcome')
    // Still show speech animation even without audio
    setSequenceState('speaking')
    
    // End speech after typical audio duration (3 seconds)
    setTimeout(() => {
      setSequenceState('completed')
    }, 3000)
  }

  const handleEnableAudio = () => {
    enableAudio()
    setShowAudioPrompt(false)
    setSequenceState('speaking')
  }

  const handleSkipWelcome = () => {
    setShowAudioPrompt(false)
    setSequenceState('completed')
  }

  // Don't show welcome sequence for returning visitors
  if (!isFirstVisit || sequenceState === 'completed') {
    return (
      <div className={className}>
        <RobotWithSpeech isSpeaking={false} />
      </div>
    )
  }

  return (
    <div className={className}>
      {/* Robot with Speech Effects */}
      <RobotWithSpeech 
        isSpeaking={sequenceState === 'speaking'}
        onSpeechStart={() => console.log('Speech animation started')}
        onSpeechEnd={() => console.log('Speech animation ended')}
      />

      {/* Audio Component */}
      {sequenceState === 'speaking' && audioEnabled && (
        <WelcomeAudio
          autoPlay={true}
          onPlay={handleAudioPlay}
          onEnded={handleAudioEnded}
          onError={handleAudioError}
        />
      )}

      {/* Audio Permission Prompt */}
      {showAudioPrompt && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-2xl">
            <div className="text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Welcome to QYI AI!
              </h3>
              <p className="text-gray-600 mb-6">
                Would you like to hear a welcome message from our AI assistant?
              </p>
              
              <div className="flex gap-3">
                <button
                  onClick={handleEnableAudio}
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  🔊 Yes, play audio
                </button>
                <button
                  onClick={handleSkipWelcome}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  Skip
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Loading State Indicator */}
      {sequenceState === 'loading' && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-black/80 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm">AI Assistant Loading...</span>
            </div>
          </div>
        </div>
      )}

      {/* Ready State Indicator */}
      {sequenceState === 'ready' && !showAudioPrompt && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-black/80 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm">AI Assistant Ready</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}