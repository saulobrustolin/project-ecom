import Image from "next/image";

export default function Content(
        title: string,
        description: string,
        anchor: string,
        imageURL: string,
        directionsAnchor: string
    ) {

    const tratamentAnchor: Array<string> = anchor.split(", ");
    const tratamentDirections: Array<string> = directionsAnchor.split(", ");

    return (
        <div
            className="relative"
        >
            <picture>
                <source media="(min-width: 1280px)" srcSet="/card_01/image_principalCard_high.avif" />

                <source media="(min-width: 768px) and (max-width: 1280px)" srcSet="/card_01/image_principal_1279.avif" />
                
                <Image
                    src="/card_01/image_principal_767.avif"
                    width={3000}
                    height={800}
                    alt="imagem da coleção principal"
                />
            </picture>
        
            <div
                className="absolute top-0 p-2.5 flex flex-col gap-2.5"
            >
                <div>
                    <h1
                        className="font-semibold text-xl"
                    >
                        Days of Summer
                    </h1>

                    <p
                        className="text-sm font-semibold"
                    >
                        Uma nova abordagem para a temporada de verão
                    </p>
                </div>

                <div
                    className="flex gap-4"
                >
                    <a
                        href="#"
                        className="font-semibold uppercase text-sm underline underline-offset-12"
                    >
                        para ela
                    </a>
                    <a
                        href="#"
                        className="font-semibold uppercase text-sm underline underline-offset-12"
                    >
                        para galleria
                    </a>
                </div>
            </div>
        </div>
    );
}