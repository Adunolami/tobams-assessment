import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Play, Zap } from 'lucide-react'
import { ceoData } from '@/lib/data'
import Button from '@/components/shared/Button'

export default function LearningWithCEO() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-[1440px] mx-auto">
        <div 
          className="w-full rounded-[16px] p-4 sm:p-6 lg:p-10"
          style={{ background: '#EF435333' }}
        >
          <div className="flex flex-col gap-6 lg:gap-12 max-w-[1232px] mx-auto">
            
            {/* Header */}
            <div className="flex flex-col gap-1 lg:gap-2">
              <span 
                className="font-nunito font-semibold italic text-left"
                style={{
                  fontSize: 'clamp(14px, 1.2vw, 20px)',
                  lineHeight: '1.3',
                  color: '#1671D9',
                }}
              >
                {ceoData.subtitle}
              </span>
              <h2 
                className="font-nunito font-semibold italic text-left"
                style={{
                  fontSize: 'clamp(20px, 2.5vw, 32px)',
                  lineHeight: '1.3',
                  color: '#571244',
                }}
              >
                {ceoData.title}
              </h2>
              <p 
                className="font-nunito-sans text-[#151515] text-left"
                style={{
                  fontSize: 'clamp(14px, 1.1vw, 18px)',
                  lineHeight: '1.5',
                }}
              >
                {ceoData.description}
              </p>
            </div>

            {/* Content Grid */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              
              {/* Image - Left */}
              <div className="w-full lg:w-[560px] flex-shrink-0">
                <div 
                  className="relative w-full overflow-hidden shadow-lg"
                  style={{
                    aspectRatio: '560 / 340',
                    borderRadius: '8px',
                  }}
                >
                  <Image
                    src="/images/Transformation.png"
                    alt={ceoData.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 560px"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group cursor-pointer">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl"
                      style={{
                        background: 'rgba(87, 18, 68, 0.85)',
                        backdropFilter: 'blur(4px)',
                      }}
                    >
                      <Play size={28} className="text-white ml-1" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Topics - Right with #FFFFFF4D background */}
              <div 
                className="flex-1 flex flex-col gap-4 lg:gap-5 p-4 sm:p-5 lg:p-6 rounded-[8px]"
                style={{
                  background: '#FFFFFF4D',
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ceoData.topics.map((topic, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-[8px] transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                      style={{
                        background: '#FFFFFF',
                      }}
                    >
                      {/* Zap Icon WITH Background */}
                      <div 
                        className="flex items-center justify-center flex-shrink-0"
                        style={{
                          width: '24px',
                          height: '24px',
                          background: '#1D0617',
                          borderRadius: '4px',
                        }}
                      >
                        <Zap size={14} color="#FFFFFF" />
                      </div>
                      <span 
                        className="font-nunito-sans text-[#151515] text-left"
                        style={{
                          fontSize: 'clamp(14px, 1.1vw, 18px)',
                          lineHeight: '1.5',
                        }}
                      >
                        {topic}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Learn More Button */}
                <Link href={ceoData.ctaLink} className="inline-block mt-1">
                  <Button 
                    variant="primary" 
                    size="md" 
                    icon={<ArrowUpRight size={20} />} 
                    iconPosition="right"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}