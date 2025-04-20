'use client'

import { useState, useEffect, useRef } from 'react';

import Link from 'next/link';
import MenuBar from './menu-navbar';
import MouseOver from './mouseOver';

export default function Header() {
    const [menuActivated, setMenuActivated] = useState(false);
    const [navigationBar, setNavigationBar] = useState(false);
    const [titleNavigation, setTitleNavigation] = useState('');
    const [mouseEnter, setMouseEnter] = useState(false);
    const [mouseEnterContent, setMouseEnterContent] = useState(false);
    const [contentLoadingMouseEnter, setContentLoadingMouseEnter] = useState('');

    const refTarget = useRef<HTMLButtonElement | null>(null);

    const NavbarMenu = [
        {
            'name': 'presentes',
            'endpoint': '#presentes'
        },
        {
            'name': 'feminino',
            'endpoint': '#feminino'
        },
        {
            'name': 'masculino',
            'endpoint': '#masculino'
        },
        {
            'name': 'bolsas',
            'endpoint': '#bolsas'
        },
        {
            'name': 'casa',
            'endpoint': '#casa'
        },
        {
            'name': 'pradasphere',
            'endpoint': '#pradasphere'
        },
    ];

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

        setContentLoadingMouseEnter(target.innerText.toLowerCase());

        refTarget.current = target;
    }

    function onMouseLeave(event: React.MouseEvent<HTMLButtonElement>) {
        if ((mouseEnter && mouseEnterContent) == true ) {
            refTarget.current.classList.remove('font-medium');
            refTarget.current.classList.add('font-bold', 'underline', 'underline-offset-8', 'animation-offset');
        }
    }

    // funções de evento para o content dos assuntos da header

    function onMouseContentEnter() {
        setMouseEnterContent(true);
        setMouseEnter(true);
    }

    function onMouseContentLeave() {
        setMouseEnterContent(false);
        setMouseEnter(false);
    }

    // funções de evento para aparalhos touch

    function handleTouchMenu(event: React.TouchEvent<HTMLButtonElement>) {
        setMouseEnter(mouseEnter => !mouseEnter);
        setMouseEnterContent(mouseEnterContent => !mouseEnterContent);

        refTarget.current = event.target as HTMLButtonElement;
    }

    // funções de estilização
    function addStyle() {
        if ((mouseEnter && mouseEnterContent) == true ) {
            refTarget.current.classList.remove('font-medium');
            refTarget.current.classList.add('font-bold', 'underline', 'underline-offset-8', 'animation-offset');
        }
    }

    function removeStyle() {
        if ((mouseEnter) == false) {
            refTarget.current.classList.remove('font-bold', 'underline', 'underline-offset-8');
            refTarget.current.classList.add('font-medium');
        }
    }

    // funções de estado

    useEffect(() => {
        if (refTarget.current as HTMLButtonElement) {
            addStyle();
            removeStyle();
        }
    }, [mouseEnter, mouseEnterContent]);

    return (
        <header
            className={'fixed left-0 top-0 z-100 w-full flex flex-col items-center ' + (menuActivated || navigationBar ? 'min-h-screen bg-white items-start border-0' : 'max-h-[50px]')}
        >
            <nav
                className='p-3 px-4 flex justify-between min-w-full border-b border-b-black/20 min-h-[50px] 2xl:px-32'
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
                                height="25"
                                viewBox="30 156 944 172"
                                className={navigationBar ? 'animation-brand-reverse' : 'animation-brand'}
                            >
                                <path
                                    fill="black"
                                    d="M 41.00,269.00
                                    C 42.60,269.13 44.10,269.06 45.51,270.02
                                        47.38,271.31 49.16,275.87 50.17,278.00
                                        52.45,282.85 54.98,287.60 58.04,292.00
                                        67.64,305.82 78.95,313.30 96.00,313.96
                                        120.34,314.91 129.96,292.75 120.44,280.00
                                        114.84,272.50 105.37,268.30 97.00,264.72
                                        79.88,257.39 52.74,249.90 40.30,235.96
                                        19.18,212.29 32.53,171.67 66.00,160.82
                                        79.60,156.31 96.27,157.62 110.00,160.82
                                        110.00,160.82 130.00,166.34 130.00,166.34
                                        136.35,166.70 135.43,160.77 145.00,160.00
                                        145.00,160.00 145.00,210.00 145.00,210.00
                                        144.98,212.95 145.07,219.05 140.19,217.34
                                        137.40,216.37 130.20,203.22 127.98,200.00
                                        121.05,189.97 109.12,177.21 97.00,173.93
                                        84.42,170.52 69.24,175.69 67.16,190.00
                                        64.86,205.78 74.86,213.63 88.00,219.69
                                        106.92,228.42 141.17,237.43 154.91,252.01
                                        168.75,266.71 165.19,291.14 153.48,306.00
                                        149.02,311.67 142.39,316.87 136.00,320.22
                                        120.85,328.15 103.58,329.45 87.00,326.39
                                        87.00,326.39 68.00,321.30 68.00,321.30
                                        68.00,321.30 41.00,324.00 41.00,324.00
                                        41.00,324.00 41.00,269.00 41.00,269.00 Z
                                    M 395.00,158.42
                                    C 419.34,155.45 446.75,163.01 463.91,181.01
                                        497.70,216.46 493.87,285.28 453.00,313.96
                                        436.18,325.76 418.94,328.23 399.00,328.00
                                        392.14,327.92 383.58,326.26 377.00,324.28
                                        343.59,314.22 323.05,282.18 323.00,248.00
                                        323.00,248.00 323.00,237.00 323.00,237.00
                                        323.18,221.69 329.82,202.49 338.57,190.00
                                        353.11,169.23 371.01,162.05 395.00,158.42 Z
                                    M 168.00,161.00
                                    C 168.00,161.00 312.00,161.00 312.00,161.00
                                        312.00,161.00 314.83,197.00 314.83,197.00
                                        314.83,197.00 317.00,217.00 317.00,217.00
                                        317.00,217.00 311.00,217.00 311.00,217.00
                                        307.41,201.27 295.62,183.71 280.00,178.09
                                        272.68,175.45 267.54,176.00 260.00,176.00
                                        260.00,176.00 260.00,295.00 260.00,295.00
                                        260.17,309.05 266.81,317.81 281.00,320.00
                                        281.00,320.00 281.00,325.00 281.00,325.00
                                        281.00,325.00 199.00,325.00 199.00,325.00
                                        199.00,325.00 199.00,320.00 199.00,320.00
                                        211.43,317.46 218.84,309.99 219.00,297.00
                                        219.00,297.00 219.00,176.00 219.00,176.00
                                        202.76,176.00 191.43,178.38 180.67,192.00
                                        177.18,196.41 174.62,200.89 172.31,206.00
                                        168.93,213.50 170.38,216.38 163.00,217.00
                                        163.00,217.00 164.83,197.00 164.83,197.00
                                        164.83,197.00 168.00,161.00 168.00,161.00 Z
                                    M 488.00,161.00
                                    C 488.00,161.00 570.00,161.00 570.00,161.00
                                        570.00,161.00 570.00,166.00 570.00,166.00
                                        556.33,168.11 549.17,176.17 549.00,190.00
                                        549.00,190.00 549.00,310.00 549.00,310.00
                                        549.00,310.00 587.00,310.00 587.00,310.00
                                        595.17,309.96 602.29,307.67 609.00,302.96
                                        616.60,297.62 621.90,290.32 625.83,282.00
                                        630.97,271.13 629.36,269.53 636.00,269.00
                                        636.00,269.00 631.00,325.00 631.00,325.00
                                        631.00,325.00 488.00,325.00 488.00,325.00
                                        488.00,325.00 488.00,320.00 488.00,320.00
                                        500.43,317.46 507.84,309.99 508.00,297.00
                                        508.00,297.00 508.00,191.00 508.00,191.00
                                        507.98,176.97 502.09,168.88 488.00,166.00
                                        488.00,166.00 488.00,161.00 488.00,161.00 Z
                                    M 636.00,161.00
                                    C 636.00,161.00 718.00,161.00 718.00,161.00
                                        718.00,161.00 718.00,166.00 718.00,166.00
                                        702.63,168.38 697.02,177.20 697.00,192.00
                                        697.00,192.00 697.00,294.00 697.00,294.00
                                        697.02,308.69 702.64,317.82 718.00,320.00
                                        718.00,320.00 718.00,325.00 718.00,325.00
                                        718.00,325.00 636.00,325.00 636.00,325.00
                                        636.00,325.00 636.00,320.00 636.00,320.00
                                        648.43,317.46 655.84,309.99 656.00,297.00
                                        656.00,297.00 656.00,191.00 656.00,191.00
                                        655.98,176.97 650.09,168.88 636.00,166.00
                                        636.00,166.00 636.00,161.00 636.00,161.00 Z
                                    M 722.00,161.00
                                    C 722.00,161.00 794.00,161.00 794.00,161.00
                                        794.00,161.00 794.00,166.00 794.00,166.00
                                        791.92,166.49 789.90,166.95 788.04,168.08
                                        776.52,175.13 789.08,190.54 794.00,198.00
                                        794.00,198.00 833.31,259.00 833.31,259.00
                                        833.31,259.00 853.00,289.00 853.00,289.00
                                        853.00,289.00 853.00,192.00 853.00,192.00
                                        852.98,177.50 846.99,168.32 832.00,166.00
                                        832.00,166.00 832.00,161.00 832.00,161.00
                                        832.00,161.00 886.00,161.00 886.00,161.00
                                        886.00,161.00 886.00,166.00 886.00,166.00
                                        872.37,168.11 865.17,176.24 865.00,190.00
                                        865.00,190.00 865.00,325.00 865.00,325.00
                                        865.00,325.00 842.00,325.00 842.00,325.00
                                        842.00,325.00 834.33,323.98 834.33,323.98
                                        834.33,323.98 827.66,315.00 827.66,315.00
                                        827.66,315.00 814.19,294.00 814.19,294.00
                                        814.19,294.00 773.00,230.00 773.00,230.00
                                        773.00,230.00 754.00,202.00 754.00,202.00
                                        754.00,202.00 754.00,291.00 754.00,291.00
                                        754.02,306.31 758.19,317.36 775.00,320.00
                                        775.00,320.00 775.00,325.00 775.00,325.00
                                        775.00,325.00 722.00,325.00 722.00,325.00
                                        722.00,325.00 722.00,320.00 722.00,320.00
                                        736.09,317.12 741.98,309.03 742.00,295.00
                                        742.00,295.00 742.00,189.00 742.00,189.00
                                        741.84,176.01 734.43,168.54 722.00,166.00
                                        722.00,166.00 722.00,161.00 722.00,161.00 Z
                                    M 890.00,161.00
                                    C 890.00,161.00 972.00,161.00 972.00,161.00
                                        972.00,161.00 972.00,166.00 972.00,166.00
                                        956.63,168.38 951.02,177.20 951.00,192.00
                                        951.00,192.00 951.00,294.00 951.00,294.00
                                        951.02,308.69 956.64,317.82 972.00,320.00
                                        972.00,320.00 972.00,325.00 972.00,325.00
                                        972.00,325.00 890.00,325.00 890.00,325.00
                                        890.00,325.00 890.00,320.00 890.00,320.00
                                        904.09,317.12 909.98,309.03 910.00,295.00
                                        910.00,295.00 910.00,189.00 910.00,189.00
                                        909.84,176.01 902.43,168.54 890.00,166.00
                                        890.00,166.00 890.00,161.00 890.00,161.00 Z
                                    M 403.00,172.37
                                    C 397.83,172.95 393.79,173.33 389.00,175.63
                                        363.66,187.82 363.96,228.12 364.00,252.00
                                        364.01,260.36 365.74,271.89 367.88,280.00
                                        373.05,299.59 384.87,315.45 407.00,313.91
                                        425.89,312.60 435.34,298.59 440.66,282.00
                                        442.38,276.61 444.53,266.59 444.91,261.00
                                        444.91,261.00 446.00,242.00 446.00,242.00
                                        446.00,242.00 445.09,232.00 445.09,232.00
                                        443.25,205.67 435.72,172.67 403.00,172.37 Z" />
                            </svg>
                        </Link>
                    )}

                    <ul
                        className='gap-4 hidden xl:flex'
                    >
                    {NavbarMenu?.map((item, index) => (
                        <li key={index}>
                            <button
                                className='uppercase text-xs font-medium text-black'
                                onMouseEnter={onMouseEnter}
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

            {(mouseEnter || mouseEnterContent) ? (
                <MouseOver
                    content={contentLoadingMouseEnter}
                    onMouseContentEnter={onMouseContentEnter}
                    onMouseContentLeave={onMouseContentLeave}
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