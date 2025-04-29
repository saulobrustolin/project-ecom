'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Footer() {
    const [themeDark, setThemeDark] = useState(false);
    
        useEffect(() => {
            setThemeDark(false);
        }, []);

    return (
        <footer
            className={`grid 
                grid-cols-1 
                w-full
                md:grid-cols-3 
                md:max-w-4/5
                md:my-4
                ${themeDark ? 'bg-black' : 'bg-white'}
            `}
        >
            <div>
                <section
                    className='flex flex-col gap-2'
                >
                    <span
                        className={`text-md ${themeDark ? 'text-white' : 'text-black'} font-bold`}
                    >
                        Ajuda
                    </span>
                    <ul
                        className='flex flex-col gap-2 text-sm'
                    >
                        <li>
                            <Link
                                href='#'
                            >
                                Item
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='#'
                            >
                                Item
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='#'
                            >
                                Item
                            </Link>
                        </li>
                    </ul>
                </section>
            </div>
            <div>
                <section
                    className='flex flex-col gap-2'
                >
                    <span
                        className={`text-md ${themeDark ? 'text-white' : 'text-black'} font-bold`}
                    >
                        Institucional
                    </span>
                    <ul
                        className='flex flex-col gap-2 text-sm'
                    >
                        <li>
                            <Link
                                href='#'
                            >
                                Item
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='#'
                            >
                                Item
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='#'
                            >
                                Item
                            </Link>
                        </li>
                    </ul>
                </section>
            </div>
            <div>
                <div>

                </div>
                <div>
                    <span>Formas de pagamento</span>
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}