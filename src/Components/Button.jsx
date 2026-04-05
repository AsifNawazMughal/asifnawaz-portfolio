import Link from 'next/link'
import React from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md'

const Button = ({
    link = "/",
    btext = "button",
    black = false,
    white = false, 

}) => {
  return (
    <div>
      <Link
        href={link}
        className={
          `group inline-flex items-center gap-2 px-5 py-3 border rounded-md transition-colors duration-400 ` +
          (black
            ? 'bg-black text-white shadow hover:bg-primary-background hover:text-dark-signature-text'
            : white
            ? 'border border-light-gray-text hover:bg-primary-foreground hover:text-text-light-white'
            : 'border border-light-gray-text text-primary-foreground hover:bg-primary-foreground hover:text-text-light-white')
        }
      >
        {btext}
        <MdOutlineArrowOutward size={24} className="group-hover:animate-arrow-cycle" />
      </Link>
    </div>
  )
}

export default Button