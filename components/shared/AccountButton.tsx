import Button from './Button'
import { User, ChevronDown } from 'lucide-react'

interface AccountButtonProps {
  onClick?: () => void
  fullWidth?: boolean
}

export default function AccountButton({ onClick, fullWidth = false }: AccountButtonProps) {
  return (
    <Button
      variant="primary"
      size="md"
      fullWidth={fullWidth}
      onClick={onClick}
      icon={
        <div 
          className="w-6 h-6 rounded-full flex items-center justify-center"
          style={{ background: '#DDD0DA' }}
        >
          <User size={14} style={{ color: '#571244' }} />
        </div>
      }
      iconPosition="left"
      className="gap-2 text-[16px] font-semibold h-[44px]"
    >
      Account
      <ChevronDown size={16} className="text-white" />
    </Button>
  )
}