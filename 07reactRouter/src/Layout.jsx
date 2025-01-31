import React from 'react'
import Header from './components/Header/header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function () {
        // this oulet means this is dynamic, means only header nd footer are fixed for All
  return (
    <>
     <Header />
    <Outlet/>
    <Footer />
    </>
    )
}
