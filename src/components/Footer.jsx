import { Facebook } from '../icons/Facebook'
import { Twitter } from '../icons/Twitter'
import { Youtube } from '../icons/Youtube'
import { Instagram } from '../icons/Instagram'

export default function Footer () {
  return (
    <section className='h-screen max-w-5xl m-auto'>
      <h2 className='text-6xl pt-8'>Ableton</h2>
      <div className='grid grid-cols-3 grid-rows-2 py-16'>
        <div>
          <ul>
            <li><a href='#'>Register Live or Push &gt;</a></li>
            <li><a href='#'>About Ableton &gt;</a></li>
            <li><a href='#'>Jobs &gt;</a></li>
          </ul>
          <ul className='flex w-full'>
            <li className='max-w-sm'><a href='#'><Facebook /></a></li>
            <li className='max-w-sm'><a href='#'><Youtube /></a></li>
            <li className='max-w-sm'><a href='#'><Twitter /></a></li>
            <li className='max-w-sm'><a href='#'><Instagram /></a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
