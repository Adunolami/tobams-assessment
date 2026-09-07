import Button from './Button'
import { ArrowRight } from 'lucide-react'

interface TakeAssessmentButtonProps {
  onClick?: () => void
  fullWidth?: boolean
}

export default function TakeAssessmentButton({ 
  onClick, 
  fullWidth = false 
}: TakeAssessmentButtonProps) {
  return (
    <Button
      variant="secondary"
      size="md"
      fullWidth={fullWidth}
      onClick={onClick}
      icon={<ArrowRight size={16} className="text-white" />}
      iconPosition="right"
      className="gap-2 text-[16px] font-semibold h-[44px]"
    >
      Take Assessment
    </Button>
  )
}