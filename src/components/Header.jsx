import '../App.css'

function Header() {
    return (
        <>
            <header className= "w-screen h-[60px] bg-main-background lato-regular max-w-[1200px]">
                <nav className= "w-full h-full px-[5px] gap-x-8 lg:gap-2.5 m-auto max-w-[1200px] grid grid-cols-2">
                    <div className="max-w-[1200px] mx-auto h-full grid grid-cols-[auto_1fr] items-center px-[15px] gap-x-[30px] gap-y-[12px]">

                        {/* Menu Icon (for small screens) */}
                        <div 
                            className="text-[32px] block lg:hidden cursor-pointer" 
                            onClick={
                            () => {
                                const menu = document.getElementById('mobile-menu');
                                menu.classList.toggle('hidden');
                            }}
                        >
                            <i className='bx bx-menu'></i>
                        </div>

                        {/* Logo */}
                        <div className="text-[20px] font-bold whitespace-nowrap">
                            <a 
                                href="#Home" 
                                className="flex items-center text-main-color transition-colors duration-300 ease-in-out hover:text-secondary-color whitespace-nowrap"
                            >
                                <span className="bx bxs-invader text-[20px] bg-secondary-background rounded px-1.5 py-[5px] mr-[15px]"/>
                            AlgebraicWeirdo
                            </a>
                        </div>

                        {/* Navigation Links */}
                        <ul className="hidden lg:flex items-center gap-[25px] text-[17px] h-full justify-end lato-regular">
                            {/* Home */}
                            <li className="relative">
                                <a 
                                    href="#Home"
                                    className="flex items-center text-main-color transition-colors duration-300 ease-in-out hover:text-secondary-color whitespace-nowrap"
                                >
                                    <span className="bx bx-home mr-[4px] text-[15px]"/>
                                    Home
                                </a>
                                <span className="absolute bottom-0 left-0 w-full h-[3px] scale-x-0" />
                            </li>

                            {/* About Me */}
                            <li className="relative">
                                <a 
                                    href="#AboutMe" 
                                    className="flex items-center text-main-color transition-colors duration-300 ease-in-out hover:text-secondary-color whitespace-nowrap"
                                >
                                    <span className="bx bx-user-pin mr-[4px] text-[15px] "/>
                                    About Me
                                </a>
                                <span className="absolute bottom-0 left-0 w-full h-[3px] scale-x-0 "/>
                            </li>

                            {/* Experiences */}
                            <li className="relative">
                                <a 
                                    href="#Experiences" 
                                    className="flex items-center text-main-color transition-colors duration-300 ease-in-out hover:text-secondary-color whitespace-nowrap"
                                >
                                    <span className="bx bx-receipt mr-[4px] text-[15px]"/>
                                    Experiences
                                </a>
                                <span className="absolute bottom-0 left-0 w-full h-[3px] scale-x-0"/>
                            </li>

                            {/* Contacts */}
                            <li className="relative">
                                <a
                                    href="#Contacts"
                                    className="flex items-center text-main-color transition-colors duration-300 ease-in-out hover:text-secondary-color whitespace-nowrap"
                                >
                                    <span className="bx bx-message-rounded-dots mr-[4px] text-[15px]"/> Contacts
                                </a>
                                <span className="absolute bottom-0 left-0 w-full h-[3px] scale-x-0"/>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu */}
            <ul 
                id="mobile-menu" 
                className="lg:hidden hidden flex-col gap-[20px] text-[17px] px-[15px] py-[10px] bg-[#292929] gap-y-1 lato-light"
            >
                <li>
                    <a 
                        href="#Home" 
                        className="text-main-color transition-colors duration-300 ease-in-out hover:text-secondary-color"
                        onClick={() => {
                            const menu = document.getElementById('mobile-menu');
                            menu.classList.add('hidden');
                        }}
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a 
                        href="#AboutMe" 
                        className="text-main-color transition-colors duration-300 ease-in-out hover:text-secondary-color"
                        onClick={() => {
                            const menu = document.getElementById('mobile-menu');
                            menu.classList.add('hidden');
                        }}
                    >
                        About Me
                    </a>
                </li>
                <li>
                    <a 
                    href="#Experiences" 
                    className="text-main-color transition-colors duration-300 ease-in-out hover:text-secondary-color"
                    onClick={() => {
                        const menu = document.getElementById('mobile-menu');
                        menu.classList.add('hidden');
                      }}>
                        Experiences
                        </a>
                    </li>
                <li>
                    <a 
                    href="#Contacts" 
                    className="text-main-color transition-colors duration-300 ease-in-out hover:text-secondary-color"
                    onClick={() => {
                        const menu = document.getElementById('mobile-menu');
                        menu.classList.add('hidden');
                      }}>
                        Contacts
                    </a>
                </li>
            </ul>
        </>
        
    )
}

export default Header