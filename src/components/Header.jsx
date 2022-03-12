import Logo from '../icons/Logo.jsx'

export function Header () {
  return (
    <header className="shadow-md h-16 w-full py-4 px-10 gap-4 flex place-items-center" >
      <a className="w-auto" >
        <Logo />
      </a>
      <nav className="flex w-full" >
        <ul className="flex gap-6 text-xl" >
          <li><a href="/">Live</a></li>
          <li><a href="/">Push</a></li>
          <li><a href="/">Link</a></li>
          <li><a href="/">Shop</a></li>
          <li><a href="/">Packs</a></li>
          <li><a href="/">Help</a></li>
          <li><a href="/" className="text-[#fd5948]" >More <span>+</span></a></li>
        </ul>
      </nav>
      <nav className="w-full" >
        <ul className="flex justify-end gap-6" >
          <li><a href="/" className="text-blue-800 text-xl" >Try Live for free</a></li>
          <li><a href="/" className="text-sm font-bold" >Log in or register</a></li>
        </ul>
      </nav>
    </header>
  )
}
