import React, { FC, PropsWithChildren } from 'react'

const DarkLayout: FC<PropsWithChildren>  = ({ children }) => {
    return (
        <div style={{
            backgroundColor: 'gray',
            borderRadius: '5px',
            padding: '10px'
        }}>
            <p>Dark-Layout</p>
            {children}
        </div>
    )
}

export default DarkLayout