import { useCallback } from 'react'

export function useScrollTo() {
    return useCallback((id) => {
        document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
    }, [])
}

export function scrollTo(id) {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}