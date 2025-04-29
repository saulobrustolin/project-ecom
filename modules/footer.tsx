'use client'

import { useState, useEffect } from 'react';

export default function Footer() {
    const [themeDark, setThemeDark] = useState(true);
    
        useEffect(() => {
            setThemeDark(false);
        }, []);

    return (
        <footer
            className={`grid grid-cols-1 xl:grid-cols-3 ${themeDark ? 'bg-black' : 'bg-white'}`}
        >
            footer
        </footer>
    );
}