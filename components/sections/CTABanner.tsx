import Link from 'next/link'

export default function CTABanner() {
  return (
    <section className="w-full overflow-hidden bg-white py-8 sm:py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-[1440px] mx-auto flex justify-center">
        <div 
          className="w-full max-w-[1134px] flex flex-col items-center justify-center"
          style={{
            background: '#571244',
            borderRadius: '8px',
            padding: '40px 64px',
            gap: '32px',
            minHeight: '220px',
          }}
        >
          {/* Text Content - Desktop */}
          <div 
            className="hidden sm:flex flex-col items-center text-center"
            style={{
              maxWidth: '1006px',
              gap: '4px',
            }}
          >
            <p 
              className="font-nunito font-semibold text-white"
              style={{
                fontSize: 'clamp(18px, 1.5vw, 20px)',
                lineHeight: '150%',
                letterSpacing: '3%',
                textAlign: 'center',
              }}
            >
              Want to accelerate professional growth and development at your organisation?
            </p>
            <p 
              className="font-nunito font-semibold text-white"
              style={{
                fontSize: 'clamp(18px, 1.5vw, 20px)',
                lineHeight: '150%',
                letterSpacing: '3%',
                textAlign: 'center',
              }}
            >
              See how we can help.
            </p>
          </div>

          {/* Text Content - Mobile */}
          <div 
            className="flex sm:hidden flex-col items-center text-center"
            style={{
              maxWidth: '327px',
              gap: '4px',
            }}
          >
            <p 
              className="font-nunito font-semibold text-white"
              style={{
                fontSize: '16px',
                lineHeight: '150%',
                letterSpacing: '3%',
                textAlign: 'center',
              }}
            >
              Don't just dream it—let's build it! Click now and start your project with Tobams Group. Your journey to digital excellence begins here.
            </p>
          </div>

          {/* Book a Consultation Button */}
          <Link href="/consultation">
            <div
              className="flex items-center justify-center font-nunito font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                background: '#FFFFFF',
                color: '#571244',
                padding: '12px 24px',
                borderRadius: '4px',
                fontSize: 'clamp(16px, 1vw, 18px)',
                lineHeight: '120%',
                letterSpacing: '0%',
                textAlign: 'center',
                minWidth: '200px',
                height: '48px',
              }}
            >
              Book a Consultation
            </div>
          </Link>

        </div>
      </div>
    </section>
  )
}