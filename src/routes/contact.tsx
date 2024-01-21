
import { FileRoute } from '@tanstack/react-router';
import contactLinks from '../data/contactData';
export const Route = new FileRoute('/contact').createRoute({
  component: ContactComponent,
})

function ContactComponent() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Find me on here !
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {contactLinks.map((contact) => (
            <article key={contact.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={contact.link}>
                    <span className="absolute inset-0" />
                    {contact.name}
                  </a>
                </h3>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src={contact.iconUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}