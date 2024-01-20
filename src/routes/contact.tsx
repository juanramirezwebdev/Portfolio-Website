
import { FileRoute } from '@tanstack/react-router'

export const Route = new FileRoute('/contact').createRoute({
  component: ContactComponent,
})

function ContactComponent() {
  return (
    <div className="p-2">
      <h3>Contact</h3>
    </div>
  )
}