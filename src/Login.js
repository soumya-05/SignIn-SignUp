import React from 'react'

const Login = (props) => {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props

  return (
    <section className='login'>
      <div className='loginContainer'>
        {!hasAccount && (
          <>
            <label>Name</label>
            <input
              type='text'
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
            />
          </>
        )}
        <label>Email</label>
        <input
          type='text'
          autoFocus
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <p className='errorMsg'>{emailError}</p>
        <label>Password</label>
        <input
          type='password'
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <p className='errorMsg'>{passwordError}</p>
        <div className='btnContainer'>
          {hasAccount ? (
            <>
              <button onClick={handleLogin}>Sign In</button>
              <p>
                Don't have an account ?
                <span
                  onClick={() => setHasAccount((hasAccount) => !hasAccount)}
                >
                  Sign Up
                </span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleSignup}>Sign Up</button>
              <p>
                Already have an account ?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default Login
