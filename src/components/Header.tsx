import { useEffect, useState } from "react";
import { MENU } from "../constants";
import NavMobile from "./NavMobile";

function Header() {
  const [lang, setLang] = useState('Tiếng Việt')
  const [isActive, setIsActive] = useState(false)
  const [activeNav, setActiveNav] = useState(false);

  function handleSetLang(value: string) {
    setLang(value)
    setIsActive(!isActive)
  }

  useEffect(() => {
    if (activeNav) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [activeNav])

  return (
    <header className="w-full bg-sky-700 h-20">
      <div className="container mx-auto h-full">
        <div className="flex justify-between items-center h-full">
          <a href="https://www.sacombank.com.vn/" className="flex-1 lg: flex-initial">
            <img src="/images/Logo.png" alt="sacombank logo" />
          </a>
          <ul className=" hidden lg:flex justify-between items-center gap-8">
            {MENU.map((item, index) => (
              <li key={index}>
                <a href="" className="text-white">
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-2">
            <div className="flex gap-2 relative w-32">
              <img src="/images/lang.png" alt="lang sacombank" />
              <div className="flex flex-1 w-full items-center gap-2 cursor-pointer" onClick={() => setIsActive(!isActive)}>
                <span className="text-white">
                  {lang}
                </span>
                <img src="/images/drop.png" alt="icon drop sacombank" className="h-fit" />
              </div>
              {isActive &&
                <ul className="bg-white absolute z-10 -bottom-24 left-1 w-full px-4">
                  <li className="cursor-pointer py-2" onClick={() => handleSetLang('Tiếng Việt')}>Tiếng Việt</li>
                  <li className="cursor-pointer py-2" onClick={() => handleSetLang('English')}>English</li>
                </ul>
              }
              {/* <select name="1" className="bg-transparent border-none text-white">
            <option value="1">
              Tiếng Việt
            </option>
            <option value="2">
              English
            </option>
          </select> */}
            </div>
            <div className="hamburger lg:hidden" onClick={() => setActiveNav(!activeNav)}>
              <span className="w-8 h-0.5 bg-white block absolute top-1/2 -translate-y-1/2"></span>
            </div>
          </div>
        </div>
      </div>
      {activeNav &&
        <div className={activeNav
          ? 'bg-gray-300 opacity-70 w-full h-screen fixed z-[100] transition-all'
          : 'bg-gray-300 opacity-0 w-full h-screen fixed z-[100]'}
          onClick={() => setActiveNav(false)}></div>
      }
      <NavMobile activeNav={activeNav} />
    </header>
  );
}

export default Header;
