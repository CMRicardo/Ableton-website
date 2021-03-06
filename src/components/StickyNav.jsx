export function StickyNav() {
  return (
    <nav className='py-4 px-10 font-bold text-sm sticky top-0 bg-white opacity-80 z-20'>
      <ul className='flex list-none gap-8'>
        <li>
          <a href='#' className='text-[#fd5948]'>
            About
          </a>
        </li>
        <li>
          <a href='#'>Jobs</a>
        </li>
        <li>
          <a href='#'>Apprenticeship</a>
        </li>
      </ul>
    </nav>
  )
}
