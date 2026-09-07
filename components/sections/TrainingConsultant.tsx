import { consultantData } from '@/lib/data'
import Button from '@/components/shared/Button'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function TrainingConsultant() {
  return (
    <section 
      className="w-full overflow-hidden"
      style={{
        background: '#5712441A',
        paddingTop: '48px',
        paddingRight: '64px',
        paddingBottom: '48px',
        paddingLeft: '64px',
      }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div 
          className="flex flex-col"
          style={{
            gap: '40px',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          {/* Header - Left Aligned */}
          <div className="flex flex-col text-left" style={{ gap: '8px' }}>
            <h2 
              className="font-nunito font-semibold text-[#571244]"
              style={{
                fontSize: 'clamp(24px, 4vw, 40px)',
                lineHeight: '130%',
              }}
            >
              {consultantData.title}
            </h2>
            
            <p 
              className="font-nunito-sans font-semibold text-[#571244]"
              style={{
                fontSize: 'clamp(14px, 1.2vw, 18px)',
                lineHeight: '150%',
              }}
            >
              {consultantData.subtitle}
            </p>
            
            <p 
              className="font-nunito-sans text-[#151515]"
              style={{
                fontSize: 'clamp(14px, 1.1vw, 18px)',
                lineHeight: '150%',
                maxWidth: '100%',
              }}
            >
              {consultantData.description}
            </p>
          </div>

          {/* Single Box - Smaller width */}
          <div 
            className="w-full"
            style={{
              background: '#571244',
              borderRadius: '8px',
              padding: '32px 40px',
              maxWidth: '1000px',
              margin: '0 auto',
            }}
          >
            {/* 2x2 Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {consultantData.features.map((feature, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col"
                    style={{
                      gap: '6px',
                      maxWidth: '440px',
                    }}
                  >
                    {/* Title */}
                    <h3 
                      className="font-nunito-sans text-white"
                      style={{
                        fontFamily: 'Nunito Sans, sans-serif',
                        fontWeight: 700,
                        fontSize: 'clamp(16px, 1.1vw, 18px)',
                        lineHeight: '150%',
                        letterSpacing: '0%',
                      }}
                    >
                      {feature.title}
                    </h3>
                    
                    {/* Description */}
                    <p 
                      className="font-nunito-sans text-white/90"
                      style={{
                        fontFamily: 'Nunito Sans, sans-serif',
                        fontWeight: 400,
                        fontSize: 'clamp(14px, 1vw, 18px)',
                        lineHeight: '150%',
                        letterSpacing: '0%',
                        maxWidth: '100%',
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word',
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Learn More Button */}
          <Link href={consultantData.ctaLink} className="inline-block">
            <Button 
              variant="primary" 
              size="md" 
              icon={<ArrowUpRight size={20} />} 
              iconPosition="right"
            >
              {consultantData.ctaText}
            </Button>
          </Link>

        </div>
      </div>
    </section>
  )
}