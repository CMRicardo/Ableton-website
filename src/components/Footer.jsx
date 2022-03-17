import { SocialMediaIcons } from './SocialMediaIcons'
import { Logo } from '../icons/Logo'

export function Footer() {
  return (
    <section className='h-screen max-w-5xl m-auto'>
      <h2 className='text-6xl pt-8'>Ableton</h2>
      <div className='grid grid-cols-3 grid-rows-2 py-16 gap-y-20'>
        <div>
          <ul>
            <li><a href='#'>Register Live or Push &gt;</a></li>
            <li><a href='#'>About Ableton &gt;</a></li>
            <li><a href='#'>Jobs &gt;</a></li>
          </ul>
          <SocialMediaIcons />
        </div>
        <div>
          <h3 className='font-bold'>Education</h3>
          <ul>
            <li>
              <a href='#'>Offers for students and teachers &gt;</a>
            </li>
            <li>
              <a href='#'>Ableton for the Classroom &gt;</a>
            </li>
            <li>
              <a href='#'>Ableton for Colleges and Universities &gt;</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='font-bold'>Sign up to our newsletter</h3>
          <ul className='grid gap-4'>
            <li>
              <a href='#'>Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.</a>
            </li>
            <li>
              <form className='flex text-lg'>
                <input type='email' placeholder='Email Address' className='bg-slate-100 py-1 px-2 ' />
                <button className='bg-[#0000ff] px-4 py-2 text-white'>Sign up</button>
              </form>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='font-bold'>Community</h3>
          <ul>
            <li>
              <a href='#'>Find Ableton User Groups &gt;</a>
            </li>
            <li>
              <a href='#'>Find Certified Training &gt;</a>
            </li>
            <li>
              <a href='#'>Become a Certified Trainer &gt;</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='font-bold'>Distributors</h3>
          <ul>
            <li>
              <a href='#'>Find Distributors &gt;</a>
            </li>
            <li>
              <a href='#'>Try Push in-store &gt;</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='font-bold'>Language and Location</h3>
          <ul>
            <li>
              <form className='grid grid-cols-2 gap-1 text-sm'>
                <select name='Language' className='p-1 bg-slate-200'>
                  <option value='English'>English</option>
                  <option value='English'>Deutsh</option>
                  <option value='English'>Français</option>
                  <option value='English'>Español</option>
                </select>
                <select name='Country' className='p-1 bg-slate-200'>
                  <option value='Honduras'>Honduras</option>
                  <option value='USA'>USA</option>
                  <option value='Canada'>Canada</option>
                  <option value='Mexico'>Mexico</option>
                </select>
              </form>
            </li>
          </ul>
        </div>
      </div>
      <footer className='text-xs flex justify-between'>
        <ul className='flex gap-4'>
          <li><a href='#'>Contact Us</a></li>
          <li><a href='#'>Press Resources</a></li>
          <li><a href='#'>Legal Info</a></li>
          <li><a href='#'>Privacy Policy</a></li>
          <li><a href='#'>Cookie Settings</a></li>
          <li><a href='#'>Imprint</a></li>
        </ul>
        <div className='flex gap-4'>
          <a href='#'>Made in Berlin</a>
          <a href='#' className='w-auto'>
            <Logo />
          </a>
        </div>
      </footer>
    </section>
  )
}
