export interface ContentLoading {
    content: string;
};
  
export interface MouseOverProps extends ContentLoading {
    onMouseContentLeave: () => void;
    setMouseEnter: any;
    setMouseEnterContent: any;
};

export interface ImagesContent {
    images: {
        res_768: string;
        res_1280: string;
        res_1664: string;
      };
    content: string;
};


type subcategoriesValuesHeader = {
    name: string,
    redirect: string
};

interface valuesHeader {
    categorie: {
        name: string,
        subcategories: subcategoriesValuesHeader[]
    }
};


interface contentMenu {
    name: string,
    slug: string,
    subcategories: any | null
}

// variáveis de produção

export const ImagesContent: ImagesContent[] = [
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

export const NavbarMenu = [
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

export const valuesHeader: valuesHeader[] = [
    {
        categorie: {
            name: 'presentes',
            subcategories: [
                {
                    name: 'Presentes para ela',
                    redirect: '#'
                },
                {
                    name: 'Presentes para ele',
                    redirect: '#'
                },
                {
                    name: 'Fragrâncias femininas',
                    redirect: '#'
                },
                {
                    name: 'Fragrâncias masculinas',
                    redirect: '#'
                },
                {
                    name: 'Casa e estilo de vida',
                    redirect: '#'
                },
            ]
        }
    }
]

export const footer = [
    {
        title: 'Ajuda',
        itens: [
            {
                name: 'Fale conosco pelo WhatsApp',
                direct: '#'
            },
            {
                name: 'FAQ',
                direct: '#'
            },
            {
                name: 'Contato',
                direct: '#'
            },
        ]
    },
    {
        title: 'serviços oferecidos',
        itens: [
            {
                name: 'Acompanhe seu pedido',
                direct: '#'
            },
            {
                name: 'Devoluções',
                direct: '#'
            },
        ]
    },
    {
        title: 'Termos e condições legais',
        itens: [
            {
                name: 'Política de Envio',
                direct: '#'
            },
            {
                name: 'Política de Reembolso',
                direct: '#'
            },
            {
                name: 'Termos de Uso',
                direct: '#'
            },
        ]
    },
]