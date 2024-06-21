import React from 'react'

export default function Helmet({title,children}) {
    document.title =  `${title} - Lafka`
    return (
        <div>
            {children}
        </div>
    )
}
