import React, { useEffect } from "react"
import netlifyIdentity from "netlify-identity-widget"
import { Link } from "gatsby"

export default function Login() {
  useEffect(() => {
    netlifyIdentity.init()
  }, [])

  return (
    <div>
      <h1>Log In</h1>
      <p>Log in to learn secrets!</p>
      <Link to="/">back to the home page</Link>
      <div data-netlify-identity-menu />
    </div>
  )
}
