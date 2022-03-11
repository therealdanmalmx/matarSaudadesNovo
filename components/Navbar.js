import Link from 'next/link';
import Image from 'next/Image'
import Logo from '../assets/img/logo.jpg'
import { useState } from 'react'; 
import { UserCircleIcon, SearchIcon, HeartIcon, ShoppingBagIcon } from '@heroicons/react/outline'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);  
    return (
        <header className="border-b sticky top-0 z-20 bg-white">
            <nav className="flex items-center max-w-6xl pt-4 pb-2 px-4 mx-auto lg:max-w-screen-xl">
                <div className="header-col justify-start hidden md:flex flex-auto">
                    <div className="header-search pr-4">
                        <SearchIcon className="h-6 w-6"/>
                    </div>
                    <div className="header-account">
                        <UserCircleIcon className="h-6 w-6"/>
                    </div>
                    <div className="header-nav-wrapper flex-auto text-right">
                        <ul className="inline-flex">
                            <li><a className="px-4" href="">item first</a></li>
                            <li><a className="px-4" href="">item first</a></li>
                            <li><a className="px-4" href="">item first</a></li>
                        </ul>
                    </div>
                </div>
                <div className="header-col sm:text-left flex-auto md:text-center">
                    <Link href="/" passHref>
                        <a>
                            <span className="text-lg pt-1 font-bold">
                            <Image
                                src={Logo}
                                alt="Matar Saudades"
                                width={187}
                                height={63}
                            />
                            </span> 
                        </a>
                    </Link>
                </div>
                <div className="header-col justify-end hidden md:flex flex-auto">
                    <div className="header-nav-wrapper flex-auto text-left">
                            <ul className="inline-flex">
                                <li><a className="px-4" href="">item first</a></li>
                                <li><a className="px-4" href="">item first</a></li>
                                <li><a className="px-4" href="">item first</a></li>
                            </ul>
                    </div>
                    <div className="header-wishlist pr-4">
                        <HeartIcon className="h-6 w-6"/>
                    </div>
                    <div className="header-cart">
                        <ShoppingBagIcon className="h-6 w-6"/>    
                    </div>
                </div>
                
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)} className="mobile-menu-button">
                        {!isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                            </svg>
                        ) :(
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>
            
            <div className={`mobile-menu ${isOpen ? 'block' : 'hidden'}`}>
                <ul className="block">
                    <li><a className="px-4" href="">item first</a></li>
                    <li><a className="px-4" href="">item first</a></li>
                    <li><a className="px-4" href="">item first</a></li>
                </ul>
            </div>
        </header>
  );
}
