import Image from 'next/image'
import { Zap } from 'lucide-react'
import { corporateTrainingsData } from '@/lib/data'

export default function CorporateTrainings() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-20">
        
        <div className="flex flex-col gap-16 lg:gap-24">
          
          {corporateTrainingsData.sections.map((section, index) => {
            const isImageLeft = section.imagePosition === 'left'
            
            return (
              <div 
                key={section.id}
                className="flex flex-col gap-6 lg:gap-16"
              >
                {/* Desktop Layout - Side by side */}
                <div className={`hidden lg:flex flex-row items-center gap-16 ${isImageLeft ? 'flex-row-reverse' : ''}`}>
                  {/* Image - Desktop */}
                  <div className="w-[602px] flex-shrink-0">
                    <div 
                      className="relative w-full overflow-hidden shadow-xl"
                      style={{
                        aspectRatio: '602 / 346',
                        borderRadius: '56px 24px 23px 12px',
                      }}
                    >
                      <Image
                        src={`/images/${section.imageFile}`}
                        alt={section.imageAlt}
                        fill
                        className="object-cover"
                        sizes="602px"
                        priority={index === 0}
                      />
                    </div>
                  </div>

                  {/* Content - Desktop */}
                  <div className="flex flex-col flex-1 gap-6">
                    <h2 
                      className="font-nunito font-semibold text-[#151515] text-left"
                      style={{
                        fontSize: '40px',
                        lineHeight: '1.3',
                        letterSpacing: '0.03em',
                      }}
                    >
                      {section.title}
                    </h2>
                    
                    <p 
                      className="font-nunito-sans text-[#696969] text-left"
                      style={{
                        fontSize: '18px',
                        lineHeight: '1.6',
                      }}
                    >
                      {section.description}
                    </p>
                    
                    <div className="flex flex-col gap-2 mt-2">
                      {section.courses.map((course, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Zap 
                            size={16} 
                            className="flex-shrink-0 mt-0.5"
                            style={{ color: '#1D0617' }}
                          />
                          <span 
                            className="font-nunito-sans text-[#696969]"
                            style={{
                              fontSize: '18px',
                              lineHeight: '1.6',
                            }}
                          >
                            {course}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile Layout - Stacked: Title → Image → Description → List */}
                <div className="flex flex-col gap-4 lg:hidden">
                  
                  {/* 1. Title - LEFT ALIGNED on mobile */}
                  <h2 
                    className="font-nunito font-semibold text-[#151515] text-left"
                    style={{
                      fontSize: '20px',
                      lineHeight: '1.3',
                      letterSpacing: '0.03em',
                    }}
                  >
                    {section.title}
                  </h2>
                  
                  {/* 2. Image */}
                  <div className="w-full">
                    <div 
                      className="relative w-full overflow-hidden shadow-lg"
                      style={{
                        aspectRatio: '327 / 229',
                        borderRadius: '30px 24px 23px 40px',
                      }}
                    >
                      <Image
                        src={`/images/${section.imageFile}`}
                        alt={section.imageAlt}
                        fill
                        className="object-cover"
                        sizes="100vw"
                      />
                    </div>
                  </div>
                  
                  {/* 3. Description - LEFT ALIGNED on mobile */}
                  <p 
                    className="font-nunito-sans text-[#696969] text-left"
                    style={{
                      fontSize: '14px',
                      lineHeight: '1.6',
                    }}
                  >
                    {section.description}
                  </p>
                  
                  {/* 4. Course List - LEFT ALIGNED on mobile */}
                  <div className="flex flex-col gap-2 mt-1">
                    {section.courses.map((course, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Zap 
                          size={14} 
                          className="flex-shrink-0 mt-0.5"
                          style={{ color: '#1D0617' }}
                        />
                        <span 
                          className="font-nunito-sans text-[#696969] text-left"
                          style={{
                            fontSize: '14px',
                            lineHeight: '1.6',
                          }}
                        >
                          {course}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                </div>
              </div>
            )
          })}
          
        </div>
      </div>
    </section>
  )
}