import React, { useState, useEffect } from 'react'

export default function useDetector({ sectionName, ref }) {
    const [section, setSection] = useState(null)
    const [entryObserver, setEntryObserver] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                const entry = entries[0]
                setEntryObserver(entry.isIntersecting)
                if (entryObserver) {
                    setSection(sectionName)
                } else {
                    setSection(null)
                }
            },
        )
        observer.observe(ref.current)
    })

    return section
}
