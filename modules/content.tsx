import Image from "next/image";

export default function Content() {

    return (
        <div
            className="grid grid-rows-2 md:grid-rows-1 h-screen"
        >
            <picture>
                <source media="(max-width: 768px)" srcSet="/content/news_1000.jpg" />

                <Image
                    src="/content/news_1300.jpg"
                    width={3000}
                    height={1000}
                    alt="imagem da coleção principal"
                    className="object-cover h-full"
                />
            </picture>
            <picture
                className="md:hidden"
            >
                <source media="(max-width: 768px)" srcSet="/content/02/768.jpg" />

                <Image
                    src="/content/02/1920.webp"
                    width={3000}
                    height={1000}
                    alt="imagem da coleção principal"
                    className="object-cover h-full"
                />
            </picture>
        </div>
    );
}