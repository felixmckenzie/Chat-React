
import React, { useState } from 'react'

interface TooltipProps {
    children: React.ReactNode
    content: string
}

export const Tooltip: React.FC<TooltipProps> = ({ children, content }) => {
    const [show, setShow] = useState(false)

    return (
        <div className="relative inline-block cursor-pointer" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
            {children}
            {show && <div className="absolute px-2 py-2 mt-4 text-xs rounded-md shadow-lg">{content}</div>}
        </div>
    )
}
