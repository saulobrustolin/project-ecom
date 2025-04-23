import { MouseOverProps, ImagesContent, valuesHeader } from "@/config/config";

import Link from "next/link";
import Image from "next/image";

export default function MouseOver({
    content,
    onMouseContentLeave,
    setMouseEnter,
    setMouseEnterContent
}: MouseOverProps
) {
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
                            <div
                                className="relative group"
                                key={index}
                            >
                                <span
                                    className="absolute top-1/2 left-1/2 text-center font-semibold text-xs uppercase -translate-1/2 text-white z-10 cursor-pointer hidden group-hover:inline-block"
                                >
                                    {item.content}
                                </span>
                                <picture
                                    className="cursor-pointer"
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
                                        className="transition-all group-hover:brightness-60"
                                    />
                                </picture>
                            </div>
                        ))}

                        {valuesHeader?.map((value, i) => {
                            return (
                                <div
                                    className="bg-neutral-300/25 col-start-4 col-span-1 row-span-2 row-start-1 p-2.5 xl:min-w-[175px]"
                                    key={`${value.categorie.name}-${i}`}
                                >
                                    <span
                                        className="text-xs font-semibold text-black transition-opacity hover:opacity-70 cursor-pointer uppercase"
                                    >
                                        {value.categorie.name}
                                    </span>

                                    <ul
                                        className="flex gap-0.5 flex-col"
                                    >
                                        {value.categorie.subcategories.map((subcategorie, index) => {
                                        return (
                                            <li
                                                key={`${subcategorie.name}-${index}`}
                                            >
                                                <Link
                                                    href={subcategorie.redirect}
                                                    className="cursor-pointer text-xxs transition-opacity hover:opacity-70"
                                                >
                                                    {subcategorie.name}
                                                </Link>
                                            </li>
                                        )})}
                                    </ul>
                                </div>
                            )})}
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