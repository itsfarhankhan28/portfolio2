import React from 'react'
// import { useNavigate } from 'react-router'

const Button = (props) => {

  return (
    <>
    <a href="https://www.sitepoint.com/github-profile-readme/" target='_blank'>
      <button className='my-3 border-2 border-solid border-black p-2 rounded-xl'>
        {props.btnName}
      </button>
    </a>
    </>
  )
}

export default Button
