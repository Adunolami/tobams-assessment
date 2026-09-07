import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Mail, Phone } from 'lucide-react'
import { footerData } from '@/lib/data'

// Simple SVG icons for social media - White background
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1D0617" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1D0617" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z"/>
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/>
  </svg>
)

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1D0617" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

export default function Footer() {
  return (
    <footer 
      className="w-full overflow-hidden"
      style={{
        background: '#11040E',
        paddingTop: '48px',
        paddingRight: '64px',
        paddingBottom: '32px',
        paddingLeft: '64px',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Main Footer Grid - First column takes more space */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Column 1: Logo & Description */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/Logo.png"
                alt="TOBAMS Group Logo"
                width={160}
                height={60}
                className="h-[50px] w-auto object-contain"
              />
            </Link>

            <p 
              className="text-[#F8F8F8]"
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(14px, 1vw, 16px)',
                lineHeight: '150%',
                letterSpacing: '3%',
                maxWidth: '356px',
              }}
            >
              {footerData.description}
            </p>

            <div className="flex items-center gap-3 mt-2">
              <Link
                href="#"
                className="flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                style={{
                  width: '40px',
                  height: '40px',
                  background: '#FFFFFF',
                  borderRadius: '50px',
                  padding: '10px',
                }}
                aria-label="Instagram"
              >
                <InstagramIcon />
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                style={{
                  width: '40px',
                  height: '40px',
                  background: '#FFFFFF',
                  borderRadius: '50px',
                  padding: '10px',
                }}
                aria-label="X (Twitter)"
              >
                <TwitterIcon />
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                style={{
                  width: '40px',
                  height: '40px',
                  background: '#FFFFFF',
                  borderRadius: '50px',
                  padding: '10px',
                }}
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </Link>
            </div>
          </div>

          {/* Column 2: What We Do */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 
              className="text-[#EF4353]"
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(18px, 1.1vw, 20px)',
                lineHeight: '100%',
                letterSpacing: '0%',
              }}
            >
              What We Do
            </h4>
            <ul className="flex flex-col gap-1.5">
              {footerData.whatWeDo.map((item, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-[#F8F8F8] transition-colors duration-200 hover:text-[#EF4353]"
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 400,
                      fontSize: 'clamp(13px, 0.9vw, 16px)',
                      lineHeight: '150%',
                      letterSpacing: '0%',
                    }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 
              className="text-[#EF4353]"
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(18px, 1.1vw, 20px)',
                lineHeight: '100%',
                letterSpacing: '0%',
              }}
            >
              Company
            </h4>
            <ul className="flex flex-col gap-1.5">
              {footerData.company.map((item, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-[#F8F8F8] transition-colors duration-200 hover:text-[#EF4353]"
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 400,
                      fontSize: 'clamp(13px, 0.9vw, 16px)',
                      lineHeight: '150%',
                      letterSpacing: '0%',
                    }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Solutions */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 
              className="text-[#EF4353]"
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(18px, 1.1vw, 20px)',
                lineHeight: '100%',
                letterSpacing: '0%',
              }}
            >
              Solutions
            </h4>
            <ul className="flex flex-col gap-1.5">
              {footerData.solutions.map((item, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-[#F8F8F8] transition-colors duration-200 hover:text-[#EF4353]"
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 400,
                      fontSize: 'clamp(13px, 0.9vw, 16px)',
                      lineHeight: '150%',
                      letterSpacing: '0%',
                    }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Registered Offices Section */}
        <div 
          className="flex flex-col gap-4 mt-8 pt-6 pb-4 px-6 rounded-lg"
          style={{
            background: '#FFFFFF0F',
            borderColor: 'rgba(255, 255, 255, 0.08)',
          }}
        >
          
          {/* ====== MOBILE VERSION (hidden on desktop) ====== */}
          <div className="flex flex-col gap-4 lg:hidden">
            {/* Contact Information - First on mobile */}
            <div className="flex flex-col gap-2 w-full">
              <h4 
                className="text-[#EF4353]"
                style={{
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(16px, 1.1vw, 18px)',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}
              >
                Contact Information
              </h4>
              <div className="flex items-center gap-2">
                <Mail size={18} color="#EF4353" />
                <span 
                  className="text-[#F8F8F8]"
                  style={{
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(13px,0.9vw,16px)',
                    lineHeight: '150%',
                    letterSpacing: '0%',
                  }}
                >
                  {footerData.contactInfo.email}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} color="#EF4353" />
                <span 
                  className="text-[#F8F8F8]"
                  style={{
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(13px,0.9vw,16px)',
                    lineHeight: '150%',
                    letterSpacing: '0%',
                  }}
                >
                  {footerData.contactInfo.phone}
                </span>
              </div>
            </div>

            {/* Registered Offices Heading - Second on mobile */}
            <h4 
              className="text-[#EF4353]"
              style={{
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(16px, 1.1vw, 20px)',
                lineHeight: '100%',
                letterSpacing: '0%',
              }}
            >
              Registered Offices
            </h4>

            {/* UK Office - Third on mobile */}
            <div className="flex items-start gap-3 w-full">
              <MapPin size={18} color="#EF4353" className="flex-shrink-0 mt-0.5" />
              <div>
                <p 
                  className="text-[#FFFFFF]"
                  style={{
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: 600,
                    fontSize: 'clamp(13px,0.9vw,16px)',
                    lineHeight: '150%',
                    letterSpacing: '0%',
                  }}
                >
                  United Kingdom
                </p>
                <p 
                  className="text-[#F8F8F8]"
                  style={{
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(13px,0.9vw,16px)',
                    lineHeight: '150%',
                    letterSpacing: '0%',
                  }}
                >
                  07451196 (Registered by Company House)
                </p>
                <p 
                  className="text-[#F8F8F8]"
                  style={{
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(13px,0.9vw,16px)',
                    lineHeight: '150%',
                    letterSpacing: '0%',
                  }}
                >
                  Vine Cottages, 215 North Street, Romford, Essex, United Kingdom, RM1 4QA
                </p>
              </div>
            </div>

            {/* Nigeria Office - Fourth on mobile */}
            <div className="flex items-start gap-3 w-full">
              <MapPin size={18} color="#EF4353" className="flex-shrink-0 mt-0.5" />
              <div>
                <p 
                  className="text-[#FFFFFF]"
                  style={{
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: 600,
                    fontSize: 'clamp(13px,0.9vw,16px)',
                    lineHeight: '150%',
                    letterSpacing: '0%',
                  }}
                >
                  Nigeria
                </p>
                <p 
                  className="text-[#F8F8F8]"
                  style={{
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(13px,0.9vw,16px)',
                    lineHeight: '150%',
                    letterSpacing: '0%',
                  }}
                >
                  RC 1048722 (Registered by the Corporate Affairs Commission)
                </p>
                <p 
                  className="text-[#F8F8F8]"
                  style={{
                    fontFamily: 'Nunito, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(13px,0.9vw,16px)',
                    lineHeight: '150%',
                    letterSpacing: '0%',
                  }}
                >
                  4, Muaz Close, Angwar-Rimi
                </p>
              </div>
            </div>
          </div>

          {/* ====== DESKTOP VERSION (hidden on mobile) ====== */}
          <div className="hidden lg:block">
            {/* Headers Row */}
            <div className="flex flex-row items-start justify-between w-full mb-4">
              <h4 
                className="text-[#EF4353]"
                style={{
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 700,
                  fontSize: '20px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}
              >
                Registered Offices
              </h4>
              <h4 
                className="text-[#EF4353]"
                style={{
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 700,
                  fontSize: '20px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}
              >
                Contact Information
              </h4>
            </div>

            {/* Content Row with Dividers */}
            <div className="flex flex-row items-start gap-0 w-full">
              
              {/* Column 1: UK Office */}
              <div className="flex-1 flex items-start gap-3">
                <MapPin size={18} color="#EF4353" className="flex-shrink-0 mt-0.5" />
                <div>
                  <p 
                    className="text-[#FFFFFF]"
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 600,
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: '0%',
                    }}
                  >
                    United Kingdom
                  </p>
                  <p 
                    className="text-[#F8F8F8]"
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: '0%',
                    }}
                  >
                    07451196 (Registered by Company House)
                  </p>
                  <p 
                    className="text-[#F8F8F8]"
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: '0%',
                    }}
                  >
                    Vine Cottages, 215 North Street, Romford, Essex, United Kingdom, RM1 4QA
                  </p>
                </div>
              </div>

              {/* Divider 1 */}
              <div 
                className="flex-shrink-0 mx-8"
                style={{
                  width: '1px',
                  height: '96px',
                  opacity: 0.12,
                  background: '#DDD0DA',
                }}
              />

              {/* Column 2: Nigeria Office */}
              <div className="flex-1 flex items-start gap-3">
                <MapPin size={18} color="#EF4353" className="flex-shrink-0 mt-0.5" />
                <div>
                  <p 
                    className="text-[#FFFFFF]"
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 600,
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: '0%',
                    }}
                  >
                    Nigeria
                  </p>
                  <p 
                    className="text-[#F8F8F8]"
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: '0%',
                    }}
                  >
                    RC 1048722 (Registered by the Corporate Affairs Commission)
                  </p>
                  <p 
                    className="text-[#F8F8F8]"
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: '0%',
                    }}
                  >
                    4, Muaz Close, Angwar-Rimi
                  </p>
                </div>
              </div>

              {/* Divider 2 */}
              <div 
                className="flex-shrink-0 mx-8"
                style={{
                  width: '1px',
                  height: '96px',
                  opacity: 0.12,
                  background: '#DDD0DA',
                }}
              />

              {/* Column 3: Contact Info Details */}
              <div className="flex-1 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Mail size={18} color="#EF4353" />
                  <span 
                    className="text-[#F8F8F8]"
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: '0%',
                    }}
                  >
                    {footerData.contactInfo.email}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={18} color="#EF4353" />
                  <span 
                    className="text-[#F8F8F8]"
                    style={{
                      fontFamily: 'Nunito, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: '0%',
                    }}
                  >
                    {footerData.contactInfo.phone}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div 
          className="flex flex-col lg:flex-row items-center lg:justify-between gap-4 mt-6 pt-4 border-t"
          style={{ borderColor: 'rgba(255, 255, 255, 0.08)' }}
        >
          {/* Legal Links - First on mobile, Right on desktop */}
          <div 
            className="flex flex-col lg:flex-row items-center justify-center lg:justify-end w-full lg:w-auto order-1 lg:order-2"
            style={{ gap: '8px' }}
          >
            {footerData.legalLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-[#FFFFFF] underline transition-colors duration-200 hover:text-[#EF4353]"
                style={{
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: 300,
                  fontSize: 'clamp(12px, 0.8vw, 16px)',
                  lineHeight: '36px',
                  letterSpacing: '0%',
                  textDecoration: 'underline',
                  textDecorationStyle: 'solid',
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Copyright - Second on mobile, Left on desktop */}
          <p 
            className="text-[#FFFFFF] text-center lg:text-left order-2 lg:order-1"
            style={{
              fontFamily: 'Nunito, sans-serif',
              fontWeight: 300,
              fontSize: 'clamp(12px, 0.8vw, 16px)',
              lineHeight: '24px',
              letterSpacing: '0%',
            }}
          >
            Copyright © Tobams Group, 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}