import '@unocss/reset/tailwind.css'
import 'uno.css'
import './index.scss'

import App from './App'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.querySelector('#root')!)

if (process.env.NODE_ENV === 'development') {
    import('../mocks/browser')
        .then(({ worker }) => {
            worker.start()
        })
        .then(() => {
            root.render(<App />)
        })
} else root.render(<App />)
