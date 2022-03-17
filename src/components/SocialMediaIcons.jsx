import { Facebook } from '../icons/Facebook'
import { Instagram } from '../icons/Instagram'
import { Twitter } from '../icons/Twitter'
import { Youtube } from '../icons/Youtube'
export function SocialMediaIcons () {
  return (
    <ul className='flex w-full'>
      <li className='w-16 h-16 grid place-items-center'>
        <a href='#'>
          <Facebook />
        </a>
      </li>
      <li className='w-16 h-16 grid place-items-center'>
        <a href='#'>
          <Twitter />
        </a>
      </li>
      <li className='w-16 h-16 grid place-items-center'>
        <a href='#'>
          <Youtube />
        </a>
      </li>
      <li className='w-16 h-16 grid place-items-center'>
        <a href='#'>
          <Instagram />
        </a>
      </li>
    </ul>
  )
}
