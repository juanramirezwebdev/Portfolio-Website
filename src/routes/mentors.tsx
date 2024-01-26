import { FileRoute } from '@tanstack/react-router';
import people from '../data/mentors'
export const Route = new FileRoute('/mentors').createRoute({
  component: PdComponent,
})

function PdComponent() {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {people.map((person) => (
        <li key={person.linkYt} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500"><a href={person.linkYt}>{person.linkYt}</a></p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">{person.role}</p>
            
          </div>
        </li>
      ))}
    </ul>
  )}