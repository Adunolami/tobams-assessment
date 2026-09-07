import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Button from '@/components/shared/Button'
import { lmsData } from '@/lib/data'

export default function LearningManagement() {
  return (
    <section className="section-spacing" style={{ background: '#5712441A' }}>
      <div className="container-professional">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          
          {/* Title - Mobile only (above image) */}
          <div className="lg:hidden order-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#571244] text-center mb-6">
              {lmsData.title}
            </h2>
          </div>

          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative mx-auto lg:mx-0 w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[556px] lg:h-[568px] rounded-full overflow-hidden shadow-2xl">
              <Image
                src="/images/learning.png"
                alt={lmsData.imageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-3 lg:order-2 space-y-5 sm:space-y-6 lg:space-y-8 px-2 sm:px-4 lg:px-0">
            
            {/* Title - Desktop only (hidden on mobile) */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#571244] text-center lg:text-left hidden lg:block">
              {lmsData.title}
            </h2>

            {/* Text Box - Same background as section */}
            <div 
              className="flex flex-col rounded-xl p-4 sm:p-6 lg:p-8 mx-0"
              style={{ background: '#5712441A' }}
            >
              <p className="text-[#151515] text-sm sm:text-base lg:text-lg leading-relaxed text-center lg:text-left">
                {lmsData.description}
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h3 className="font-bold text-[#571244] text-base sm:text-lg text-center lg:text-left">
                Some of our courses include:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 gap-y-1">
                {lmsData.courses.map((course, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-[#151515] text-sm sm:text-base">
                      • {course}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Link href={lmsData.ctaLink} className="inline-block mx-auto lg:mx-0">
              <Button variant="primary" size="md" icon={<ArrowUpRight size={20} />} iconPosition="right">
                Learn More
              </Button>
            </Link>

          </div>
        </div>
      </div>
    </section>
  )
}