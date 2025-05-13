import Image from 'next/image';
import Link from 'next/link';

import Product from '@/services/product';

import { useState, useEffect, Suspense } from 'react';

export default function Menu({ activeMenu, menu, inputRef }) {
    const [isFocus, setIsFocus] = useState(false);
    const [inputValue, setInputValue] = useState(null);

    const [allProducts, setAllProducts] = useState(null);

    function search(e) {
        e.key === 'Enter' ? console.log(e.target.value) : '';
    }

    async function getProducts() {
        const res = await fetch(`http://192.168.0.104:9000/products`);
        const products = await res.json();
        setAllProducts(products);
    }

    useEffect(() => {
        setInputValue(inputRef.current.value);

        getProducts();
    }, [])

    return (
        <nav
            className={`shadow-[0_20px_0_2000px_rgba(0,0,0,0.75)] overflow-y-scroll fixed divide-y-1 divide-black-parcial-transparent top-0 left-0 bg-white animation-translate-x md:w-[75%] xl:w-[60%] w-screen h-screen ${!menu ? 'hidden' : ''}`}
        >
            <div
                className='flex gap-4 p-4 justify-between items-center'
            >
                <Image
                    src='brand.svg'
                    height={50}
                    width={120}
                    alt='brand icon'
                />
                <div
                    className='flex gap-4 items-center'
                >
                    <Link
                        href='/'
                    >
                        <Image
                            src='ui-icons/home-01.svg'
                            width={24}
                            height={24}
                            alt='home icon'
                        />
                    </Link>
                    <Image
                        src='ui-icons/x-close.svg'
                        width={30}
                        height={30}
                        alt='close icon'
                        className=''
                        onClick={activeMenu}
                    />
                </div>
            </div>
            <div
                className={`m-4 p-3 flex justify-start items-center gap-2 rounded-md border border-black-parcial-transparent bg-gray-parcial-transparent`}
                onClick={() => inputRef.current.focus()}
            >
                <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke='black' stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <input
                    onFocus={() => setIsFocus(true)}
                    // onBlur={() => setIsFocus(false)}
                    onKeyDown={search} ref={inputRef}
                    onChange={(e) => setInputValue(e.target.value)}
                    type="text"
                    placeholder='Buscar'
                    className='focus:outline-0 w-full h-full'
                />
                {inputValue !== '' ? (
                    <Image
                        src='ui-icons/x-circle.svg'
                        height={20}
                        width={20}
                        alt='icon clean'
                        className='opacity-75'
                        onClick={() => (inputRef.current.value = '')}
                    />
                ) : ''}
            </div>

            {isFocus ? (
                <div
                    className='px-4'
                >
                    <h2
                        className='font-bold text-lg mb-2'
                    >
                        Recomendado para ti
                    </h2>
                    <Suspense fallback={<div className='animation-pulse'>loading...</div>}>
                        <Product
                            res={allProducts}
                        />
                    </Suspense>
                </div>
            ) : (
                <div>
                    hello
                </div>
            )}
        </nav>
    )
}