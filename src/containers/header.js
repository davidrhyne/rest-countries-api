import React from 'react'

export function HeaderContainer( {children}) {
    return (
        <div>
            <h2>This is the header container</h2>
            <p>{children}</p>
        </div>
    )
}
