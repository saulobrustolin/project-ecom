import { MouseOverProps, ImagesContent } from "@/config/config";

import Image from "next/image";
import Link from "next/link";

export default function MouseOver({
    content,
    onMouseContentLeave,
    setMouseEnter,
    setMouseEnterContent
}: MouseOverProps
) {
    const ImagesContent: ImagesContent[] = [
        {
            images: {
                res_768: '/header-section-gifts/01/768.avif',
                res_1280: '/header-section-gifts/01/1280.avif',
                res_1664: '/header-section-gifts/01/1664.webp'
            },
            content: 'Presentes para ela'
        },
        {
            images: {
                res_768: '/header-section-gifts/02/768.avif',
                res_1280: '/header-section-gifts/02/1280.avif',
                res_1664: '/header-section-gifts/02/1664.avif'
            },
            content: 'Presentes para ele'
        },
        {
            images: {
                res_768: '/header-section-gifts/03/768.avif',
                res_1280: '/header-section-gifts/03/1280.avif',
                res_1664: '/header-section-gifts/03/1664.avif'
            },
            content: 'Fragrâncias femininas'
        },
        {
            images: {
                res_768: '/header-section-gifts/04/768.avif',
                res_1280: '/header-section-gifts/04/1280.avif',
                res_1664: '/header-section-gifts/04/1664.avif'
            },
            content: 'Fragrâncias masculinas'
        },
        {
            images: {
                res_768: '/header-section-gifts/01/768.jpg',
                res_1280: '/header-section-gifts/05/1280.avif',
                res_1664: '/header-section-gifts/05/1664.avif'
            },
            content: 'Casa e estilo de vida'
        }
    ];

    function disableBar() {
        setMouseEnter(false);
        setMouseEnterContent(false);
    }

    return (
        <div
            className="bg-white min-w-full p-2.5 z-50 content-header"
            onMouseLeave={onMouseContentLeave}
        >
            {(content.toLowerCase() == 'presentes') ? (
                <div
                    className="grid grid-cols-[40%_1fr] 2xl:px-29.5"
                >
                    <div
                        className="grid grid-cols-4 gap-2"
                    >
                        {ImagesContent.map((item, index) => (
                            <picture
                                key={index}
                                data-content={item.content}
                                className="after-content relative"
                            >
                                <source
                                    media="(min-width: 768px) and (max-width: 1280px)"
                                    srcSet={item.images.res_1280}
                                />
                                <source
                                    media="(max-width: 768px)"
                                    srcSet={item.images.res_768}
                                />
                                <img
                                    src={item.images.res_1664}
                                    alt={item.content}
                                />
                            </picture>
                        ))}

                        <div
                            className="bg-neutral-300/25 col-start-4 col-span-1 row-span-2 row-start-1 p-2.5 xl:min-w-[175px]"
                        >
                            <span
                                className="text-xs font-semibold text-black transition-opacity-hover cursor-pointer"
                            >PRESENTES</span>
                            <ul
                                className="flex gap-1 flex-col"
                            >
                                <li>
                                    <Link
                                        href='#'
                                        className="cursor-pointer text-xxs transition-opacity-hover"
                                    >
                                        Presentes para ela
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='#'
                                        className="cursor-pointer text-xxs transition-opacity-hover"
                                    >
                                        Presentes para ele
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='#'
                                        className="cursor-pointer text-xxs transition-opacity-hover"
                                    >
                                        Fragrâncias femininas
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='#'
                                        className="cursor-pointer text-xxs transition-opacity-hover"
                                    >
                                        Fragrâncias masculinas
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='#'
                                        className="cursor-pointer text-xxs transition-opacity-hover"
                                    >
                                        Casa e estilo de vida
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <button
                        className="flex justify-end items-start"
                        onClick={disableBar}
                    >
                        <svg className="cursor-pointer" fill="none" height="20" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <line x1="18" x2="6" y1="6" y2="18" /><line x1="6" x2="18" y1="6" y2="18" />
                        </svg>
                    </button>
                </div>
            ) : ''}
        </div>
    );
}