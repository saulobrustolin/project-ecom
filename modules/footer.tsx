'use client'

import Link from 'next/link';
import Image from 'next/image';

import { useState, useEffect, Suspense } from 'react';

import { footer } from '@/config/config';

export default function Footer() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [width, setWidth] = useState(null);

    useEffect(() => {
        window.addEventListener('resize', () => setWidth(window.innerWidth));
    }, [width])

    useEffect(() => {
        setWidth(window.innerWidth);
    }, [])

    function toggleIndex(index: number) {
        if (width < 768) {
            (index == activeIndex) ? setActiveIndex(null) : setActiveIndex(index);
        }
    }

    return (
        <footer
            className={`grid grid-cols-1 w-full md:grid-cols-3 xl:grid-cols-4 divide-y divide-x divide-black-parcial-transparent`}
        >
            {footer.map((value, index) => {
                return (
                    <div
                        className='flex flex-col divide-y divide-black-parcial-transparent md:divide-y-0 md:px-5 xl:px-20 md:py-6'
                    >
                        <section
                            className='flex flex-col gap-2 p-4 py-6 md:p-0'
                        >
                            <div
                                className='flex justify-between items-center'
                                onClick={() => toggleIndex(index)}
                            >
                                <span
                                    className={`font-semibold uppercase text-sm md:text-xs md:mb-2`}
                                >
                                    {value.title}
                                </span>

                                <svg className={(activeIndex === index) ? 'rotate-180' : '' + 'md:hidden'} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 9L12 15L18 9" stroke="black" stroke-width="2"/>
                                </svg>
                            </div>
                        </section>
                        {((index === activeIndex) || width > 768) ? (
                                <ul
                                    className='animation-footer-content flex flex-col divide-y divide-black-parcial-transparent md:divide-y-0'
                                >
                                    {value.itens.map((item, position) => {
                                        return (
                                            <li
                                                key={`key-itens-${position}-${item.name}`}
                                                className='pl-8 text-sm py-6 md:p-2 md:pl-0 md:text-xs'
                                            >
                                                <Suspense
                                                    fallback={<div className='animate-pulse'></div>}
                                                >
                                                    <Link
                                                        href={item.direct}
                                                        onClick={() => setActiveIndex(null)}
                                                        className='hover:text-stone-600'
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </Suspense>
                                            </li>
                                        )
                                    })}
                                </ul>
                            ) : ''}
                    </div>
                )
            })}

            <div
                className='py-6 flex flex-col items-center justify-center md:col-span-full xl:col-span-1 xl:justify-start xl:items-start xl:px-6 xl:py-6 gap-3'
            >
                <span
                    className='hidden xl:block font-semibold text-xs uppercase'
                >
                    canais de comunicação
                </span>
                <ul
                    className='flex gap-4 items-center'
                >
                    <li>
                        <Image
                            src='/ui-icons/social/instagram.svg'
                            width={22}
                            height={22}
                            alt='instagram icon'
                        />
                    </li>
                    <li>
                        <Image
                            src='/ui-icons/social/pinterest.svg'
                            width={26}
                            height={26}
                            alt='pinterest icon'
                        />
                    </li>
                    <li>
                        <Image
                            src='/ui-icons/social/tiktok.svg'
                            width={20}
                            height={20}
                            alt='tiktok icon'
                        />
                    </li>
                </ul>
            </div>

            <div
                className='p-4 pb-0 text-center md:col-span-full md:p-2'
            >
                <span
                    className='text-[0.6rem] text-[0.6rem]/0.25 text-stone-900'
                >    
                    ©STOLINI 2025 | RUA CONSTANTE RICHETTI, 1550, CEP 99900-000 GETÚLIO VARGAS, RS, BRASIL CNPJ 53.974.761/0001-00
                </span>
            </div>
        </footer>
    );
}