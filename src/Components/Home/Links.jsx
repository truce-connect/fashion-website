import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoInstagramAlt } from "react-icons/bi";
import "./Link.css"

const Links = () => {
  return (
    <div className='hov'>
        <li><FaFacebookF className='icon' /></li>
        <li><FaSquareXTwitter  className='icon'/></li>
        <li><BiLogoInstagramAlt className='icon' /></li>
    </div>
  )
}

export default Links