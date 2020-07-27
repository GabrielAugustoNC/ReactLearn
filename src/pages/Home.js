// /src/pages/Home.js
import React from 'react'
import App from '../containers/App'
import ApiTest from '../components/APIs/ApiTest'

const IndexApp = () => (
    <App>
        <h1>Página Inicial</h1>
        <br />
        <ApiTest />
    </App>
)

export default IndexApp