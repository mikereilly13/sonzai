'use client'

import Link from 'next/link';

function PageHeader({title, links}) {

    return ( 
        <>
        <div className="border rounded-lg shadow-lg p-2 flex items-center gap-4">
            <h1>{title}</h1>
            <ul className="space-y-2">
                {links?.map((link, index) => (
                    <li key={index}>
                        <Link href={link.url}>
                            {link.icon}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        </>
     );
}

export default PageHeader;