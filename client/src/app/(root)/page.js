import About from '@/components/Home/About'
import Banner from '@/components/Home/Banner'
import Download from '@/components/Download'
import Services from '@/components/Home/Services'
import React from 'react'

export default function Home() {
    return (
        <>
            <Banner />
            <About />
            <Services />
            <Download />
        </>
    )
}
