import Button from './Button'
import { Calendar, ArrowRight } from 'lucide-react'

interface BookConsultationButtonProps {
  onClick?: () => void
  fullWidth?: boolean
  variant?: 'primary' | 'secondary' | 'white'
}

export default function BookConsultationButton({ 
  onClick, 
  fullWidth = false,
  variant = 'primary'
}: BookConsultationButtonProps) {
  return (
    <Button
      variant={variant}
      size="lg"
      fullWidth={fullWidth}
      onClick={onClick}
      icon={<Calendar size={18} />}
      iconPosition="left"
    >
      Book a Consultation
    </Button>
  )
}