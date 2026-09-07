'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonialsData } from '@/lib/data'

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    const container = scrollContainerRef.current
    if (!container) return

    setCanScrollLeft(container.scrollLeft > 10)
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10
    )
  }

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current
    if (!container) return

    const cardWidth = container.clientWidth * 0.85
    const newScrollLeft = direction === 'left' 
      ? container.scrollLeft - cardWidth 
      : container.scrollLeft + cardWidth

    container.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      setTimeout(checkScroll, 100)
      container.addEventListener('scroll', checkScroll)
      window.addEventListener('resize', checkScroll)
      return () => {
        container.removeEventListener('scroll', checkScroll)
        window.removeEventListener('resize', checkScroll)
      }
    }
  }, [])

  return (
    <section 
      className="w-full overflow-hidden"
      style={{
        paddingTop: '64px',
        paddingBottom: '64px',
        borderBottom: '1px solid #C4C4C44D',
        background: '#FFFFFF',
      }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        
        {/* Title */}
        <div className="flex justify-center mb-10 lg:mb-12">
          <h2 
            className="font-nunito font-bold text-[#151515] text-center"
            style={{
              fontSize: 'clamp(28px, 3vw, 40px)',
              lineHeight: '130%',
              letterSpacing: '0%',
            }}
          >
            Testimonials
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth py-2"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {testimonialsData.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0"
                style={{
                  width: 'min(422px, calc(100% - 16px))',
                  padding: '24px 28px',
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  borderLeft: '2px solid #EF4353',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  minHeight: '244px',
                }}
              >
                {/* Avatar & Name */}
                <div className="flex items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, #571244, #EF4353)',
                    }}
                  >
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                      onError={(e) => {
                        const target = e.currentTarget
                        target.style.display = 'none'
                        const parent = target.parentElement
                        if (parent) {
                          const span = document.createElement('span')
                          span.className = 'w-full h-full flex items-center justify-center text-white font-bold text-lg'
                          span.textContent = testimonial.name.charAt(0)
                          parent.appendChild(span)
                        }
                      }}
                    />
                  </div>
                  
                  <div>
                    <p 
                      className="font-nunito-sans font-semibold text-[#151515]"
                      style={{
                        fontSize: '16px',
                        lineHeight: '150%',
                        letterSpacing: '0%',
                        marginBottom: '2px',
                      }}
                    >
                      {testimonial.name}
                    </p>
                    <p 
                      className="font-nunito-sans font-regular text-[#696969]"
                      style={{
                        fontSize: '14px',
                        lineHeight: '150%',
                        letterSpacing: '0%',
                      }}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Spacing between rows */}
                <div style={{ height: '20px' }} />

                {/* Testimony Content - EXACT TEXT STYLING */}
                <div>
                  <p 
                    className="font-nunito-sans text-[#151515]"
                    style={{
                      fontFamily: 'Nunito Sans, sans-serif',
                      fontWeight: 400,
                      fontSize: 'clamp(14px, 1.1vw, 18px)',
                      lineHeight: '150%',
                      letterSpacing: '0%',
                    }}
                  >
                    {testimonial.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls - Right Aligned */}
        <div className="flex items-center justify-end gap-3 mt-6">
          <button
            onClick={() => scroll('left')}
            className={`flex items-center justify-center transition-all duration-300 ${
              !canScrollLeft 
                ? 'opacity-40 cursor-not-allowed' 
                : 'hover:scale-110 hover:shadow-md'
            }`}
            style={{
              width: '32px',
              height: '32px',
              background: '#F043541A',
              borderRadius: '8px',
              border: 'none',
              cursor: canScrollLeft ? 'pointer' : 'default',
              opacity: canScrollLeft ? 1 : 0.4,
            }}
            disabled={!canScrollLeft}
            aria-label="Previous testimonials"
          >
            <ChevronLeft 
              size={18} 
              color="#EF4353"
              strokeWidth={2.5} 
            />
          </button>

          <button
            onClick={() => scroll('right')}
            className={`flex items-center justify-center transition-all duration-300 ${
              !canScrollRight 
                ? 'opacity-40 cursor-not-allowed' 
                : 'hover:scale-110 hover:shadow-md'
            }`}
            style={{
              width: '32px',
              height: '32px',
              background: '#F043541A',
              borderRadius: '8px',
              border: 'none',
              cursor: canScrollRight ? 'pointer' : 'default',
              opacity: canScrollRight ? 1 : 0.4,
            }}
            disabled={!canScrollRight}
            aria-label="Next testimonials"
          >
            <ChevronRight 
              size={18} 
              color="#EF4353"
              strokeWidth={2.5} 
            />
          </button>
        </div>
      </div>
    </section>
  )
}