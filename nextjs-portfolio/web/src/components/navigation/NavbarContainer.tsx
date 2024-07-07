import React from 'react'
import Navbar from './Navbar';

type Props = {}

export default function NavbarContainer({}: Props) {
  return (
    <div className="w-full h-full flex justify-center items-center sticky top-0 z-50">
      <Navbar />
    </div>
  )
}