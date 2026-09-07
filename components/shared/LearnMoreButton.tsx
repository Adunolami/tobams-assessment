import Button from './Button'
import { ArrowUpRight } from 'lucide-react'

interface LearnMoreButtonProps {
  onClick?: () => void
  fullWidth?: boolean
  variant?: 'primary' | 'outline' | 'white'
}

export default function LearnMoreButton({ 
  onClick, 
  fullWidth = false,
  variant = 'primary'
}: LearnMoreButtonProps) {
  return (
    <Button
      variant={variant}
      size="md"
      fullWidth={fullWidth}
      onClick={onClick}
      icon={<ArrowUpRight size={20} />}
      iconPosition="right"
      className="gap-2"
    >
      Learn More
    </Button>
  )
}