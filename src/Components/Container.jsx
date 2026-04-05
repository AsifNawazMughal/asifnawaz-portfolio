import React from 'react'

const Container = ({children}) => {
  return (
    <div className=" mx-auto px-4 lg:px-8 py-10 lg:py-10 flex md:w-[75%]">
        {children}
    </div>
  )
}

export default Container