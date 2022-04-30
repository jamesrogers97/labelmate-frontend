import React, {useState} from 'react'
import Navbar from '/components/Navbar'
import Sidebar from '/components/Sidebar'

export default function Profile() {
  const [isOpen, setIsOpen] = useState(false)
  
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
    </>
  );
}