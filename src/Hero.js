import React from 'react'

const Hero = (props) => {
  const { handleLogout, user } = props
  return (
    <section className='hero'>
      <nav>
        <h2>Welcome {user.displayName}</h2>
        <button onClick={handleLogout}>Log Out</button>
      </nav>
      <h1>Rely-Lab Assignment It is</h1>
    </section>
  )
}

export default Hero
