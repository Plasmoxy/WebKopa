// react
import * as React from 'react'
import { render } from 'react-dom'
import '../src/style.scss'

import { Button } from 'reactstrap'

interface AppProps {
    
}

export const App = (p: AppProps) => <div className="container">
    <h1 className="text-warning">
        Hello !!
    </h1>
</div>


render(
    <App />,
    document.getElementById('app'),
)