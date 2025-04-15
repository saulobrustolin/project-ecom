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
            <Image
                src="/image.png"
                width={500}
                height={800}
                alt="imagem de coleção"
            />

            
            <div
                className="absolute top-0 p-2.5 flex flex-col gap-2.5"
            >
                <div>
                    <h1
                        className="font-semibold text-xl"
                    >
                        {title}
                    </h1>

                    <p
                        className="text-sm"
                    >
                        {description}
                    </p>
                </div>

                <div
                    className="flex gap-4"
                >
                    {tratamentAnchor.forEach(value, index) => {

                    }}
                    <a
                        href="#"
                        className="font-semibold uppercase text-md underline underline-offset-8"
                    >
                        para ela
                    </a>
                    <a
                        href="#"
                        className="font-semibold uppercase text-md underline underline-offset-8"
                    >
                        para galleria
                    </a>
                </div>
            </div>
        </div>
    );
}