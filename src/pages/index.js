import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import links from "../constants/links"

export default () => (
  <Layout>
    <SimpleHero>
      <Banner title="continue exploring" info="Here are my intro words">
        <Link to="tours" className="btn-white">
          explore tours
        </Link>
      </Banner>
    </SimpleHero>
  </Layout>
)
