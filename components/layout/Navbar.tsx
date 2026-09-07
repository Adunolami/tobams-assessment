'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import AccountButton from '@/components/shared/AccountButton'
import TakeAssessmentButton from '@/components/shared/TakeAssessmentButton'
import { navLinks } from '@/lib/data'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('')
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Close dropdown when pressing Escape key
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenDropdown(null)
      }
    }

    document.addEventListener('keydown', handleEscKey)
    return () => {
      document.removeEventListener('keydown', handleEscKey)
    }
  }, [])

  const handleLinkClick = (linkName: string, e: React.MouseEvent) => {
    const link = navLinks.find(l => l.name === linkName)
    if (link?.hasDropdown) {
      e.preventDefault()
      setOpenDropdown(openDropdown === linkName ? null : linkName)
    }
    setActiveLink(linkName)
    if (isOpen) setIsOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#E5E5E5] shadow-sm">
      {/* Main Navigation */}
      <div className="flex items-center justify-between px-4 sm:px-8 lg:px-16 h-[104px]">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0" onClick={() => setActiveLink('')}>
          <img 
            src="/images/Logo.png" 
            alt="TOBAMS Group - Training & Development" 
            className="h-[60px] w-auto object-contain"
          />
        </Link>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <AccountButton />
          <TakeAssessmentButton />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded transition-colors hover:opacity-80"
          style={{ background: '#571244' }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <Menu size={24} className="text-white" />
          )}
        </button>
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden lg:flex items-center justify-center px-16 h-[69px] border-t border-[#E5E5E5] bg-white">
        <ul className="flex items-center gap-8 flex-wrap justify-center">
          {navLinks.map((link) => {
            const isActive = activeLink === link.name
            const isDropdownOpen = openDropdown === link.name

            return (
              <li key={link.name} className="relative">
                <div
                  ref={link.hasDropdown ? dropdownRef : null}
                  className="relative"
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 transition-colors duration-200"
                    style={{
                      fontFamily: 'Nunito Sans, sans-serif',
                      fontWeight: 400,
                      fontSize: '18px',
                      lineHeight: '150%',
                      color: isActive ? '#571244' : '#151515',
                      paddingBottom: '2px',
                      borderBottom: isActive ? '2px solid #571244' : '2px solid transparent',
                      textDecoration: 'none',
                    }}
                    onClick={(e) => handleLinkClick(link.name, e)}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.color = '#571244'
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.color = '#151515'
                    }}
                  >
                    <span>{link.name}</span>
                    {link.hasDropdown && (
                      <ChevronDown
                        size={16}
                        className="transition-transform duration-300"
                        style={{
                          color: isActive ? '#571244' : '#151515',
                          transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {link.hasDropdown && isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 bg-white border border-[#E5E5E5] rounded shadow-lg py-2 min-w-[220px] z-50">
                      <div className="px-4 py-2.5 text-[#151515] hover:text-[#571244] hover:bg-[#571244]/5 cursor-pointer transition-colors text-sm">
                        Sub Item 1
                      </div>
                      <div className="px-4 py-2.5 text-[#151515] hover:text-[#571244] hover:bg-[#571244]/5 cursor-pointer transition-colors text-sm">
                        Sub Item 2
                      </div>
                      <div className="px-4 py-2.5 text-[#151515] hover:text-[#571244] hover:bg-[#571244]/5 cursor-pointer transition-colors text-sm">
                        Sub Item 3
                      </div>
                    </div>
                  )}
                </div>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-[#E5E5E5] py-6 px-4 sm:px-8 max-h-[calc(100vh-104px)] overflow-y-auto">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isDropdownOpen = openDropdown === link.name

              return (
                <li key={link.name}>
                  <button
                    className="w-full flex items-center justify-between py-3 text-[16px] font-medium text-[#151515] hover:text-[#571244] transition-colors border-b border-[#f0f0f0]"
                    onClick={(e) => {
                      if (link.hasDropdown) {
                        e.preventDefault()
                        setOpenDropdown(isDropdownOpen ? null : link.name)
                      }
                      setActiveLink(link.name)
                      if (!link.hasDropdown) setIsOpen(false)
                    }}
                  >
                    <span>{link.name}</span>
                    {link.hasDropdown && (
                      <ChevronDown
                        size={18}
                        className="transition-transform duration-300"
                        style={{
                          transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                      />
                    )}
                  </button>

                  {/* Mobile Dropdown */}
                  {link.hasDropdown && isDropdownOpen && (
                    <ul className="pl-4 mt-1 space-y-1 border-l-2 border-[#571244]/20">
                      <li className="py-2.5 px-3 text-[14px] text-[#696969] hover:text-[#571244] hover:bg-[#571244]/5 rounded transition-colors cursor-pointer">
                        Sub Item 1
                      </li>
                      <li className="py-2.5 px-3 text-[14px] text-[#696969] hover:text-[#571244] hover:bg-[#571244]/5 rounded transition-colors cursor-pointer">
                        Sub Item 2
                      </li>
                      <li className="py-2.5 px-3 text-[14px] text-[#696969] hover:text-[#571244] hover:bg-[#571244]/5 rounded transition-colors cursor-pointer">
                        Sub Item 3
                      </li>
                    </ul>
                  )}
                </li>
              )
            })}

            {/* Mobile Actions */}
            <li className="pt-4 mt-2 border-t border-[#E5E5E5] flex flex-col gap-3">
              <AccountButton fullWidth />
              <TakeAssessmentButton fullWidth />
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}