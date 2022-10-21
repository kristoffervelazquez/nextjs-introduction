import React from 'react'

const DarkLayout = ({ children }) => {
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