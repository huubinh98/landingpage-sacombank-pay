import { MENU } from "../constants"

function NavMobile({ activeNav }: { activeNav: boolean }) {
  const classComponent = 'bg-sky-700 w-full md:w-1/2 h-screen fixed nav__mobile z-[100] right-0 flex justify-center'
  return (
    <nav className={activeNav ? `translate-x-0 opacity-100 transition-all ${classComponent}` : `translate-x-full opacity-0  ${classComponent}`}>
      <ul className="pt-10 text-center">
        {MENU.map((item, index) => (
          <li key={index} className="py-3">
            <a href="" className="text-white font-bold">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavMobile