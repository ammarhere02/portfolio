'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Play, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

interface MediaItem {
  type: 'image' | 'video'
  src: string
  title: string
  description?: string
}

interface ProjectMediaGalleryProps {
  isOpen: boolean
  onClose: () => void
  projectTitle: string
  mediaItems: MediaItem[]
}

export default function ProjectMediaGallery({
  isOpen,
  onClose,
  projectTitle,
  mediaItems
}: ProjectMediaGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Reset index when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0)
    }
  }, [isOpen])

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  const currentItem = mediaItems[currentIndex]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % mediaItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length)
  }

  return (
    <AnimatePresence>
      {isOpen && mediaItems.length > 0 && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
      <motion.div
        className="bg-white dark:bg-secondary-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-secondary-200 dark:border-secondary-700">
          <div>
            <h3 className="text-xl font-semibold text-secondary-900 dark:text-secondary-100">
              {projectTitle}
            </h3>
            <p className="text-sm text-secondary-600 dark:text-secondary-400">
              Project Preview ({currentIndex + 1} of {mediaItems.length})
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Content */}
        <div className="relative bg-secondary-50 dark:bg-secondary-900">
          <div className="aspect-video flex items-center justify-center">
            {currentItem?.type === 'image' ? (
              <img
                src={currentItem.src}
                alt={currentItem.title}
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-secondary-100 dark:bg-secondary-800">
                <div className="text-center">
                  <Play className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                  <p className="text-secondary-600 dark:text-secondary-400">
                    Video: {currentItem?.title}
                  </p>
                  <p className="text-sm text-secondary-500 dark:text-secondary-500 mt-2">
                    Click to view demo video
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Arrows */}
          {mediaItems.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-secondary-800/80 hover:bg-white dark:hover:bg-secondary-700 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-secondary-800/80 hover:bg-white dark:hover:bg-secondary-700 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Media Info */}
        <div className="p-6">
          <h4 className="font-semibold text-secondary-900 dark:text-secondary-100 mb-2">
            {currentItem?.title}
          </h4>
          {currentItem?.description && (
            <p className="text-secondary-600 dark:text-secondary-400">
              {currentItem.description}
            </p>
          )}

          {/* Thumbnails */}
          {mediaItems.length > 1 && (
            <div className="flex space-x-2 mt-4 overflow-x-auto">
              {mediaItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-colors ${
                    index === currentIndex
                      ? 'border-primary-500'
                      : 'border-secondary-200 dark:border-secondary-700'
                  }`}
                >
                  {item.type === 'image' ? (
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-secondary-100 dark:bg-secondary-700 flex items-center justify-center">
                      <Play className="w-4 h-4 text-primary-600" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}