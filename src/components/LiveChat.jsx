import { useEffect } from 'react'

export default function LiveChat({ lang }) {
    useEffect(() => {
        const w = window
        w.Tawk_API = w.Tawk_API || {}
        w.Tawk_API.lang = lang
        w.Tawk_LoadStart = new Date()

        const s1 = document.createElement('script')
        s1.async = true
        s1.src = 'https://embed.tawk.to/685f9f82fa020f190dcd7b77/1iuqoe5lq'
        s1.charset = 'UTF-8'
        s1.setAttribute('crossorigin', '*')

        const firstScript = document.getElementsByTagName('script')[0]
        firstScript.parentNode?.insertBefore(s1, firstScript)

        const style = document.createElement('style')
        style.innerHTML = '#tawkchat-container{bottom:96px!important}'
        document.head.appendChild(style)

        return () => {
            s1.remove()
            style.remove()
        }
    }, [lang])
    return null
}
