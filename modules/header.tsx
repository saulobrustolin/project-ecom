'use client'

import { useState, useEffect, useRef } from 'react';

import Link from 'next/link';
import MenuBar from './menu-navbar';
import MouseOver from './mouseOver';

import { NavbarMenu } from '@/config/config';

export default function Header() {
    const [menuActivated, setMenuActivated] = useState(false);
    const [navigationBar, setNavigationBar] = useState(false);
    const [titleNavigation, setTitleNavigation] = useState('');
    const [mouseEnter, setMouseEnter] = useState(false);
    const [mouseEnterContent, setMouseEnterContent] = useState(false);
    const [contentLoadingMouseEnter, setContentLoadingMouseEnter] = useState('');

    const refTarget = useRef<HTMLButtonElement | null>(null);

    function menuAction() {
        setMenuActivated(menuActivated => !menuActivated);
        setNavigationBar(false);
    }

    function navigationMenu() {
        setNavigationBar(navigationBar => !navigationBar);
        setMenuActivated(false);
    }

    function closeMenu() {
        setMenuActivated(false);
        setNavigationBar(false);
    }

    function changeTitleNavigation(event: React.MouseEvent<HTMLButtonElement>) {
        const target = event.target as HTMLButtonElement;
        setTitleNavigation(target.innerText);
    }

    function handleClickMenuNavigation(event: React.MouseEvent<HTMLButtonElement>) {
        changeTitleNavigation(event);
        navigationMenu();
    }

    // funções de evento 

    function onMouseEnter(event: React.MouseEvent<HTMLButtonElement>) {
        setMouseEnter(true);
        setMouseEnterContent(true);

        const target = event.target as HTMLButtonElement;
        
        refTarget.current = target;

        setContentLoadingMouseEnter(target.innerText.toLowerCase());
    }

    function onMouseLeave() {
        setMouseEnter(false);
    }

    // funções de evento para o content dos assuntos da header

    function onMouseContentLeave() {
        setMouseEnterContent(false);
    }

    // funções de evento para aparalhos touch

    function handleTouchMenu(event: React.TouchEvent<HTMLButtonElement>) {
        setMouseEnter(mouseEnter => !mouseEnter);
        setMouseEnterContent(mouseEnterContent => !mouseEnterContent);

        refTarget.current = event.target as HTMLButtonElement;
    }

    useEffect(() => {
        if (refTarget.current as HTMLButtonElement) {
            if (refTarget.current.classList.contains('decoration-transparent')) {
                refTarget.current.classList.replace('decoration-transparent', 'decoration-black');
            } else {
                refTarget.current.classList.replace('decoration-black', 'decoration-transparent');
            }
        }
    }, [mouseEnter])

    return (
        <header
            className={'fixed left-0 top-0 z-100 w-full flex flex-col items-center ' + (menuActivated || navigationBar ? 'min-h-screen bg-white items-start border-0' : 'max-h-[50px]')}
        >
            <nav
                className='p-3 px-4 flex justify-between min-w-full border-b border-b-black/10 min-h-[50px] 2xl:px-32'
            >
                <div
                    className='flex gap-24'
                >
                    {navigationBar ? (
                        <button
                        onClick={menuAction}
                            className='animation-fade'
                        >
                            <svg className='rotate-180' fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <polyline points="10 17 15 12 10 7"/>
                            </svg>
                        </button>
                    ) : (
                        <Link
                            href="/"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={150}
                                viewBox="12 286 970 180"
                                className='animation-brand'
                            >
                                <path
                                    fill="black" stroke="black" stroke-width="1"
                                    d="M 85.56,466.00
                                    C 127.73,466.00 155.59,444.92 155.59,413.58
                                        155.59,385.53 136.52,368.48 95.61,357.22
                                        69.50,349.70 62.22,344.44 62.22,335.92
                                        62.22,327.41 71.27,322.16 85.56,322.16
                                        101.88,322.16 120.20,328.41 132.25,337.69
                                        132.25,337.69 151.08,307.59 151.08,307.59
                                        132.75,294.05 109.41,286.00 84.06,286.00
                                        43.39,286.00 19.55,306.84 19.55,336.42
                                        19.55,364.98 37.88,381.27 76.53,391.53
                                        102.89,398.80 112.17,404.56 112.17,413.83
                                        112.17,423.59 102.12,429.11 84.56,429.11
                                        65.48,429.11 48.17,423.34 30.84,411.33
                                        30.84,411.33 12.27,442.41 12.27,442.41
                                        32.09,457.47 58.45,466.00 85.56,466.00 Z
                                    M 210.72,464.00
                                    C 210.72,464.00 253.89,464.00 253.89,464.00
                                        253.89,464.00 253.89,327.67 253.89,327.67
                                        253.89,327.67 305.09,327.67 305.09,327.67
                                        305.09,327.67 305.09,288.00 305.09,288.00
                                        305.09,288.00 159.77,288.00 159.77,288.00
                                        159.77,288.00 159.77,327.67 159.77,327.67
                                        159.77,327.67 210.72,327.67 210.72,327.67
                                        210.72,327.67 210.72,464.00 210.72,464.00 Z
                                    M 402.91,467.00
                                    C 457.38,467.00 496.53,428.61 496.53,376.02
                                        496.53,323.41 457.38,285.00 402.91,285.00
                                        348.94,285.00 309.28,323.41 309.28,376.02
                                        309.28,428.61 348.94,467.00 402.91,467.00 Z
                                    M 353.45,376.02
                                    C 353.45,345.70 374.05,324.42 402.91,324.42
                                        432.02,324.42 452.61,345.70 452.61,376.02
                                        452.61,406.31 432.02,427.59 402.91,427.59
                                        374.05,427.59 353.45,406.31 353.45,376.02 Z
                                    M 523.81,464.00
                                    C 523.81,464.00 641.28,464.00 641.28,464.00
                                        641.28,464.00 641.28,424.09 641.28,424.09
                                        641.28,424.09 566.98,424.09 566.98,424.09
                                        566.98,424.09 566.98,288.00 566.98,288.00
                                        566.98,288.00 523.81,288.00 523.81,288.00
                                        523.81,288.00 523.81,464.00 523.81,464.00 Z
                                    M 665.81,464.00
                                    C 665.81,464.00 708.98,464.00 708.98,464.00
                                        708.98,464.00 708.98,288.00 708.98,288.00
                                        708.98,288.00 665.81,288.00 665.81,288.00
                                        665.81,288.00 665.81,464.00 665.81,464.00 Z
                                    M 744.81,464.00
                                    C 744.81,464.00 786.23,464.00 786.23,464.00
                                        786.23,464.00 786.23,360.17 786.23,360.17
                                        786.23,360.17 864.30,464.00 864.30,464.00
                                        864.30,464.00 899.44,464.00 899.44,464.00
                                        899.44,464.00 899.44,288.00 899.44,288.00
                                        899.44,288.00 858.02,288.00 858.02,288.00
                                        858.02,288.00 858.02,392.09 858.02,392.09
                                        858.02,392.09 779.70,288.00 779.70,288.00
                                        779.70,288.00 744.81,288.00 744.81,288.00
                                        744.81,288.00 744.81,464.00 744.81,464.00 Z
                                    M 934.81,464.00
                                    C 934.81,464.00 977.98,464.00 977.98,464.00
                                        977.98,464.00 977.98,288.00 977.98,288.00
                                        977.98,288.00 934.81,288.00 934.81,288.00
                                        934.81,288.00 934.81,464.00 934.81,464.00 Z"
                                />
                            </svg>

                        </Link>
                    )}

                    <ul
                        className='gap-4 hidden xl:flex'
                    >
                    {NavbarMenu?.map((item, index) => (
                        <li key={index}>
                            <button
                                className='uppercase text-xxs cursor-pointer font-semibold text-black underline transition-opacity-decoration decoration-transparent underline-offset-18 decoration-2'
                                onMouseEnter={onMouseEnter}
                                onMouseLeave={onMouseLeave}
                                onTouchStart={handleTouchMenu}
                            >
                                {item.name}
                            </button>
                        </li>
                    ))}
                    </ul>
                </div>

                {navigationBar ? (
                    <h4
                        className='uppercase font-semibold animation-fade'
                    >
                        {titleNavigation}
                    </h4>
                ) : ''}

                {menuActivated || navigationBar ? (
                    <nav className="flex gap-5">
                        <button
                            onClick={closeMenu}
                        >
                            <svg className='animation-fade' fill="none" height="22" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <line x1="18" x2="6" y1="6" y2="18" />
                                <line x1="6" x2="18" y1="6" y2="18" />
                            </svg>
                        </button>
                    </nav>
                ) : (
                    <nav className="flex gap-5 items-center">
                        <svg className='animation-fade' fill="none" height="22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="11" cy="11" r="8" /><line x1="21" x2="16.65" y1="21" y2="16.65" />
                        </svg>

                        <svg className="animation-fade hidden xl:block" fill="none" height="22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                        </svg>

                        <svg className='animation-fade' fill="none" height="20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>

                        <svg className='animation-fade' fill="none" height="20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" x2="21" y1="6" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" />
                        </svg>

                        <button
                            onClick={menuAction}
                            className='xl:hidden'
                        >
                            <svg className='animation-fade' fill="none" height="22" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <line x1="6" x2="21" y1="12" y2="12" />
                                <line x1="0" x2="21" y1="6" y2="6" />
                            </svg>
                        </button>
                    </nav>
                )}
            </nav>

            {navigationBar ? (
                <MenuBar/>
            ): ''}

            {mouseEnterContent ? (
                <MouseOver
                    content={contentLoadingMouseEnter}
                    onMouseContentLeave={onMouseContentLeave}
                    setMouseEnterContent={setMouseEnterContent}
                    setMouseEnter={setMouseEnter}
                />
            ) : ''}

            {menuActivated ? (
                <div
                    className={'w-full ' + ((menuActivated || navigationBar) ? 'animation-menu' : 'animation-menu-reverse')}
                >   {menuActivated ? (
                    <>
                        <ul
                            className='p-4 my-6 flex flex-col gap-6'
                        >
                            {NavbarMenu?.map((item, index) => (
                                <li
                                    key={index}
                                    className='flex justify-between items-center'
                                >
                                    <button
                                        className='uppercase font-semibold text-black'
                                        onClick={handleClickMenuNavigation}
                                    >
                                        {item.name}
                                    </button>

                                    <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <polyline points="10 17 15 12 10 7"/>
                                    </svg>
                                </li>
                            ))}
                        </ul>

                        <div
                            className='px-3 mt-16 '
                        >
                            <ul
                                className='flex flex-col gap-6 text-black/85'
                            >
                                <li>
                                    <Link
                                        href='#conta'
                                        className='flex gap-4 items-center'
                                    >
                                        <svg fill="none" height="20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                                        </svg>
                                        <label
                                            className='text-sm'
                                        >
                                            <b>Fazer login</b> ou
                                            <b> criar uma conta</b>
                                        </label>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='#carrinho'
                                        className='flex gap-4 items-center'
                                    >
                                        <svg fill="none" height="20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" x2="21" y1="6" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" />
                                        </svg>
                                        <label
                                            className='text-sm font-semibold'
                                        >
                                            Carrinho
                                        </label>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#ajuda"
                                        className='flex gap-4 items-center'
                                    >
                                        <svg fill="none" height="20" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                        </svg>
                                        <label
                                            className='text-sm font-semibold'
                                        >
                                            Ajuda
                                        </label>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </>
                ): ''}
                </div>
            ) : ''}
        </header>
    )
}