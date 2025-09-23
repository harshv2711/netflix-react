function Navbar(){
    return <>
    <div className="navba py-3 h-17 flex items-center fixed left-0 right-0 top-0 z-10">
        <div className="px-[57px] w-full m-auto flex items-center gap-12">
            <a href="#">
                <img className="h-6" src="/netflix-logo.png" alt="" srcset="" />
            </a>

            <nav>
                <ul className="primary-nav flex items-center gap-5">
                    <li className="nav-item">
                        <a href="#" className="nav-link text-sm text-gray-300">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link text-sm text-gray-300">Shows</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link text-sm text-gray-300">Movies</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link text-sm text-gray-300">Games</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link text-sm text-gray-300">News & Popular</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link text-sm text-gray-300">MyList</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link text-sm text-gray-300">Browser by Lanuages</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    </>
}

export default Navbar;