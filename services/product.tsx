import Image from "next/image";

export default function Product({ res }) {
    return (
        <div
            className="grid grid-cols-2 gap-2"
        >
            {res?.map((value, index) => {
                return (
                    <div
                        key={`key-${value.name}-${index}`}
                        className="flex flex-col gap-1 mb-2"
                    >
                        <Image
                            src='/product-image.jpg'
                            height={1000}
                            width={1000}
                            alt="product image"
                        />

                        <div
                            className="flex gap-1"
                        >
                            {value.options.map((v, i) => {
                                if (v.name !== null) {
                                    return (
                                        (v.value !== null) ? (
                                            <span
                                                className={`border-1 border-gray-parcial-transparent h-5 w-5 rounded-full block`}
                                                style={{ backgroundColor: v.value }}
                                                key={`key-${v.name}-${i}`}
                                            />
                                        ) : ''
                                    );
                                }
                                return
                                })}
                        </div>

                        <span
                            className="text-sm overflow-hidden whitespace-nowrap text-ellipsis"
                        >
                            {value.name}
                        </span>
                        <span
                            className="text-sm font-semibold"
                        >
                            R${value.price.replace('.', ',')}
                        </span>
                    </div>
                )
            })}
        </div>
    )
};