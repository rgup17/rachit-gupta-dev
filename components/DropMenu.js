import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import {
  HamburgerMenuIcon,
  HomeIcon,
  ArchiveIcon,
  PersonIcon,
  Link2Icon,
} from '@radix-ui/react-icons'
import Link from './Link'
import useSound from 'use-sound'

export default function DropMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  const [ThemeSound, { sound }] = useSound('/static/sounds/page-change.mp3', { volume: 0.5 })

  useEffect(() => {
    // Preload the sound to ensure it's ready
    if (sound) {
      sound.load()
    }
  }, [sound])

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState)

    // Ensure sound plays on first interaction
    if (sound) {
      sound.play()
    } else {
      ThemeSound()
    }
  }

  const closeMenu = () => {
    setIsOpen(false)

    // Play sound on close
    if (sound) {
      sound.play()
    } else {
      ThemeSound()
    }
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative z-10 inline-block text-left" ref={menuRef}>
      {/* Toggle Button */}
      <button
        onClick={toggleMenu}
        className="ml-2 cursor-pointer rounded-full bg-zinc-300 ring-zinc-400 transition-all hover:bg-violet-400 hover:ring-1 dark:bg-zinc-700 dark:ring-violet-700 dark:hover:bg-violet-600"
        aria-label="Toggle Menu"
      >
        <motion.div
          className="flex h-8 w-8 items-center justify-center p-2"
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.1 }}
        >
          <HamburgerMenuIcon className="h-4 w-4" />
        </motion.div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-zinc-300 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:divide-zinc-700 dark:bg-zinc-800"
        >
          <div className="py-1">
            {/* Home */}
            <Link
              href="/"
              onClick={closeMenu}
              className="block w-full px-4 py-2 text-left text-sm text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700"
            >
              <div className="flex flex-row">
                <HomeIcon className="mr-4 mt-0.5" /> Home
              </div>
            </Link>

            {/* Projects */}
            <Link
              href="/projects"
              onClick={closeMenu}
              className="block w-full px-4 py-2 text-left text-sm text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700"
            >
              <div className="flex flex-row">
                <ArchiveIcon className="mr-4 mt-0.5" /> Projects
              </div>
            </Link>

            {/* About */}
            <Link
              href="/about"
              onClick={closeMenu}
              className="block w-full px-4 py-2 text-left text-sm text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700"
            >
              <div className="flex flex-row">
                <PersonIcon className="mr-4 mt-0.5" /> About
              </div>
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              onClick={closeMenu}
              className="block w-full px-4 py-2 text-left text-sm text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700"
            >
              <div className="flex flex-row">
                <Link2Icon className="mr-4 mt-0.5" /> Contact
              </div>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  )
}
