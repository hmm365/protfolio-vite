import React, { useEffect, useState } from 'react'

import Intro from './components/Intro'
import Header from './layout/Header'
import MainCont from './layout/MainCont'
import Footer from './layout/Footer'
import maingsap from './utils/maingsap'
import click from './utils/click'

const App = () => {
    useEffect(() => {
        click()
        maingsap() 
    }, [])

    return (
        <>
            <Intro />
            <Header />
            <MainCont />
            <Footer />
        </>
    )
}

export default App
