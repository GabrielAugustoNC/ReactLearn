// /src/components/container/Container.js
import React from '../../../node_modules/react'
import './Container.css'

const Container = ({ children }) => (
    <main className="app-container">
        {children}
    </main>
)

export default Container