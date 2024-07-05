import React from 'react'

const IconTextButton = ({buttonIcon,buttonText}) => {
  return (
    <button className="px-3 py-2.5 text-xs font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
      <span className="w-3 h-3 text-white me-2">
        {buttonIcon}
      </span>
        {buttonText}
    </button>
  )
}

export default IconTextButton
