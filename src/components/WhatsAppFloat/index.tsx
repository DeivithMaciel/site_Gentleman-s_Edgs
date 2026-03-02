import { MessageCircle } from 'lucide-react'
import { FloatButton }  from './styles'

export const WhatsAppFloat = () => (
  <FloatButton
    href="https://wa.me/5551981458704"
    target="_blank"
  >
    <MessageCircle size={28} />
  </FloatButton>
)
