import React from "react"
import { Link } from "gatsby"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
export default () => (
  <>
    <Navbar />
    Hello world!!!<Link to="/blog/">blog page</Link>
    <Footer />
  </>
)
