import React from 'react'
import { Head } from './Head'
import './Header.css'
import { Navbar } from './Navbar'
import { Search } from './Search'

export const Header = () => {
  return (
    <>
        <Head/>
        <Search/>
        <Navbar/>
    </>
  )
}
