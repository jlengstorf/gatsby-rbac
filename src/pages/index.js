import React, { useEffect } from "react"
import netlifyIdentity from "netlify-identity-widget"
import { Link } from "gatsby"

export default function Home() {
  useEffect(() => {
    netlifyIdentity.init()
  }, [])
  return (
    <div>
      <h1>Testing Netlify Identity in Gatsby</h1>
      <p>
        You have to be logged in to see the{" "}
        <Link to="/secret">secret page</Link>.
      </p>
      <div data-netlify-identity-menu />
    </div>
  )
}
