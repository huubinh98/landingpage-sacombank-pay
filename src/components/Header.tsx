import { MENU } from "../constants";

function Header() {
  return (
    <header className="w-full bg-sky-700 h-20">
      <div className="container mx-auto flex justify-between items-center h-full">
        <h1>
          <a href="https://www.sacombank.com.vn/">
            <img src="/images/Logo.png" alt="sacombank logo" />
          </a>
        </h1>
        <ul className="flex justify-between items-center gap-8">
          {MENU.map((item, index) => (
            <li key={index}>
              <a href="" className="text-white">
                {item}
              </a>
            </li>
          ))}
        </ul>
        <button>Tiếng Việt</button>
      </div>
    </header>
  );
}

export default Header;
