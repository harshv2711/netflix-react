import { useEffect, useState } from "react";
import NetflixSearch from "./NetflixSearch";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`navba py-3 h-17 flex items-center fixed left-0 right-0 top-0 z-10 transition-colors duration-300 ${isScrolled ? "bg-black" : "bg-transparent"
          }`}
      >
        <div className="px-[57px] w-full m-auto flex items-center gap-12">
          <a href="#">
            <img className="h-6" src="/netflix-logo.png" alt="Netflix Logo" />
          </a>

          <nav className="flex items-center justify-between w-full">
            <ul className="primary-nav flex items-center gap-5">
              <li className="nav-item">
                <NavLink to="/" className="nav-link text-sm text-gray-300">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/TV-shows" className="nav-link text-sm text-gray-300">
                  Shows
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/movies" className="nav-link text-sm text-gray-300">
                  Movies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="#" className="nav-link text-sm text-gray-300">
                  Games
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="#" className="nav-link text-sm text-gray-300">
                  News & Popular
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="#" className="nav-link text-sm text-gray-300">
                  My List
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="#" className="nav-link text-sm text-gray-300">
                  Browse by Languages
                </NavLink>
              </li>
            </ul>

            <ul className="secondary-nav flex items-center gap-6">
              <li className="nav-item">
                <div className="search-box">
                 <NetflixSearch onSearch={(text) => console.log("search:", text)} />
                </div>
              </li>
              <li className="nav-item">
                <NavLink to="#" className="text-white text-sm">Children</NavLink>
              </li>
              <li className="nav-item notification">
                <span>
                  <svg className="text-white" viewBox="0 0 24 24" width="24" height="24" data-icon="BellMedium" data-icon-id=":r1:" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" role="img">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0002 4.07092C16.3924 4.55624 19 7.4736 19 11V15.2538C20.0489 15.3307 21.0851 15.4245 22.1072 15.5347L21.8928 17.5232C18.7222 17.1813 15.4092 17 12 17C8.59081 17 5.27788 17.1813 2.10723 17.5232L1.89282 15.5347C2.91498 15.4245 3.95119 15.3307 5.00003 15.2538V11C5.00003 7.47345 7.60784 4.55599 11.0002 4.07086V2H13.0002V4.07092ZM17 15.1287V11C17 8.23858 14.7614 6 12 6C9.2386 6 7.00003 8.23858 7.00003 11V15.1287C8.64066 15.0437 10.3091 15 12 15C13.691 15 15.3594 15.0437 17 15.1287ZM8.62593 19.3712C8.66235 20.5173 10.1512 22 11.9996 22C13.848 22 15.3368 20.5173 15.3732 19.3712C15.3803 19.1489 15.1758 19 14.9533 19H9.0458C8.82333 19 8.61886 19.1489 8.62593 19.3712Z" fill="currentColor"></path>

                  </svg>
                </span>
              </li>
              <li className="nav-item user-account">
                <div className="account-dropdown-button flex items-center">
                  <NavLink
                    to="/YourAccount"
                    role="button"
                    tabIndex={0}
                    aria-haspopup="true"
                    aria-expanded="false"
                    aria-label="Harsh – Account & Settings"
                    className="flex items-center"
                  >
                    <span className="profile-link" role="presentation">
                      <img
                        className="profile-icon h-8 w-8 rounded object-cover"
                        src="https://occ-0-3209-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
                        alt=""
                      />
                    </span>
                  </NavLink>

                  {/* Caret */}
                  <span
                    role="presentation"
                    className="caret ml-2 
               w-0 h-0
               border-t-[5px] border-x-[5px] border-x-transparent border-t-white
               transition-transform duration-[367ms] [transition-timing-function:cubic-bezier(.21,0,.07,1)]"
                  ></span>
                </div>

              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
