'use client'

import Link from 'next/link';
import SearchForm from '@/app/components/SearchForm';

const Navbar = () => {
    return (
        <nav className="py-4" aria-label="Navbar">
            <div className="container flex items-center">
                <h1 className="mr-8 font-medium font-oswald">Video Sharing App</h1>
                <ul className="mr-auto flex">
                    <li className="px-2">
                        <Link href="/" data-name="name" title="Home" className="font-oswald" >Home</Link>
                    </li>
                    <li className="px-2">
                        <Link href="/videos/liked" data-name="name" title="Home" className="font-oswald" >Liked</Link>
                    </li>
                </ul>
                <SearchForm />
            </div>
        </nav>
    );
}

export default Navbar;