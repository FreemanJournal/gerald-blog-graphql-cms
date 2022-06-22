import React from 'react'
import { ToastContainer } from 'react-toastify'
import {Header,Footer} from './'
const Layout = ({children}) => {
  return (
    <>
  
    <Header/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout