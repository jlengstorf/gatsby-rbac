import React, { useEffect } from "react"
import netlifyIdentity from "netlify-identity-widget"
import { Link } from "gatsby"

export default function Secret() {
  useEffect(() => {
    netlifyIdentity.init()
  }, [])

  return (
    <div>
      <h1>Secrets!</h1>
      <p>You should only be able to see this if you’re logged in.</p>
      <Link to="/">back to the home page</Link>
      <div data-netlify-identity-menu />
    </div>
  )
}
