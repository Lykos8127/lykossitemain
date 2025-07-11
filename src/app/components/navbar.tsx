'use client'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';   //  default-Import, kein geschweifter Import!
import Logo from '../public/logo.png'
import {AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter} from 'react-icons/ai'
import {useState} from 'react';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleNav = () =>{
        setMenuOpen(!menuOpen);
    }
    return (
    <nav className="w-full h-24 shadow-xl bg-black/70 z-10">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <div onClick={handleNav} className='cursor-pointer pl-24'><AiOutlineMenu size={25} /></div>
        
        <Link href='/'>
            <Image
            src={Logo}
            alt="Logo"
            width="250"
            height="100"
            className='cursor-pointer'
            priority
            />
        </Link>

        
        <div>
            <ul className="hidden sm:flex list-none">  {/* ← REMOVE BULLETS HERE */}
             <li className="ml-10 uppercase hover:scale-110 duration-200 text-lg font-bold">
                 <Link href="/collections">Collections</Link>
              </li>
            </ul>
        </div>
        <div className={
            menuOpen
             ? "fixed left-0 top-0 w-[35%] h-screen bg-black/70  backdrop-blur z-10 p-10 ease-in duration-1500"
            : "fixed left-[-100%] top-0 bg-black/70  backdrop-blur z-10 p-10 ease-in duration-5"
        }>
        <div className='flex w-full items-center justify-end'>
           <div onClick={handleNav} className='cursor-pointer'>
            <AiOutlineClose size={25}/>
            </div> 
        </div>
        <div className='flex-col py-4 '>
            <ul className='font-bold text-3xl'>
                <Link href="/collections">
                    <li
                        onClick={()=> setMenuOpen(false)}
                        className='py-4 cursor-pointer text-white hover:text-white/70 transition-colors duration-300'>
                            Collections
                    </li>
                </Link>
                <Link href="/drops">
                    <li
                        onClick={()=> setMenuOpen(false)}
                        className="py-4 cursor-pointer text-white hover:text-white/70 transition-colors duration-300">
                            Drops
                    </li>
                </Link>
                <Link href="/contact">
                    <li
                        onClick={()=> setMenuOpen(false)}
                        className='py-4 cursor-pointer text-white hover:text-white/70 transition-colors duration-300'>
                            Contact
                    </li>
                </Link>
            </ul>

        </div>
        <div className='flex flex-row justify-around pt-10 items-center '>
            <AiOutlineInstagram size={30}  />
            <AiOutlineFacebook size={30} />
            <AiOutlineTwitter size={30}  />

        </div>
        

        </div>
      </div>
    </nav>
  );
};

export default Navbar;