import '@testing-library/jest-dom'
import 'whatwg-fetch'
import { server } from '../mocks/server'

const originalError = console.error
beforeAll(() => {
    server.listen()

    console.error = (...args: (string | string[])[]) => {
        if (
            args[0].includes(
                'ReactDOM.render is no longer supported in React 18.'
            ) ||
            args[0].includes(
                'Warning: An update to %s inside a test was not wrapped in act'
            )
        ) {
            return
        }

        originalError.call(console, ...args)
    }
})

beforeAll(() => {
    server.resetHandlers()
})

afterEach(() => server.resetHandlers())

afterAll(() => {
    server.close()
    console.error = originalError
})
