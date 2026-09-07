import Image from 'next/image'
import { Zap } from 'lucide-react'
import { managementData } from '@/lib/data'

export default function ManagementDevelopment() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-[1440px] mx-auto">
        <div 
          className="w-full rounded-[20px] p-6 sm:p-8 lg:p-10"
          style={{ background: '#2C0922' }}
        >
          
          {/* Desktop Layout */}
          <div className="hidden lg:flex flex-row items-start gap-12 max-w-[1232px] mx-auto">
            
            {/* Image - Left */}
            <div className="w-[592px] flex-shrink-0">
              <div 
                className="relative w-full overflow-hidden shadow-xl"
                style={{
                  aspectRatio: '592 / 639',
                  borderRadius: '8px',
                }}
              >
                <Image
                  src="/images/Management.png"
                  alt="Management Development Program"
                  fill
                  className="object-cover"
                  sizes="592px"
                  priority
                />
              </div>
            </div>

            {/* Content - Right */}
            <div className="flex flex-col w-[592px] gap-8">
              
              {/* Title */}
              <h2 
                className="font-nunito font-semibold text-white"
                style={{
                  fontSize: '40px',
                  lineHeight: '1.5',
                  letterSpacing: '0.03em',
                }}
              >
                {managementData.title}
              </h2>
              
              {/* Description */}
              <div className="flex flex-col gap-4">
                <p 
                  className="font-nunito-sans text-white/90"
                  style={{
                    fontSize: '18px',
                    lineHeight: '1.5',
                  }}
                >
                  {managementData.description}
                </p>
                <p 
                  className="font-nunito-sans text-white/80"
                  style={{
                    fontSize: '18px',
                    lineHeight: '1.5',
                  }}
                >
                  {managementData.description2}
                </p>
              </div>
              
              {/* Feature Cards */}
              <div className="flex flex-col gap-3 pt-2">
                {managementData.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-3 px-5 rounded-[8px] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                    style={{
                      background: '#8F6182',
                    }}
                  >
                    <div 
                      className="flex items-center justify-center flex-shrink-0"
                      style={{
                        width: '28px',
                        height: '28px',
                      }}
                    >
                      <Zap size={20} color="#FFFFFF" />
                    </div>
                    <span 
                      className="font-nunito-sans font-semibold text-white"
                      style={{
                        fontSize: '18px',
                        lineHeight: '1.5',
                      }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex flex-col gap-4 lg:hidden max-w-[327px] mx-auto">
            
            {/* Title - First on mobile */}
            <h2 
              className="font-nunito font-semibold text-white text-left"
              style={{
                fontSize: '16px',
                lineHeight: '1.5',
                letterSpacing: '0.03em',
              }}
            >
              {managementData.title}
            </h2>
            
            {/* Image - Second on mobile */}
            <div className="w-full">
              <div 
                className="relative w-full overflow-hidden shadow-lg"
                style={{
                  aspectRatio: '287 / 232',
                  borderRadius: '8px',
                }}
              >
                <Image
                  src="/images/Management.png"
                  alt="Management Development Program"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            </div>
            
            {/* Description - Third on mobile */}
            <div className="flex flex-col gap-3">
              <p 
                className="font-nunito-sans text-white/90 text-left"
                style={{
                  fontSize: '14px',
                  lineHeight: '1.5',
                }}
              >
                {managementData.description}
              </p>
              <p 
                className="font-nunito-sans text-white/80 text-left"
                style={{
                  fontSize: '14px',
                  lineHeight: '1.5',
                }}
              >
                {managementData.description2}
              </p>
            </div>
            
            {/* Features - Fourth on mobile */}
            <div className="flex flex-col gap-2 mt-1">
              {managementData.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-2.5 px-4 rounded-[8px]"
                  style={{
                    background: '#8F6182',
                  }}
                >
                  <div 
                    className="flex items-center justify-center flex-shrink-0"
                    style={{
                      width: '22px',
                      height: '22px',
                    }}
                  >
                    <Zap size={15} color="#FFFFFF" />
                  </div>
                  <span 
                    className="font-nunito-sans font-semibold text-white text-left"
                    style={{
                      fontSize: '14px',
                      lineHeight: '1.5',
                    }}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}