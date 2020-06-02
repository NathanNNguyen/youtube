import React from 'react'

function Login() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '40%', margin: '0 auto' }}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h3>Sign in</h3>
        <input type='text' placeholder='Username' />
        <input type='password' placeholder='Password' />
        <button>Sign in</button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h2>Welcome back</h2>
        <p>To keep connected with us please login with your personal info</p>
        <button>Sign up</button>
      </div>
    </div>
  )
}

export default Login
