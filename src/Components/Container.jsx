import React from 'react'

const Container = ({children, className = ''}) => {
  return (
    <div className={`mx-auto px-2 lg:px-8 md:w-[75%] ${className}`}>
        {children}
    </div>
  )
}

export default Container