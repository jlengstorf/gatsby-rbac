import React, { useEffect, useState } from "react"
import netlifyIdentity from "netlify-identity-widget"
import { Link, navigate } from "gatsby"

export default function Secret() {
  const [isAllowed, setIsAllowed] = useState(false)

  useEffect(() => {
    netlifyIdentity.init()

    const user = netlifyIdentity.currentUser()
    const roles = user?.app_metadata?.roles || []

    if (roles.includes("user")) {
      setIsAllowed(true)
      return
    }

    // not logged in — bail to login page
    navigate("/login")
  }, [])

  return isAllowed ? (
    <div>
      <h1>Secrets!</h1>
      <p>You should only be able to see this if you’re logged in.</p>
      <Link to="/">back to the home page</Link>
      <div data-netlify-identity-menu />
    </div>
  ) : null
}
