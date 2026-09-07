import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import LearningManagement from '@/components/sections/LearningManagement'
import CorporateTrainings from '@/components/sections/CorporateTrainings'
import ManagementDevelopment from '@/components/sections/ManagementDevelopment'
import LearningWithCEO from '@/components/sections/LearningWithCEO'
import TrainingConsultant from '@/components/sections/TrainingConsultant'
import Testimonials from '@/components/sections/Testimonials'
import CTABanner from '@/components/sections/CTABanner'
import GetInTouch from '@/components/sections/GetInTouch'

export default function Home() {
  return (
    <>
      <Navbar />
       <main className="pt-[104px] lg:pt-[173px]">
        <Hero />
        <LearningManagement />
        <CorporateTrainings />
        <ManagementDevelopment />
        <LearningWithCEO />
        <TrainingConsultant />
        <CTABanner />
        <Testimonials />
        <GetInTouch />
        
      </main>
      <Footer />
    </>
  )
}