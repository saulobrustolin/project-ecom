import { MouseOverProps } from "@/config/config";
import Image from "next/image";

export default function MouseOver({
        content,
        onMouseContentEnter,
        onMouseContentLeave
      }: MouseOverProps
    ) {
    return (
        <div
            className="bg-white min-w-full p-2.5"
            onMouseOver={onMouseContentEnter}
            onMouseLeave={onMouseContentLeave}
        >
            {(content.toLowerCase() == 'presentes') ? (
                <div
                    className="grid grid-cols-2"
                >
                    <div
                        className="grid grid-cols-3 gap-2 px-auto"
                    >
                        <picture>
                            <source
                                media="(min-width: 768px) and (max-width: 1280px)" 
                                srcSet="/header-section-gifts/01/1280.avif"
                            />
                            <source
                                media="(max-width: 768px)"
                                srcSet="/header-section-gifts/01/768.avif"
                            />
                            <Image
                                alt="imagem da fragrãncia 1"
                                src='/header-section-gifts/01/1664.webp'
                                width={200}
                                height={200}
                            />
                        </picture>

                        <picture>
                            <source
                                media="(min-width: 768px) and (max-width: 1280px)" 
                                srcSet="/header-section-gifts/02/1280.avif"
                            />
                            <source
                                media="(max-width: 768px)"
                                srcSet="/header-section-gifts/02/768.avif"
                            />
                            <Image
                                alt="imagem da fragrãncia 1"
                                src='/header-section-gifts/02/1665.avif'
                                width={200}
                                height={200}
                            />
                        </picture>

                        <picture>
                            <source
                                media="(min-width: 768px) and (max-width: 1280px)" 
                                srcSet="/header-section-gifts/01/1280.avif"
                            />
                            <source
                                media="(max-width: 768px)"
                                srcSet="/header-section-gifts/01/768.avif"
                            />
                            <Image
                                alt="imagem da fragrãncia 1"
                                src='/header-section-gifts/01/1664.webp'
                                width={200}
                                height={200}
                            />
                        </picture>

                        <picture>
                            <source
                                media="(min-width: 768px) and (max-width: 1280px)" 
                                srcSet="/header-section-gifts/01/1280.avif"
                            />
                            <source
                                media="(max-width: 768px)"
                                srcSet="/header-section-gifts/01/768.avif"
                            />
                            <Image
                                alt="imagem da fragrãncia 1"
                                src='/header-section-gifts/01/1664.webp'
                                width={200}
                                height={200}
                            />
                        </picture>

                        <picture>
                            <source
                                media="(min-width: 768px) and (max-width: 1280px)" 
                                srcSet="/header-section-gifts/01/1280.avif"
                            />
                            <source
                                media="(max-width: 768px)"
                                srcSet="/header-section-gifts/01/768.avif"
                            />
                            <Image
                                alt="imagem da fragrãncia 1"
                                src='/header-section-gifts/01/1664.webp'
                                width={200}
                                height={200}
                            />
                        </picture>
                    </div>
                </div>
            ) : ''}
        </div>
    );
}