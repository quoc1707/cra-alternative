import '@unocss/reset/tailwind.css'
import { createRoot } from 'react-dom/client'
import 'uno.css'
import App from './App'
import './index.scss'

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
