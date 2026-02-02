import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Scroll from './../Scroll/Scroll';

export default function Layout({ categoryState }) {
  return (
    <>
    <Scroll watch={categoryState} />
    <Navbar />
     
     <Outlet />

    <Footer />
    </>
  )
}
