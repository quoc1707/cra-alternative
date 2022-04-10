import { useEffect, useRef } from 'react'

const useDidUpdateEffect = (
    effect: AnyFunction,
    deps: any[] | undefined = undefined
): void => {
    const mounted = useRef<boolean>()
    useEffect(() => {
        if (!mounted.current) mounted.current = true
        else effect()
    }, deps)
}

export default useDidUpdateEffect
