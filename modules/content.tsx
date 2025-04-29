import Image from "next/image";

export default function Content() {

    return (
        <div>
            <picture>
                <Image
                    src="/content/news_1300.jpg"
                    width={3000}
                    height={800}
                    alt="imagem da coleção principal"
                    className="object-cover max-h-screen"
                />
            </picture>
        </div>
    );
}