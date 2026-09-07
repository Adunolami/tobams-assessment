import Link from 'next/link'
import Button from '@/components/shared/Button'
import { ArrowRight } from 'lucide-react'

export default function GetInTouch() {
  return (
    <section 
      className="w-full overflow-hidden"
      style={{
        background: '#1D0617',
        paddingTop: '40px',
        paddingRight: '64px',
        paddingBottom: '40px',
        paddingLeft: '64px',
      }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-10">
          
          {/* Text Content - Left aligned on all screens */}
          <div className="flex flex-col text-left w-full sm:w-auto">
            <p 
              className="font-nunito-sans font-regular text-[#FFFFFF]"
              style={{
                fontSize: 'clamp(14px, 1.2vw, 18px)',
                lineHeight: '150%',
                letterSpacing: '0%',
                marginBottom: '4px',
              }}
            >
              Ready to be a part of something extraordinary?
            </p>
            <h2 
              className="font-nunito font-semibold text-[#FFFFFF]"
              style={{
                fontSize: 'clamp(20px, 2.5vw, 32px)',
                lineHeight: '130%',
                letterSpacing: '0%',
              }}
            >
              Let's work together to create a difference
            </h2>
          </div>

          {/* Get In Touch Button - Auto width on mobile */}
          <div className="w-full sm:w-auto flex sm:justify-end">
            <Link href="/contact" className="sm:w-auto">
              <Button 
                variant="white" 
                size="sm"
                icon={<ArrowRight size={16} />}
                iconPosition="right"
                className="sm:w-auto text-[clamp(14px, 1vw, 18px)]"
                style={{
                  width: 'auto',
                  minWidth: '120px',
                  paddingLeft: '20px',
                  paddingRight: '20px',
                }}
              >
                Get In Touch
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}