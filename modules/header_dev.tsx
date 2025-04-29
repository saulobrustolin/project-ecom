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
    const [contentMenu, setContentMenu] = useState(null);

    const [identifyIndex, setIdentifyIndex] = useState(null);

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
        const target = event.target as HTMLButtonElement;

        changeTitleNavigation(event);
        navigationMenu();

        setIdentifyIndex(parseInt(target.getAttribute('identify-index')));
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

    useEffect(() => {
        // Fazer a requisição fetch
        fetch('http://localhost:4000/categories')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na requisição');
                }
                return response.json();
            })
            .then(data => {
                setContentMenu(data);
            })
            .catch(error => {
                console.error('Erro:', error);
            });
    }, []);

    return (
        <header
            className={'fixed left-0 top-0 z-100 w-full flex flex-col items-center bg-transparent ' + (menuActivated || navigationBar ? 'min-h-screen bg-white items-start border-0' : 'max-h-[50px]')}
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
                                <polyline points="10 17 15 12 10 7" />
                            </svg>
                        </button>
                    ) : (
                        <Link
                            href="/"
                        >
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
                        <svg className='animation-fade cursor-pointer' fill="none" height="22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="11" cy="11" r="8" /><line x1="21" x2="16.65" y1="21" y2="16.65" />
                        </svg>

                        <svg className="animation-fade hidden xl:block cursor-pointer" fill="none" height="22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                        </svg>

                        <svg className='animation-fade cursor-pointer' fill="none" height="20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>

                        <svg className='animation-fade cursor-pointer' fill="none" height="20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
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
                <MenuBar
                    index={identifyIndex}
                    content={contentMenu}
                />
            ) : ''}

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
                >
                    <ul
                        className='p-4 my-6 flex flex-col gap-6'
                    >
                        {contentMenu ? (
                            contentMenu.map((item, index) => {
                                return <li
                                    key={`${item}-${index}`}
                                    className='flex justify-between items-center'
                                >
                                    {(item.subcategories.length != 0) ? (
                                        <>
                                            <button
                                                className='uppercase font-semibold text-black'
                                                identify-index={index}
                                                onClick={handleClickMenuNavigation}
                                            >
                                                {item.name}
                                            </button>
                                            <svg className='text-black' fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                                <polyline points="10 17 15 12 10 7" />
                                            </svg>
                                        </>
                                    ) : (
                                        <>
                                            <Link
                                                href={item.slug}
                                                className='uppercase font-semibold text-black'
                                            >
                                                {item.name}
                                            </Link>
                                            {/* <svg fill="none" height="20" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                                <line x1="7" x2="17" y1="17" y2="7" />
                                                <polyline points="7 7 17 7 17 17" />
                                            </svg> */}
                                        </>
                                    )}
                                </li>
                            })
                        ) : ''}
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
                                    className='flex gap-4 items-center cursor-pointer'
                                >
                                    <svg fill="none" height="20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
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
                                    className='flex gap-4 items-center cursor-pointer'
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
                                    className='flex gap-4 items-center cursor-pointer'
                                >
                                    <svg fill="none" height="20" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
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
                </div>
            ) : ''}
        </header>
    )
}