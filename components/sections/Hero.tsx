import Image from 'next/image'
import Link from 'next/link'
import { heroData } from '@/lib/data'

export default function Hero() {
  return (
    <section className="relative min-h-[511px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/Hero.jpg"
          alt="Training and Development - Professional learning environment"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Overlay - #000000B2 */}
      <div 
        className="absolute inset-0"
        style={{ 
          background: 'rgba(0, 0, 0, 0.70)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto w-full px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col items-center text-center max-w-[1312px] mx-auto">
          {/* Tag - WHAT WE DO - FIXED */}
          <div 
            className="flex items-center justify-center text-white font-semibold text-center mb-[15px] sm:mb-[15px] whitespace-nowrap"
            style={{
              padding: '12px 48px',
              gap: '10px',
              background: '#FFFFFF1A',
              borderRadius: '100px',
              border: '1px solid rgba(255, 255, 255, 0.10)',
              opacity: 1,
              display: 'inline-flex',
              width: 'auto',
              minWidth: '193px',
              height: '45px',
            }}
          >
            <span 
              className="font-semibold text-center"
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '150%',
                letterSpacing: '3%',
                textAlign: 'center',
                color: '#FFFFFF',
                opacity: 1,
                whiteSpace: 'nowrap',
              }}
            >
              {heroData.tag}
            </span>
          </div>

          {/* Title & Description Container */}
          <div 
            className="flex flex-col items-center"
            style={{
              width: '100%',
              maxWidth: '1312px',
              gap: '12px',
              opacity: 1,
            }}
          >
            {/* Title */}
            <h1 
              className="font-bold text-center text-white"
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(24px, 5vw, 56px)',
                lineHeight: '130%',
                letterSpacing: '0%',
                textAlign: 'center',
                maxWidth: '100%',
                opacity: 1,
              }}
            >
              Training and Development
            </h1>

            {/* Description */}
            <p 
              className="font-semibold text-center text-white"
              style={{
                fontFamily: 'Nunito Sans, sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(14px, 1.5vw, 18px)',
                lineHeight: '150%',
                letterSpacing: '0%',
                textAlign: 'center',
                maxWidth: '100%',
                opacity: 1,
              }}
            >
              Our comprehensive range of programs and resources is designed to enhance skills, 
              broaden knowledge, and propel careers forward in today's ever-evolving landscape.
            </p>
          </div>

          {/* Button */}
          <Link
            href={heroData.ctaLink}
            className="flex items-center justify-center font-semibold text-center text-white transition-all duration-300 hover:scale-105 hover:shadow-lg mt-[20px] sm:mt-[40px]"
            style={{
              fontFamily: 'Nunito Sans, sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(14px, 1.5vw, 18px)',
              lineHeight: '150%',
              letterSpacing: '0%',
              textAlign: 'center',
              width: 'clamp(173px, 20vw, 214px)',
              height: 'clamp(40px, 5vh, 48px)',
              padding: '11.5px 22px',
              gap: '10px',
              background: '#571244',
              borderRadius: '4px',
              opacity: 1,
            }}
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  )
}