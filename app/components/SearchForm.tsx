'use client'

import { useRef } from "react";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

const SearchForm = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        const params = new URLSearchParams(searchParams);
        if (!inputRef.current?.value) {
            params.delete('search');
        } else {
            params.set('search', inputRef.current?.value);
        }
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <form className="flex flex-column md:flex-row">
            <input
                ref={inputRef}
                className="border-2 px-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                name="search"
                defaultValue={searchParams.get('search')?.toString()}
            />
            <button className="inline-block px-4 py-2 bg-sky-300 mx-1 rounded-md font-oswald min-w-20" onClick={handleClick}>Search</button>
        </form>
    )
}

export default SearchForm;